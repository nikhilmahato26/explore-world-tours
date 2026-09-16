import React, { useEffect } from 'react';
import { InternationalToursSection } from '../components/InternationalToursSection';
import { CustomTripPlanner } from '../components/CustomTripPlanner';
import { Globe, Plane, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { getInternationalTourWhatsAppUrl } from '../utils/whatsapp';

export const InternationalToursPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const internationalHighlights = [
    {
      country: 'Dubai & Emirates',
      highlights: 'Burj Khalifa, Desert Safari, Palm Jumeirah & Marina Dhow Cruise',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    },
    {
      country: 'Bali, Indonesia',
      highlights: 'Ubud Rice Terraces, Nusa Penida, Tanah Lot & Seminyak Sunsets',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    },
    {
      country: 'Switzerland & Alps',
      highlights: 'Interlaken, Jungfraujoch, Lucerne Lake & Scenic Glacier Express',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
    },
    {
      country: 'Maldives Overwater',
      highlights: 'Private Water Villas, Snorkeling Coral Atolls & Speedboat Transfers',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    },
    {
      country: 'Thailand Island Escapes',
      highlights: 'Phuket Beaches, Phi Phi Islands, Bangkok Street Food & Temples',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    },
    {
      country: 'Singapore Cityscape',
      highlights: 'Marina Bay Sands, Gardens by the Bay & Sentosa Island',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
          <Globe className="w-3.5 h-3.5" />
          <span>Worldwide Escapes</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
          Explore The World
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Plan memorable international holidays across Asia, the Middle East, Europe, and tropical island havens with full documentation support.
        </p>
      </div>

      {/* Main Regional Section */}
      <InternationalToursSection />

      {/* Popular International Highlights */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Featured Global Holiday Ideas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Contact our international desk for customized itineraries and live airline rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <h3 className="font-serif text-lg font-bold">{item.country}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {item.highlights}
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Custom Itinerary</span>
                    <a
                      href={getInternationalTourWhatsAppUrl(item.country)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Planner */}
      <div className="mt-16">
        <CustomTripPlanner />
      </div>
    </div>
  );
};
