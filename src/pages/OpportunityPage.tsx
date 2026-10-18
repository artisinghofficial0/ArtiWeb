import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { WhatsAppButton } from '../components/WhatsAppButton.tsx';
import { aartiPortrait } from '../data/initialData.ts';
import {
  Globe2,
  Sparkles,
  Award,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Gift,
  DollarSign,
  Car,
  Plane,
  Briefcase,
  Users,
  Star,
  Check,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

export const OpportunityPage: React.FC = () => {
  const { siteSettings, navigateTo } = useApp();
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const mastershipTiers = [
    {
      level: 'Tier 1',
      title: 'Sales Master',
      monthlyIncome: '₹70,000 – ₹1,50,000',
      tag: 'First Big Milestone',
      description: 'The foundation of passive income in Atomy. Achieved when your left and right consumer teams accumulate 2.5 million Group PV within a 15-day period.',
      rewards: [
        '1x Atomy Absolute CellActive Skincare Set',
        '1x HemoHIM Herbal Health Supplement Set',
        '1x Evening Care 4-Step Cleansing Set',
        'Bi-monthly Mastership Bonus shares',
      ],
      badgeColor: 'bg-sky-600',
    },
    {
      level: 'Tier 2',
      title: 'Diamond Master',
      monthlyIncome: '₹1,50,000 – ₹3,00,000',
      tag: 'Leadership Tier',
      description: 'Developed by nurturing 2 Sales Masters on your left team and 2 on your right team. You now lead a thriving group of product lovers and leaders.',
      rewards: [
        'Latest Laptop or Tablet device',
        '1x Atomy Absolute Skincare Set',
        '1x HemoHIM Box + 1x Evening Care 4 Set',
        'Higher bi-monthly Mastership bonus allocation',
      ],
      badgeColor: 'bg-indigo-600',
    },
    {
      level: 'Tier 3',
      title: 'Sharon Rose Master',
      monthlyIncome: '₹3,00,000 – ₹6,00,000',
      tag: 'Financial Independence',
      description: 'Help 2 leaders on each leg advance to Diamond Master. Substantial one-time cash rewards and luxury global vacations begin at this rank.',
      rewards: [
        '₹1,20,000 Direct Cash Award',
        '2x Overseas Luxury Vacation Travel Tickets',
        'Direct global distributor recognition',
        'Steadily compounding residual royalties',
      ],
      badgeColor: 'bg-rose-600',
    },
    {
      level: 'Tier 4',
      title: 'Star Master',
      monthlyIncome: '₹6,00,000 – ₹12,00,000',
      tag: 'Executive Milestone',
      description: 'Produced by helping 2 Sharon Rose Masters on each side. A milestone that provides multi-generational security for your family.',
      rewards: [
        '₹6,00,000 Direct Cash Award',
        '4x International Luxury Travel Tickets',
        'Executive VIP Seminar speaker privileges',
        'Continuous global revenue sharing',
      ],
      badgeColor: 'bg-amber-600',
    },
    {
      level: 'Tier 5 & 6',
      title: 'Royal & Crown Master',
      monthlyIncome: '₹15,00,000 – ₹35,00,000',
      tag: 'Elite Global Leader',
      description: 'Mentoring strong, self-sustaining networks. Rewards include luxury brand automobiles, monthly executive credit cards, and luxury cruise tours.',
      rewards: [
        'Up to ₹1,80,000 Cash Award',
        'Fully paid Luxury Sedan (BMW / Mercedes class)',
        'Up to ₹3,00,000 Monthly Corporate Card allowance',
        'European / World luxury holiday packages',
      ],
      badgeColor: 'bg-purple-600',
    },
    {
      level: 'Tier 7',
      title: 'Imperial Master',
      monthlyIncome: '₹50,00,000+ / month',
      tag: 'The Ultimate Summit',
      description: 'The pinnacle of Atomy success. Chairman Han-Gill Park personally presents ₹6 Crore in physical cash in an acrylic cube on stage with worldwide celebration.',
      rewards: [
        '₹6,00,000,000 (₹6 Crore) Physical Cash Award on stage',
        'Luxury Chauffeur-driven Limousine Sedan',
        'Luxury 1,700 sq.ft. Office with Personal Assistant',
        'Luxury world tours 2 times a year',
      ],
      badgeColor: 'bg-amber-500',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 space-y-12 sm:space-y-16">
      {/* Hero Banner: Inspiring, Modern & Rewarding */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-8 sm:p-14 shadow-2xl border border-sky-900/50">
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Zero Investment • 100% Free Registration</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Build Long-Term <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300">
              Residual Wealth
            </span>{' '}
            with Atomy
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Partner directly with Independent Distributor Aarti Singh in Gurgaon. Share authentic, world-class Korean beauty and health essentials with families across India and worldwide.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                'Hello Aarti, I want to learn more about the Atomy Independent Distributor opportunity and how to start for free in India. Please guide me!'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Start Free Registration with Aarti →
            </a>

            <a
              href="#rewards-roadmap"
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base rounded-xl backdrop-blur-xs transition-colors"
            >
              Explore Rewards Roadmap ↓
            </a>
          </div>

          {/* Core Atomy Promise */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Registration Fees</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Forced Monthly Purchases</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Lifetime Accumulating PV</span>
            </span>
          </div>
        </div>
      </div>

      {/* The 4 Zero-Risk Foundations Card Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Why Atomy is Different
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            A Genuine Consumer-First Business Model
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
            Unlike traditional network businesses with expensive starter kits and monthly quotas, Atomy empowers true customer-driven residual income.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-sm mb-3">
              ₹0
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Zero Joining Fee
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Anyone with Aadhaar/PAN in India can register 100% free with zero capital risk or mandatory starter packages.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-sm mb-3">
              0
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              No Monthly Quotas
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              No compulsory monthly autoships. You only buy what you and your family genuinely use and love.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-sm mb-3">
              ∞
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Lifetime Personal PV
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Your Personal Point Value (PV) accumulates forever and never resets to zero, qualifying you for lifetime bonuses.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-sm mb-3">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Global One-Server
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Your single Indian ID connects you to consumers in 25+ countries worldwide including Korea, USA, Canada, and UK.
            </p>
          </div>
        </div>
      </div>

      {/* Rewards Roadmap: Mastership Tiers & Incentives */}
      <section id="rewards-roadmap" className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Rewarding Career Path
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Atomy Mastership Rewards & Earnings Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
            Click any rank below to see the verified monthly income potential and tangible one-time milestone rewards.
          </p>
        </div>

        {/* Tier Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {mastershipTiers.map((tier, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedTier(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                selectedTier === idx
                  ? `${tier.badgeColor} text-white shadow-md scale-105`
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              <span>{tier.title}</span>
            </button>
          ))}
        </div>

        {/* Highlighted Tier Card */}
        {(() => {
          const tier = mastershipTiers[selectedTier];
          return (
            <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${tier.badgeColor}`}>
                      {tier.level}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {tier.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    {tier.title}
                  </h3>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 inline-block">
                    <span className="text-[11px] text-slate-400 block font-medium uppercase">
                      Estimated Monthly Income Range
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                      {tier.monthlyIncome}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      (Commissions + Bi-Monthly Mastership Bonuses)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-sky-50/50 dark:from-slate-900 dark:to-slate-900/80 p-6 rounded-2xl border border-sky-100 dark:border-slate-700 space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
                    <Gift className="w-5 h-5 text-amber-500" />
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                      Milestone Awards & Perks
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {tier.rewards.map((rew, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="font-medium">{rew}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Aarti, I am aiming for the ${tier.title} rank with Atomy. Please share the roadmap to achieve this!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                    >
                      <span>Enquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Mentorship With Aarti Singh */}
      <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-xl">
              <img
                src={aartiPortrait}
                alt="Aarti Singh Mentorship"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Personalized Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              What You Receive When You Join My Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              When you start your Atomy journey with Aarti Singh, you are never left alone. You get step-by-step guidance, free product training, and personal support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-750">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  Free 1-on-1 WhatsApp onboarding and official KYC verification
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-750">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  Product samples, Korean skincare regimen guides & materials
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-750">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  Access to weekly training webinars and Atomy India seminars
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-750">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  Zero pressure — build purely through genuine consumer recommendations
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aarti, I want to schedule a 1-on-1 mentorship call to start my Atomy journey.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <span>Connect Directly with Aarti</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Policy Disclosure */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs">
          <ShieldAlert className="w-4 h-4 text-sky-600" />
          <span>Government of India Direct Selling Compliance Disclosure</span>
        </div>
        <p className="leading-relaxed text-[11px]">
          Atomy operates strictly under the Consumer Protection (Direct Selling) Rules, 2021 by the Ministry of Consumer Affairs, Government of India. Registration as an independent distributor is 100% free with no joining fees, no compulsory package investments, and no recruitment fees. Earnings are generated strictly from the sale of authentic products to end consumers.
        </p>
      </div>
    </div>
  );
};
