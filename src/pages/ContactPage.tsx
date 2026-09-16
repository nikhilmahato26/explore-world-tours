import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { CustomTripPlanner } from '../components/CustomTripPlanner';
import { FAQSection } from '../components/FAQSection';
import { MessageCircle, Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FAFBFD] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
          Contact Explore World Tours
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          We are here to answer your travel questions, customize itineraries, and provide instant quotes.
        </p>
      </div>

      {/* Direct Contact Section */}
      <ContactSection />

      {/* Interactive Planner Form */}
      <CustomTripPlanner />

      {/* FAQ Accordion */}
      <FAQSection />
    </div>
  );
};
