import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect With Our Team</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Let's Plan Your Journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Reach out to Explore World Tours for packages, flight bookings, customized group itineraries, and quotes.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Phone Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-card flex flex-col justify-between group hover:bg-white hover:border-slate-200 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy-900 mb-5 border border-slate-100 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950 mb-1">
                Direct Phone Line
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Call our travel specialists for instant assistance and trip quotes.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-lg font-bold text-navy-900 hover:text-gold-600 transition-colors block"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-8 rounded-3xl bg-emerald-50/40 border border-emerald-100 shadow-card flex flex-col justify-between group hover:bg-white hover:border-emerald-200 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-5 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950 mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fastest way to get itineraries, PDF brochures, and quotes.
              </p>
              <span className="text-lg font-bold text-emerald-700 block">
                +91 95255 28655
              </span>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-100">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Email & Location Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-card flex flex-col justify-between group hover:bg-white hover:border-slate-200 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gold-600 mb-5 border border-slate-100 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950 mb-1">
                Office & Email
              </h3>
              <p className="text-xs text-slate-500 mb-2">
                <strong>Location:</strong> {BUSINESS_INFO.location}
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-xs font-semibold text-navy-900 hover:text-gold-600 break-all block mb-2"
              >
                {BUSINESS_INFO.email}
              </a>
              <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-2">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>Mon - Sat: 9:00 AM - 8:30 PM</span>
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70">
              <a
                href={`mailto:${BUSINESS_INFO.email}?subject=Travel%20Enquiry%20-%20Explore%20World%20Tours`}
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className="p-6 rounded-2xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-serif">
                EXPLORE WORLD TOURS — Noida Sector 62, Uttar Pradesh
              </h4>
              <p className="text-xs text-slate-300">
                Authorized travel consultation, transparent quotations, and dedicated on-tour coordination.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors flex-shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 9525528655</span>
          </a>
        </div>
      </div>
    </section>
  );
};
