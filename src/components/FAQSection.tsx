import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { faqsData } from '../data/faqs';
import { BUSINESS_INFO } from '../data/business';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Clear, transparent answers about our travel services, booking policies, and domestic & international coverage.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-navy-950 hover:text-gold-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-navy-900 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif font-bold text-navy-950 text-base">
              Still have questions about your itinerary?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Talk directly to our travel experts based in Sector 62, Noida.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-50"
            >
              <Phone className="w-3.5 h-3.5 text-navy-900" />
              <span>Call Desk</span>
            </a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold text-white shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
