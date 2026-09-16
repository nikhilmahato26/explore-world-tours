import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Traveler Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Real Stories. Real Adventures.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Hear from happy travelers who turned their dreams into unforgettable journeys with Explore World Tours.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-gold-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info with Avatar */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gold-400/50"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-navy-950 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    {item.trip} · {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <p className="text-center text-[11px] text-slate-400 mt-10">
          * Representative demo traveler reviews for website presentation. Verified client feedback is continually updated on our service desk.
        </p>
      </div>
    </section>
  );
};
