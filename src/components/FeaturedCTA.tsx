import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const FeaturedCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center p-8 sm:p-14 text-center shadow-2xl">
          
          {/* Background Scenic Image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80"
            alt="Tropical turquoise ocean and white sand beach"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/60 to-navy-950/40" />

          {/* Content matching Wanderly */}
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest text-gold-300 mb-3 block">
              Ready For Your Next Adventure?
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Let's Make Your Travel <br />
              <span className="italic font-normal text-gold-300">Dreams a Reality</span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light leading-relaxed">
              Explore the world with Explore World Tours and create memories that last a lifetime. Custom itineraries, certified support, and transparent quotes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/contact#planner"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-navy-950 hover:bg-gold-400 font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-102"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
