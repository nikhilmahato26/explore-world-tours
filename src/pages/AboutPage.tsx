import React, { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FeaturedCTA } from '../components/FeaturedCTA';
import { Compass, ShieldCheck, HeartHandshake, MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FAFBFD] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Brand Story</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
          About Explore World Tours
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Based in Noida Sector 62, Uttar Pradesh, helping travelers experience the beauty of India and top international destinations.
        </p>
      </div>

      {/* Main About Component */}
      <AboutSection />

      {/* Core Principles */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding every itinerary we craft and every traveler we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-navy-900 mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">
                Thoughtful Curation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We balance must-see landmarks with restful downtime, scenic road transfers, and authentic local cuisine.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-gold-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">
                Clear Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No surprises or hidden fees. Every inclusion, hotel category, and vehicle arrangement is explained upfront.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-emerald-600 mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">
                Dedicated Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From your initial enquiry to the moment you return home, our team remains on call for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Scenic CTA */}
      <FeaturedCTA />
    </div>
  );
};
