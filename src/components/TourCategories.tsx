import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Users, Compass, Shield, Briefcase, Sliders } from 'lucide-react';
import { tourCategories } from '../data/categories';
import { getCustomTripWhatsAppUrl } from '../utils/whatsapp';

export const TourCategories: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Tailored For Every Traveler</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Find Your Perfect Trip
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Whatever your travel style or companions, we curate memories customized around your expectations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tourCategories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 min-h-[300px] flex flex-col justify-end p-6 border border-slate-100"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10 transition-opacity" />

              {/* Card Body */}
              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-gold-300 inline-block mb-3 border border-white/20">
                  {cat.tag}
                </span>
                <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] text-slate-300">{cat.count}</span>
                  <a
                    href={getCustomTripWhatsAppUrl({ travelStyle: cat.title, destination: cat.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-gold-500 text-white hover:text-navy-950 flex items-center justify-center transition-colors"
                    title={`Plan ${cat.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact#planner"
            className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Create Your Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
