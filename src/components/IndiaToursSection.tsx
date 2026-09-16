import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getIndiaTourWhatsAppUrl } from '../utils/whatsapp';

export const IndiaToursSection: React.FC = () => {
  const regions = [
    {
      name: 'North India',
      tagline: 'Snowy Himalayan Valleys, Royal Forts & Holy Shrines',
      states: ['Himachal Pradesh', 'Uttarakhand', 'Rajasthan', 'Delhi', 'Punjab', 'Jammu & Kashmir'],
      image: 'https://images.pexels.com/photos/13588958/pexels-photo-13588958.jpeg',
      gradient: 'from-amber-600/80 to-navy-950/90',
    },
    {
      name: 'South India',
      tagline: 'Tropical Backwaters, Coastal Beaches & Ancient Temples',
      states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Goa', 'Andhra Pradesh', 'Telangana'],
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
      gradient: 'from-emerald-700/80 to-navy-950/90',
    },
    {
      name: 'East & Northeast',
      tagline: 'Misty Tea Hills, Living Root Bridges & Sacred Sun Temples',
      states: ['West Bengal', 'Odisha', 'Sikkim', 'Meghalaya', 'Assam', 'Arunachal Pradesh'],
      image: 'https://images.pexels.com/photos/6040171/pexels-photo-6040171.jpeg',
      gradient: 'from-teal-700/80 to-navy-950/90',
    },
    {
      name: 'Central & West India',
      tagline: 'Vibrant White Rann, Heritage Caves & Wildlife Safaris',
      states: ['Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Chhattisgarh'],
      image: 'https://images.pexels.com/photos/36033417/pexels-photo-36033417.jpeg',
      gradient: 'from-orange-700/80 to-navy-950/90',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Domestic Journeys</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
            Explore Incredible India
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Discover diverse destinations across India — from mountains and beaches to heritage cities and cultural destinations.
          </p>
        </div>

        {/* 4 Regional Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <div
              key={region.name}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 min-h-[360px] flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Image Background */}
              <img
                src={region.image}
                alt={region.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${region.gradient} transition-opacity`} />

              {/* Content */}
              <div className="relative z-10 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-1 block">
                  Regional Circuit
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-white">
                  {region.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-5 leading-relaxed">
                  {region.tagline}
                </p>

                {/* State Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {region.states.map((state) => (
                    <span
                      key={state}
                      className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20"
                    >
                      {state}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-xs text-slate-300">Visual destination highlights</span>
                  <a
                    href={getIndiaTourWhatsAppUrl(region.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-navy-950 hover:bg-gold-400 font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm"
                  >
                    <span>Enquire {region.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action */}
        <div className="mt-12 text-center">
          <Link
            to="/india-tours"
            className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>View India Tours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
