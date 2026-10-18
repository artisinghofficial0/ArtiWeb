/**
 * Security Module for Atomy India - Aarti Singh Distributor Portal
 * =================================================================
 * Contains password hashing, brute-force protection, session security,
 * input sanitization, and CSRF token generation.
 *
 * PASSWORD IS HARDCODED AS A SHA-256 HASH — can ONLY be changed via code.
 */

/**
 * The pre-computed SHA-256 hash of the locked admin password ("mannu9911"):
 * SHA256("mannu9911") = d8c34bf9c97b1e108bdacac54ae10563a3d7fd3fc4bfb1e98c24d6bf50c428d8
 *
 * LOCKED: This password CANNOT be changed from any UI, form, or setting.
 * It can strictly only be modified by editing this source code file.
 */
export const LOCKED_ADMIN_PASSWORD_HASH = 'd8c34bf9c97b1e108bdacac54ae10563a3d7fd3fc4bfb1e98c24d6bf50c428d8';
const LOCKED_CODE_PASSWORD = 'mannu9911';

/**
 * Constant-time string comparison to prevent timing attacks
 */
function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Compute SHA-256 hash of a string using Web Crypto API
 */
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Synchronous constant-time password verification for React handlers
 * Verifies against locked code password "mannu9911"
 */
export function verifyAdminPasswordSync(inputPassword: string): boolean {
  if (!inputPassword || typeof inputPassword !== 'string') return false;
  return constantTimeCompare(inputPassword, LOCKED_CODE_PASSWORD);
}

/**
 * Asynchronous cryptographic SHA-256 password verification
 * Verifies hash against LOCKED_ADMIN_PASSWORD_HASH
 */
export async function verifyAdminPassword(inputPassword: string): Promise<boolean> {
  if (!inputPassword || typeof inputPassword !== 'string') return false;
  const inputHash = await sha256(inputPassword);
  return constantTimeCompare(inputHash, LOCKED_ADMIN_PASSWORD_HASH);
}

// ─── Brute-Force Protection ─────────────────────────────────────────────────
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000; // 15-minute sliding window

interface LoginAttemptRecord {
  attempts: number;
  firstAttemptAt: number;
  lockedUntil: number | null;
}

const LOGIN_ATTEMPTS_KEY = 'atomy_login_attempts';

function getLoginAttempts(): LoginAttemptRecord {
  try {
    const raw = sessionStorage.getItem(LOGIN_ATTEMPTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Clear stale attempts outside the window
      if (parsed.firstAttemptAt && Date.now() - parsed.firstAttemptAt > ATTEMPT_WINDOW_MS) {
        const fresh: LoginAttemptRecord = { attempts: 0, firstAttemptAt: 0, lockedUntil: null };
        sessionStorage.setItem(LOGIN_ATTEMPTS_KEY, JSON.stringify(fresh));
        return fresh;
      }
      return parsed;
    }
  } catch {}
  return { attempts: 0, firstAttemptAt: 0, lockedUntil: null };
}

function saveLoginAttempts(record: LoginAttemptRecord) {
  sessionStorage.setItem(LOGIN_ATTEMPTS_KEY, JSON.stringify(record));
}

/**
 * Check if the user is currently locked out from login attempts
 */
export function isLoginLocked(): { locked: boolean; remainingSeconds: number } {
  const record = getLoginAttempts();
  if (record.lockedUntil && Date.now() < record.lockedUntil) {
    return {
      locked: true,
      remainingSeconds: Math.ceil((record.lockedUntil - Date.now()) / 1000),
    };
  }
  // Clear lockout if expired
  if (record.lockedUntil && Date.now() >= record.lockedUntil) {
    saveLoginAttempts({ attempts: 0, firstAttemptAt: 0, lockedUntil: null });
  }
  return { locked: false, remainingSeconds: 0 };
}

/**
 * Record a failed login attempt. Returns lockout info.
 */
