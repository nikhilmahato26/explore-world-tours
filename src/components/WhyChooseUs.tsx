import React from 'react';
import { 
  Compass, 
  Globe2, 
  MessageSquare, 
  ShieldCheck, 
  SlidersHorizontal, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Personalized Travel Planning',
      desc: 'Discuss your ideal travel pace, dates, and budget. Every detail can be customized to your requirements.',
      icon: <SlidersHorizontal className="w-6 h-6 text-navy-900" />,
    },
    {
      title: 'India & International Options',
      desc: 'Extensive holiday solutions covering North, South, East & Central India, plus premier global escapes.',
      icon: <Globe2 className="w-6 h-6 text-ocean-600" />,
    },
    {
      title: 'Easy Direct Enquiry',
      desc: 'No complicated portals or phone trees. Connect straight with our Noida desk via WhatsApp or direct phone call.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Complete Travel Assistance',
      desc: 'Integrated support spanning verified hotels, flight tickets, sanitized cabs and documentation guidance.',
      icon: <ShieldCheck className="w-6 h-6 text-gold-600" />,
    },
    {
      title: 'Flexible Travel Styles',
      desc: 'From family vacations and romantic retreats to pilgrimage yatras and corporate getaways.',
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Customer-Focused Support',
      desc: 'Dedicated assistance during your planning and continuous support while you are on the journey.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-navy-900" />
            <span>Why Explore World Tours</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Your Trusted Travel Partner
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Travel with confidence knowing your domestic and international journeys are planned with care, transparency, and personal attention.
          </p>
        </div>

        {/* 6 Minimalist Cards matching Wanderly style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-50/70 border border-slate-100/90 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300 flex flex-col justify-start group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-100 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
