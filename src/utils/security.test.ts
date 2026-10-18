import test from 'node:test';
import assert from 'node:assert';
import {
  verifyAdminPasswordSync,
  verifyAdminPassword,
  recordFailedAttempt,
  resetLoginAttempts,
  isLoginLocked,
  sanitizeInput,
  sanitizeUrl,
  LOCKED_ADMIN_PASSWORD_HASH,
  ADMIN_SECRET_PATH,
} from './security.ts';

// Mock sessionStorage in node environment for test
const storage = new Map<string, string>();
(global as any).sessionStorage = {
  getItem: (k: string) => storage.get(k) || null,
  setItem: (k: string, v: string) => storage.set(k, v),
  removeItem: (k: string) => storage.delete(k),
  clear: () => storage.clear(),
};

test('Security: Locked password "mannu9911" validation', async () => {
  // Synchronous check
  assert.strictEqual(verifyAdminPasswordSync('mannu9911'), true);
  assert.strictEqual(verifyAdminPasswordSync('admin'), false);
  assert.strictEqual(verifyAdminPasswordSync('atomy2026'), false);
  assert.strictEqual(verifyAdminPasswordSync('aarti123'), false);
  assert.strictEqual(verifyAdminPasswordSync(''), false);

  // Asynchronous SHA-256 check
  const isCorrect = await verifyAdminPassword('mannu9911');
  assert.strictEqual(isCorrect, true);

  const isWrong = await verifyAdminPassword('wrongpassword');
  assert.strictEqual(isWrong, false);

  // Check SHA-256 hash
  assert.strictEqual(
    LOCKED_ADMIN_PASSWORD_HASH,
    'd8c34bf9c97b1e108bdacac54ae10563a3d7fd3fc4bfb1e98c24d6bf50c428d8'
  );
});

test('Security: Brute-force protection lockout after 5 attempts', () => {
  resetLoginAttempts();
  assert.strictEqual(isLoginLocked().locked, false);

  // 1-4 failed attempts
  for (let i = 1; i <= 4; i++) {
    const res = recordFailedAttempt();
    assert.strictEqual(res.locked, false);
    assert.strictEqual(res.attemptsRemaining, 5 - i);
  }

  // 5th failed attempt triggers lockout
  const lockoutRes = recordFailedAttempt();
  assert.strictEqual(lockoutRes.locked, true);
  assert.strictEqual(lockoutRes.attemptsRemaining, 0);
  assert.strictEqual(isLoginLocked().locked, true);

  // Reset
  resetLoginAttempts();
  assert.strictEqual(isLoginLocked().locked, false);
});

test('Security: Input sanitization strips XSS injections', () => {
  const dirty = '<script>alert("xss")</script>Hello World!';
  const clean = sanitizeInput(dirty);
  assert.ok(!clean.includes('<script>'));
  assert.ok(!clean.includes('</script>'));

  const badUrl = 'javascript:stealCookies()';
  assert.strictEqual(sanitizeUrl(badUrl), '');

  const safeUrl = 'https://in.atomy.com/products/001';
  assert.strictEqual(sanitizeUrl(safeUrl), safeUrl);
});

test('Security: Admin secret path configuration', () => {
  assert.strictEqual(ADMIN_SECRET_PATH, 'store-manager-9911');
});