export function recordFailedAttempt(): { locked: boolean; attemptsRemaining: number; lockoutSeconds: number } {
  const record = getLoginAttempts();
  
  if (!record.firstAttemptAt) {
    record.firstAttemptAt = Date.now();
  }
  
  record.attempts += 1;
  
  if (record.attempts >= MAX_LOGIN_ATTEMPTS) {
    record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
    saveLoginAttempts(record);
    return {
      locked: true,
      attemptsRemaining: 0,
      lockoutSeconds: Math.ceil(LOCKOUT_DURATION_MS / 1000),
    };
  }
  
  saveLoginAttempts(record);
  return {
    locked: false,
    attemptsRemaining: MAX_LOGIN_ATTEMPTS - record.attempts,
    lockoutSeconds: 0,
  };
}

/**
 * Reset login attempts on successful login
 */
export function resetLoginAttempts() {
  sessionStorage.removeItem(LOGIN_ATTEMPTS_KEY);
}

// ─── Session Security ───────────────────────────────────────────────────────

/**
 * Generate a cryptographically secure session token
 */
export function generateSecureSessionToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generate a CSRF-like token for form submissions
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return 'csrf_' + Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}

// Session token storage
const SESSION_TOKEN_KEY = 'atomy_secure_session_token';
const SESSION_EXPIRY_KEY = 'atomy_session_expiry';
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours

/**
 * Create a new secure admin session
 */
export function createAdminSession(): string {
  const token = generateSecureSessionToken();
  const expiry = Date.now() + SESSION_DURATION_MS;
  sessionStorage.setItem(SESSION_TOKEN_KEY, token);
  sessionStorage.setItem(SESSION_EXPIRY_KEY, String(expiry));
  return token;
}

/**
 * Validate the current admin session
 */
export function isAdminSessionValid(): boolean {
  const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
  const expiry = sessionStorage.getItem(SESSION_EXPIRY_KEY);
  
  if (!token || !expiry) return false;
  
  const expiryTime = Number(expiry);
  if (isNaN(expiryTime) || Date.now() > expiryTime) {
    // Session expired — clear it
    destroyAdminSession();
    return false;
  }
  
  return true;
}

/**
 * Destroy the admin session (logout)
 */
export function destroyAdminSession() {
  sessionStorage.removeItem(SESSION_TOKEN_KEY);
  sessionStorage.removeItem(SESSION_EXPIRY_KEY);
  sessionStorage.removeItem('atomy_admin_auth');
}

// ─── Input Sanitization ─────────────────────────────────────────────────────

/**
 * Sanitize HTML input to prevent XSS attacks
 * Strips all HTML tags and dangerous characters
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:/gi, '')
    .trim();
}

/**
 * Sanitize a URL to prevent javascript: protocol attacks
 */
export function sanitizeUrl(url: string): string {
  if (typeof url !== 'string') return '';
  const trimmed = url.trim();
  // Block javascript:, data:, vbscript: protocols
  if (/^(javascript|data|vbscript):/i.test(trimmed)) {
    return '';
  }
  return trimmed;
}

/**
 * Validate and sanitize phone number input
 */
export function sanitizePhone(phone: string): string {
  if (typeof phone !== 'string') return '';
  // Allow only digits, +, -, spaces, parentheses
  return phone.replace(/[^\d+\-\s()]/g, '').trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// ─── Content Security Policy Nonce ──────────────────────────────────────────

/**
 * Generate a nonce for inline scripts (CSP)
 */
export function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

// ─── Admin Access Path ──────────────────────────────────────────────────────

/**
 * The separate admin access path — NOT linked from the main website.
 * Users must know this URL to access the admin panel.
 */
export const ADMIN_SECRET_PATH = 'store-manager-9911';

/**
 * Check if current URL hash matches the secret admin path
 */
export function isAdminAccessPath(): boolean {
  const hash = window.location.hash.replace('#/', '');
  return hash === ADMIN_SECRET_PATH || hash.startsWith(ADMIN_SECRET_PATH);
}
