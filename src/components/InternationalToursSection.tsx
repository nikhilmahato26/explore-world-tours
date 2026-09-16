import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Plane, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { getInternationalTourWhatsAppUrl } from '../utils/whatsapp';

export const InternationalToursSection: React.FC = () => {
  const internationalRegions = [
    {
      region: 'Asia & Tropical Escapes',
      subtitle: 'Beaches, street food cultures and vibrant archipelagos',
      countries: ['Thailand', 'Bali (Indonesia)', 'Singapore', 'Malaysia', 'Vietnam', 'Maldives'],
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    },
    {
      region: 'Middle East & Emirates',
      subtitle: 'Futuristic skylines, desert dunes and luxury hospitality',
      countries: ['Dubai', 'Abu Dhabi'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    },
    {
      region: 'Europe & Classics',
      subtitle: 'Alpine summits, historic architecture and scenic romance',
      countries: ['Switzerland', 'France', 'Italy', 'Greece'],
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Horizons</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
              Explore The World
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Plan memorable international holidays with destinations across different countries and regions. Handcrafted routes, visa document guidance, and custom group planning.
            </p>
          </div>

          <a
            href={getInternationalTourWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full uppercase tracking-wider transition-all duration-300 shadow-sm self-start md:self-auto"
          >
            <span>WhatsApp International Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {internationalRegions.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.region}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-2xl font-bold font-serif">{item.region}</h3>
                  <p className="text-xs text-slate-200 mt-1">{item.subtitle}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Featured Destinations
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.countries.map((country) => (
                      <span
                        key={country}
                        className="px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/60"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Customizable options</span>
                  <a
                    href={getInternationalTourWhatsAppUrl(item.region)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <span>Enquire Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="mt-10 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/50 flex items-start gap-3 text-xs text-amber-900/90">
          <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Transparent Travel Presentation:</strong> International destination listings serve as visual examples of destinations we plan and arrange. Specific flight routes, dates, hotel tiers, and documentation support are quoted transparently based on client requirements upon inquiry.
          </p>
        </div>

        {/* Action button */}
        <div className="mt-10 text-center">
          <Link
            to="/international-tours"
            className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Explore International Tours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
