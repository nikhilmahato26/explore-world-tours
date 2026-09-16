import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Compass, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Action Buttons (Right Bottom) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct Call Floating Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="group flex items-center gap-2 bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          title="Call Explore World Tours"
        >
          <Phone className="w-4 h-4 text-emerald-400 group-hover:text-navy-950" />
          <span className="text-xs font-bold uppercase tracking-wider hidden group-hover:inline">
            Call 9525528655
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-108 ring-4 ring-emerald-600/20"
          title="Chat with Travel Desk on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold uppercase tracking-wider hidden group-hover:inline">
            WhatsApp Travel Desk
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar: CALL NOW | WHATSAPP | PLAN TRIP */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] py-2 px-3">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex flex-col items-center justify-center py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 transition-colors"
          >
            <Phone className="w-4 h-4 text-navy-900 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Call Now
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              WhatsApp
            </span>
          </a>

          {/* Plan Trip */}
          <Link
            to="/contact#planner"
            className="flex flex-col items-center justify-center py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-gold-400 transition-colors"
          >
            <Compass className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              Plan Trip
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
