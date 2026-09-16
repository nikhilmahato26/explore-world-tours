import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Search, Compass } from 'lucide-react';

export const PackagesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'duration'>('featured');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const regions = ['All', 'Andaman', 'Himachal Pradesh', 'Kashmir', 'Kerala', 'Rajasthan', 'Uttarakhand', 'Bhubaneswar', 'Uttar Pradesh'];

  const filtered = tours.filter((t) => {
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.places.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = selectedRegion === 'All' || t.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'duration') return b.duration.localeCompare(a.duration);
    return a.id - b.id;
  });

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      
      {/* 1. Panoramic Header Banner matching reference style */}
      <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1800&q=80"
          alt="Explore World Tours Packages Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-90" />

        <div className="relative z-10 px-4 max-w-4xl mx-auto mt-16 sm:mt-20">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Tour Packages
          </h1>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium px-5 py-1.5 rounded-full border border-white/20 shadow-md">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span className="text-white/50">›</span>
              <span className="text-amber-300">Packages</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-card mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages by destination, state, or title..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 text-xs sm:text-sm text-[#0D233A] focus:outline-none focus:border-red-500 bg-slate-50/60"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-semibold whitespace-nowrap hidden sm:inline">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-[#0D233A] bg-slate-50/60 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Trip Duration</option>
              </select>
            </div>
          </div>

          {/* Region Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-slate-100 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#E53E3E] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {sorted.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#0D233A]">No Packages Match Your Criteria</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
              Try adjusting your search terms or clearing region filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="bg-[#E53E3E] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
