import React, { useState } from 'react';
import { MapPin, Calendar, Users, Compass, Search, ArrowRight } from 'lucide-react';
import { getCustomTripWhatsAppUrl } from '../utils/whatsapp';

export const BookingSearch: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [travelType, setTravelType] = useState('India Tour');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers');

  const travelTypes = [
    'India Tour',
    'International Tour',
    'Family Trip',
    'Honeymoon',
    'Group Tour',
    'Corporate Travel',
    'Custom Trip',
  ];

  const popularDestinations = [
    'Andaman',
    'Himachal Pradesh',
    'Kashmir',
    'Kerala',
    'Rajasthan',
    'Uttarakhand',
    'Dubai',
    'Bali',
    'Switzerland',
    'Maldives',
    'Thailand',
    'Singapore',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalDestination = destination.trim() || 'Custom Tour';
    const waUrl = getCustomTripWhatsAppUrl({
      destination: finalDestination,
      travelType,
      travelDate: travelDate || 'Flexible / Upcoming',
      travelers,
      travelStyle: travelType,
      message: 'Hello, I searched this trip on Explore World Tours website and would like a quote.',
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-16">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-full p-3 sm:p-4 shadow-card hover:shadow-card-hover border border-slate-100/80 transition-all duration-300">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
          
          {/* Destination Field */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-slate-50/80 transition-colors border sm:border-0 border-slate-100">
            <div className="w-9 h-9 rounded-full bg-ocean-50 flex items-center justify-center flex-shrink-0 text-ocean-600">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="search-destination" className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Destination
              </label>
              <input
                id="search-destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to? (e.g. Andaman, Bali, Kerala)"
                list="popular-destinations"
                className="w-full bg-transparent border-0 p-0 text-sm font-semibold text-navy-950 placeholder:text-slate-400 focus:ring-0 focus:outline-none"
              />
              <datalist id="popular-destinations">
                {popularDestinations.map((d) => (
                  <option key={d} value={d} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-slate-200" />

          {/* Travel Type Field */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-slate-50/80 transition-colors border sm:border-0 border-slate-100">
            <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-gold-600">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="search-travel-type" className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Travel Type
              </label>
              <select
                id="search-travel-type"
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="w-full bg-transparent border-0 p-0 text-sm font-semibold text-navy-950 focus:ring-0 focus:outline-none cursor-pointer"
              >
                {travelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-slate-200" />

          {/* Travel Date */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-slate-50/80 transition-colors border sm:border-0 border-slate-100">
            <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 text-sky-600">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="search-travel-date" className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Travel Date
              </label>
              <input
                id="search-travel-date"
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-transparent border-0 p-0 text-sm font-semibold text-navy-950 focus:ring-0 focus:outline-none text-slate-600"
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-slate-200" />

          {/* Number of Travelers */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-slate-50/80 transition-colors border sm:border-0 border-slate-100">
            <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600">
              <Users className="w-4 h-4" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="search-travelers" className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Travelers
              </label>
              <select
                id="search-travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full bg-transparent border-0 p-0 text-sm font-semibold text-navy-950 focus:ring-0 focus:outline-none cursor-pointer"
              >
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Travelers (Couple/Twin)">2 Travelers</option>
                <option value="3-4 Travelers (Family)">3-4 Travelers (Family)</option>
                <option value="5-8 Travelers (Small Group)">5-8 Travelers (Group)</option>
                <option value="9+ Travelers (Large Group)">9+ Travelers</option>
              </select>
            </div>
          </div>

          {/* Submit Search / WhatsApp Quote Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-full text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0"
          >
            <Search className="w-4 h-4 text-gold-400" />
            <span>Get A Quote</span>
          </button>
        </form>
      </div>
    </div>
  );
};
