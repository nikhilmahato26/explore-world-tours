import React, { useState, useEffect } from 'react';
import { destinationsData, DestinationItem } from '../data/destinations';
import { Star, MapPin, Globe, ArrowUpRight, Search } from 'lucide-react';
import { getIndiaTourWhatsAppUrl, getInternationalTourWhatsAppUrl } from '../utils/whatsapp';

export const DestinationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', 'India', 'International', 'Beach', 'Mountain', 'Heritage', 'Luxury'];

  const filtered = destinationsData.filter((dest) => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(search.toLowerCase()) ||
      dest.country.toLowerCase().includes(search.toLowerCase()) ||
      dest.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = 
      activeCategory === 'All' ||
      dest.region === activeCategory ||
      dest.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FAFBFD] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
          <Globe className="w-3.5 h-3.5" />
          <span>Curated World Map</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
          Explore Destinations
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Discover handpicked destinations across India and worldwide. Click to inquire about packages, best travel seasons, and flight connections.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-card mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm text-navy-950 focus:outline-none focus:border-navy-900 bg-slate-50/50"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((dest) => {
            const waLink = dest.region === 'India'
              ? getIndiaTourWhatsAppUrl(dest.name)
              : getInternationalTourWhatsAppUrl(dest.name);

            return (
              <div
                key={dest.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    <span>{dest.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
                      {dest.country}
                    </span>
                    <h3 className="text-xl font-serif font-bold">{dest.name}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Estimated Range
                      </span>
                      <span className="text-xs font-bold font-serif text-navy-950">
                        {dest.priceRange}
                      </span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-navy-900 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors"
                      title={`Enquire about ${dest.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
