import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  ShieldCheck,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

import aartiPortrait from '../assets/images/aarti_portrait.jpg';

export const Footer: React.FC = () => {
  const { t, navigateTo, siteSettings } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={aartiPortrait}
                alt="Aarti Singh"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-sky-400/50 shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-2xl tracking-tight text-sky-400">
                    atom<span className="text-sky-300 font-serif">美</span>
                  </span>
                  <span className="font-bold text-xl tracking-wider text-white">ATOMY</span>
                </div>
                <p className="text-xs text-sky-200 font-semibold tracking-wide uppercase">
                  Aarti Singh — Independent Distributor
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to bringing authentic Korean prestige skincare, holistic health, and natural personal care
              to families across India with personalized guidance and care.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sky-300 bg-sky-950/60 p-2.5 rounded-md border border-sky-900/60">
              <ShieldCheck className="w-4 h-4 shrink-0 text-sky-400" />
              <span>Verified Direct Distributor Protocol</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t('footerQuickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  {t('navHome')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('catalogue')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  {t('navCatalogue')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  {t('navAbout')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('opportunity')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  {t('navOpportunity')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  {t('navContact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Aarti Singh Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t('footerSupport')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">WhatsApp Enquiries</span>
                  <a
                    href={`https://wa.me/${siteSettings.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-400 hover:underline"
                  >
                    {siteSettings.displayPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Calling Support</span>
                  <a href={`tel:${siteSettings.whatsappNumber}`} className="font-medium hover:text-white">
                    {siteSettings.displayPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Email Address</span>
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="font-medium text-slate-200 hover:text-white break-all"
                  >
                    {siteSettings.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Location</span>
                  <span className="text-xs text-slate-300">{siteSettings.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Compliance & Disclosures */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t('footerLegal')}
            </h3>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <p>{siteSettings.distributorDisclosure}</p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('privacy')}
                  className="hover:text-sky-400 underline transition-colors"
                >
                  {t('footerPrivacy')}
                </button>
                <span>•</span>
                <button
                  onClick={() => navigateTo('privacy')}
                  className="hover:text-sky-400 underline transition-colors"
                >
                  {t('footerTerms')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t('footerCopyright')}</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Honoring Atomy Philosophy:</span>
            <span className="italic font-semibold text-sky-400">"Cherish the Spirit"</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
