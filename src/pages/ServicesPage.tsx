import React, { useEffect } from 'react';
import { TravelServices } from '../components/TravelServices';
import { CustomTripPlanner } from '../components/CustomTripPlanner';
import { Compass, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FAFBFD] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Professional Assistance</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
          Our Travel Services
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Comprehensive travel assistance for individuals, couples, families and corporate groups based in Noida Sector 62.
        </p>
      </div>

      {/* Services Grid */}
      <TravelServices />

      {/* Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Need assistance with flights or visas?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Our travel specialists will review your itinerary, baggage requirements, and document checklist.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call 9525528655</span>
            </a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Planner */}
      <CustomTripPlanner />
    </div>
  );
};
