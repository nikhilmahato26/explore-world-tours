import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Users, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { TourPackage } from '../data/tours';
import { getPackageBookingWhatsAppUrl } from '../utils/whatsapp';

interface TourCardProps {
  tour: TourPackage;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const discountPercent = Math.round(
    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100
  );

  const waUrl = getPackageBookingWhatsAppUrl({
    title: tour.title,
    duration: tour.duration,
    price: tour.price,
    travelers: tour.travelers,
  });

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image Container with Badge Overlays */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {/* Duration Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white text-xs font-medium shadow-sm">
            <Clock className="w-3 h-3 text-gold-400" />
            <span>{tour.duration}</span>
          </span>

          {/* Savings Badge */}
          {discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wide shadow-sm uppercase">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Bottom Image Overlay: Location & Rating */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <MapPin className="w-3 h-3 text-gold-400" />
            <span className="truncate max-w-[140px]">{tour.location}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-gold-300">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span>{tour.rating}</span>
            <span className="text-white/70 text-[10px]">({tour.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tag & Category */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-2.5 py-0.5 rounded-full">
              {tour.region}
            </span>
            {tour.tag && (
              <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                {tour.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors line-clamp-2 leading-snug mb-2">
            <Link to={`/tours/${tour.slug}`}>{tour.title}</Link>
          </h3>

          {/* Places Covered */}
          <p className="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{tour.places}</span>
          </p>

          {/* Key Inclusions Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tour.inclusion.slice(0, 3).map((inc, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
              >
                <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span className="truncate max-w-[170px]">{inc}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing and Action Footer */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          {/* Price & Quick WhatsApp Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-slate-400 line-through">
                  ₹{tour.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-[#0D233A]">
                  ₹{tour.price.toLocaleString('en-IN')}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium block">
                per package ({tour.travelers})
              </span>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-xs"
              title="Book via WhatsApp"
              aria-label="Book via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Full-width View Details button - Never clipped, never hidden */}
          <Link
            to={`/tours/${tour.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#E53E3E] hover:bg-red-600 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
