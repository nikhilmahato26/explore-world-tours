import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ArrowUpRight, Compass, Globe } from 'lucide-react';
import { destinationsData, DestinationItem } from '../data/destinations';
import { getIndiaTourWhatsAppUrl, getInternationalTourWhatsAppUrl } from '../utils/whatsapp';

export const DestinationGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'India' | 'International'>('All');

  const filtered = activeTab === 'All'
    ? destinationsData
    : destinationsData.filter((d) => d.region === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Wanderly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Popular Destinations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Explore Our Most Loved Destinations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              From the tranquil waters of Kerala to the futuristic skyline of Dubai, find your dream getaway.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full self-start md:self-auto border border-slate-200/60">
            {(['All', 'India', 'International'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white text-navy-950 shadow-sm'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                {tab === 'All' ? 'All Destinations' : `${tab} Tours`}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((dest) => {
            const waLink = dest.region === 'India'
              ? getIndiaTourWhatsAppUrl(dest.name)
              : getInternationalTourWhatsAppUrl(dest.name);

            return (
              <div
                key={dest.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col hover:-translate-y-1.5"
              >
                {/* Image Container with zoom & gradient */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/15 to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    <span>{dest.rating}</span>
                  </div>

                  {/* Tag Pill */}
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-navy-950 text-[11px] font-bold uppercase tracking-wider">
                    {dest.tag}
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-medium tracking-wide uppercase text-gold-300">
                      {dest.country}
                    </span>
                    <h3 className="text-xl font-serif font-bold group-hover:translate-x-0.5 transition-transform">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                        Estimated Budget
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-navy-950 font-serif">
                        {dest.priceRange}
                      </span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-navy-900 text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                      title={`Enquire for ${dest.name}`}
                      aria-label={`Enquire for ${dest.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Link */}
        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy-900 hover:bg-gold-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>View All Destinations & Regions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
