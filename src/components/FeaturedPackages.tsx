import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Filter } from 'lucide-react';
import { tours } from '../data/tours';
import { TourCard } from './TourCard';

export const FeaturedPackages: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Beach & Island', 'Mountain & Hills', 'Heritage & Culture', 'Pilgrimage & Spiritual'];

  const filteredTours = activeFilter === 'All'
    ? tours
    : tours.filter((t) => t.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(t.category.toLowerCase()));

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Handcrafted Itineraries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Featured Travel Packages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Curated holiday journeys with verified hotels, daily breakfast, and private cab transfers across India.
            </p>
          </div>

          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-navy-900 hover:text-gold-600 font-bold text-sm group self-start md:self-auto"
          >
            <span>View All 8 Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-[#E53E3E] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-ocean-50 via-slate-50 to-amber-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-navy-950 font-serif">
              Looking for a customized date or group itinerary?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our travel specialists in Noida Sector 62 will tailor this package to your specific group size & preference.
            </p>
          </div>
          <Link
            to="/contact#planner"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full uppercase tracking-wider transition-all duration-200 shadow-sm flex-shrink-0"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
