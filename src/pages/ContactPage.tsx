import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { WhatsAppButton } from '../components/WhatsAppButton.tsx';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  Send,
} from 'lucide-react';

import aartiPortrait from '../assets/images/aarti_portrait.jpg';

export const ContactPage: React.FC = () => {
  const { t, siteSettings, createEnquiry } = useApp();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    enquiryType: 'Product Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) {
      setError('Please provide your name.');
      return;
    }

    if (!form.phone.trim() || form.phone.replace(/[^0-9]/g, '').length < 8) {
      setError('Please provide a valid phone/WhatsApp number.');
      return;
    }

    const newEnquiry = createEnquiry({
      customerName: form.name,
      customerContact: form.phone,
      enquiryType:
        form.enquiryType === 'Business Enquiry'
          ? 'opportunity'
          : form.enquiryType === 'Order Tracking'
          ? 'order_tracking'
          : 'product',
      channel: 'web_form',
      sourcePage: '/contact',
      notes: `Submitted message: "${form.message}"`,
    });

    setSubmitted(true);

    // Auto-launch WhatsApp with pre-filled message
    setTimeout(() => {
      const encodedMsg = encodeURIComponent(
        `Hello Aarti,\nMy name is ${form.name}.\nEnquiry Type: ${form.enquiryType}\nReference: ${newEnquiry.referenceCode}\nMessage: "${form.message}"\nMy Contact: ${form.phone}`
      );
      window.open(`https://wa.me/${siteSettings.whatsappNumber}?text=${encodedMsg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Title & Subtitle (Reference 5/6 Top) */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
          {t('customerSupportTitle')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
          {t('customerSupportSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Aarti Profile Card & Contact Info Cards */}
        <div className="lg:col-span-6 space-y-5">
          {/* Aarti Singh Distributor Profile Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-emerald-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800/80 border border-sky-100 dark:border-slate-700 shadow-xs flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-emerald-500/80 shadow-md shrink-0">
              <img
                src={aartiPortrait}
                alt="Aarti Singh - Authorized Atomy Distributor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Authorized Distributor
              </div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                Aarti Singh
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Independent Atomy Consultant • Gurgaon, India
              </p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
              'Hello Aarti, I visited your Atomy distributor website and would like guidance on Atomy products.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex items-start gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-emerald-600 text-white shrink-0 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  WhatsApp
                </span>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                  Recommended
                </span>
              </div>
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                {siteSettings.displayPhone}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Chat with me for quick product enquiries & ordering assistance.
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${siteSettings.whatsappNumber}`}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-sky-500 hover:shadow-md transition-all flex items-start gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-sky-600 text-white shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                Phone Call
              </span>
              <span className="text-base font-bold text-sky-600 dark:text-sky-400 block mt-0.5">
                {siteSettings.displayPhone}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Call between 9:00 AM – 7:00 PM IST (Monday through Saturday).
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${siteSettings.email}`}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-rose-500 hover:shadow-md transition-all flex items-start gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-rose-600 text-white shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                Official Email
              </span>
              <span className="text-sm font-bold text-rose-600 dark:text-rose-400 block mt-0.5 break-all">
                {siteSettings.email}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                I usually respond within 24 hours to all formal inquiries.
              </p>
            </div>
          </a>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-purple-600 text-white shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                Distributor Location
              </span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400 block mt-0.5">
                {siteSettings.address}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Serving customers and partners nationwide across India.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: "Send a Message" Form (Reference 5/6 Right) */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-md">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('sendAMessage')}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Send your request and connect immediately on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-200">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-sm mx-auto">
                Thank you! Your enquiry has been recorded in Aarti Singh’s distributor portal and WhatsApp has been launched with your enquiry reference.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', phone: '', enquiryType: 'Product Enquiry', message: '' });
                }}
                className="mt-4 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Your WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Enquiry Type
                </label>
                <select
                  value={form.enquiryType}
                  onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Product Enquiry">Product Enquiry & Ordering</option>
                  <option value="Business Enquiry">Business Opportunity / Joining Atomy</option>
                  <option value="Order Tracking">Order Tracking & Dispatch Status</option>
                  <option value="General Question">General Guidance / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you're looking for, which products you are interested in, or any skin/health questions..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message & Chat on WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
