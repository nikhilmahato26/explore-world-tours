import React, { useEffect } from 'react';
import { IndiaToursSection } from '../components/IndiaToursSection';
import { tours } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { CustomTripPlanner } from '../components/CustomTripPlanner';
import { Compass, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const IndiaToursPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FAFBFD] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
          <Compass className="w-3.5 h-3.5 text-gold-600" />
          <span>Incredible India Tours</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
          Explore Incredible India
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          From the snowy Himalayan peaks of Himachal and Kashmir to the serene lagoons of Kerala and royal forts of Rajasthan.
        </p>
      </div>

      {/* Regional Explorer */}
      <IndiaToursSection />

      {/* Packages in India */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              India Holiday Itineraries
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select any package below to view complete day-by-day itineraries and transparent price breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tours.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip Planner Form */}
      <div className="mt-16">
        <CustomTripPlanner />
      </div>
    </div>
  );
};
