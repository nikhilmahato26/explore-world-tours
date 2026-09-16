import React from 'react';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { experiencesData } from '../data/experiences';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const PopularExperiences: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FAFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Themes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Popular Travel Experiences
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              From alpine snow peaks to idyllic tropical coastlines, travel by what inspires you most.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-900 hover:text-gold-600 font-bold text-sm self-start md:self-auto group"
          >
            <span>Consult an Experience Specialist</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Scrollable / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiencesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 min-h-[280px] flex flex-col justify-end p-6 border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

              <div className="relative z-10 text-white">
                <h3 className="font-serif text-xl font-bold mb-1 text-white group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mb-3 leading-relaxed">
                  {item.subtitle}
                </p>
                <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                  <span className="text-[11px] text-gold-300 font-medium truncate max-w-[170px]">
                    {item.destinations}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
