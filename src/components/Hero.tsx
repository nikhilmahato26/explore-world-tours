import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-20">
      {/* Background Cinematic Image with Layered Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=2000&q=85"
          alt="Scenic Mediterranean Santorini and World Travel Vistas"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
        />
        {/* Editorial overlay: subtle dark navy gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-950/45" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-navy-950/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 sm:mt-12">
        {/* Top Tagline / Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span className="uppercase tracking-widest text-gold-300 font-semibold text-[11px] sm:text-xs">
            Your Next Adventure Awaits
          </span>
          <span className="text-white/40">•</span>
          <span className="text-white/80 hidden sm:inline">India & International Holidays</span>
        </div>

        {/* Cinematic Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 text-balance">
          Explore The World <br />
          <span className="italic font-normal text-gold-300">Beyond Your</span> Imagination
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance">
          Discover unforgettable journeys across India and around the world with <strong className="font-medium text-white">Explore World Tours</strong>. Handcrafted itineraries, certified support, and transparent quotes.
        </p>

        {/* Sub-headline Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-white/80 mb-10">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            All India Tours
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            International Holidays
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Customized Itineraries
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Noida Sector 62
          </span>
        </div>

        {/* Action Buttons: Dual / Triple CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
          <Link
            to="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-gold-500/25 transition-all duration-300 hover:scale-102"
          >
            <span>Explore Tours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact#planner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:border-white"
          >
            <Compass className="w-4 h-4 text-gold-300" />
            <span>Plan Your Trip</span>
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900/80 hover:bg-navy-900 text-slate-100 border border-slate-700/60 font-medium px-5 py-3.5 rounded-full text-sm transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call 9525528655</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300/80">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Transparent Pricing & Zero Hidden Charges</span>
          </div>
          <div className="hidden sm:inline text-slate-500">•</div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>24/7 Dedicated On-Trip Support</span>
          </div>
          <div className="hidden sm:inline text-slate-500">•</div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-white">Noida Sector 62</span>
            <span>Local Desk</span>
          </div>
        </div>
      </div>
    </div>
  );
};
