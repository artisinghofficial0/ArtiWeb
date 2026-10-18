import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { siteSettings, navigateTo } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          Legal & Compliance
        </span>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
          Privacy Notice & Distributor Disclosures
        </h1>
        <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026</p>
      </div>

      {/* Independent Distributor Disclaimer */}
      <div className="p-6 rounded-2xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 space-y-3">
        <div className="flex items-center gap-2 text-sky-900 dark:text-sky-200 font-bold text-sm">
          <Shield className="w-5 h-5 text-sky-600" />
          <span>Independent Atomy India Distributor Notice</span>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          {siteSettings.distributorDisclosure}
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          This website serves as an informative product discovery and enquiry coordination medium. It is not an independent payment gateway, e-commerce checkout, or corporate corporate site of Atomy India Pvt. Ltd. Official order confirmations, registrations, and dispatches occur strictly through authorized Atomy India protocols.
        </p>
      </div>

      {/* Information Collection */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Lock className="w-4 h-4 text-sky-600" />
          <span>1. Information We Collect</span>
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          We collect personal information that you voluntarily provide when enquiring through WhatsApp or submitting our contact forms (such as your name, phone number, and inquiry messages). We also capture anonymous website usage telemetry (such as product page visits and catalogue search terms) solely to improve catalogue discovery. We do not sell or rent personal information to any third parties.
        </p>
      </section>

      {/* WhatsApp Communication */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-sky-600" />
          <span>2. WhatsApp Communications & Enquiry Tracking</span>
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          When clicking "Enquire on WhatsApp", a pre-formatted template is generated for your convenience. You retain full control over whether to send or edit the message. Clicking the link creates an enquiry record with a unique reference code in our distributor portal for customer support coordination.
        </p>
      </section>

      {/* Product Disclaimers */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-sky-600" />
          <span>3. Product & Health Disclaimers</span>
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Atomy dietary health supplements (such as HemoHIM, Vitamin C, and Probiotics) are health functional foods designed to support general well-being and are not intended to diagnose, treat, cure, or prevent any medical disease. Individuals with existing medical conditions or pregnant/nursing mothers should consult their physician before use.
        </p>
      </section>

      {/* Contact Details */}
      <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
        <span className="font-bold text-slate-900 dark:text-white">Questions & Privacy Requests:</span>
        <p className="text-slate-600 dark:text-slate-400">
          Contact Aarti Singh, Independent Distributor:
          <br />
          Email: <span className="text-sky-600 dark:text-sky-400">{siteSettings.email}</span>
          <br />
          WhatsApp: <span className="text-emerald-600 dark:text-emerald-400">{siteSettings.displayPhone}</span>
          <br />
          Address: {siteSettings.address}
        </p>
      </section>
    </div>
  );
};
