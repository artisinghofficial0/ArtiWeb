import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { WhatsAppButton } from '../components/WhatsAppButton.tsx';
import { aartiPortrait, skincareHero } from '../data/initialData.ts';
import {
  ShieldCheck,
  CheckCircle2,
  Heart,
  Sparkles,
  Users,
  Award,
  Globe2,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, siteSettings, navigateTo } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Intro Section (Reference 4/6) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 sm:w-88 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 bg-white dark:bg-slate-800">
            <img
              src={aartiPortrait}
              alt="Aarti Singh Portrait"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs p-3 rounded-xl border border-sky-100 dark:border-slate-700 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-slate-900 dark:text-white">
                  Aarti Singh
                </span>
                <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold">
                  Independent Atomy Distributor
                </span>
              </div>
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Right: Bio & Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Hi, I'm Aarti Singh
          </h1>

          <p className="text-base sm:text-lg font-semibold text-sky-700 dark:text-sky-300">
            Independent Atomy India Distributor
          </p>



          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-slate-800 border border-sky-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 mb-2" />
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Genuine Guidance</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Honest recommendations matched to individual skin and health needs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-slate-800 border border-sky-100 dark:border-slate-700">
              <Heart className="w-5 h-5 text-rose-500 mb-2" />
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Personalised Support</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Ongoing routine follow-up, usage tips, and step-by-step assistance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-slate-800 border border-sky-100 dark:border-slate-700">
              <Award className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Customer Satisfaction</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                100% authentic Korean Atomy products delivered with care.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <WhatsAppButton
              label="Connect with Aarti on WhatsApp"
              variant="whatsapp-green"
              className="px-6 py-3 text-sm"
              sourceContext="about_page_hero"
            />
            <button
              onClick={() => navigateTo('catalogue')}
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>

      {/* Quote Banner (Reference 4/6 Bottom) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="text-4xl sm:text-5xl font-serif text-sky-200 leading-none">“</span>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed italic -mt-4">
            "{t('aartiQuote')}"
          </blockquote>
          <div className="pt-2">
            <span className="block font-bold text-base text-white">Aarti Singh</span>
            <span className="text-xs text-sky-200 uppercase tracking-wider font-semibold">
              Independent Atomy Distributor — Gurgaon, India
            </span>
          </div>
        </div>
      </div>

      {/* Atomy Philosophy Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            The Atomy Creed & Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Principles that guide every product interaction and customer consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2">01</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">Cherish the Spirit</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Believing that people are the ultimate purpose, never a means to an end. Respecting every customer’s wellness journey.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2">02</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">Create the Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Envisioning a healthier, more vibrant tomorrow and guiding our actions toward meaningful personal wellness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2">03</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">Follow the Faith</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Trusting in authentic quality, certified botanical extracts, and honest science that delivers lasting results.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2">04</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">Serve in Humility</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Remaining humble and attentive to every customer’s needs, offering dedicated and transparent guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
