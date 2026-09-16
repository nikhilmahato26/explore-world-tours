import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle2, Shield, HeartHandshake, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: 'India & International Tours',
      desc: 'Seamless travel arrangements from the Himalayas to global beach retreats.',
    },
    {
      title: 'Personalized Itineraries',
      desc: 'Flexible pacing designed according to your schedule, budget and travel style.',
    },
    {
      title: 'End-to-End Assistance',
      desc: 'Hotels, flight booking, sanitized private cabs, and visa document support.',
    },
    {
      title: 'Direct Local Presence',
      desc: `Headquartered in ${BUSINESS_INFO.location} with direct phone & WhatsApp communication.`,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Editorial Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
                alt="Travelers exploring breathtaking scenic mountain view"
                className="w-full h-[450px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              
              {/* Floating Highlight Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 font-serif">
                      Explore World Tours
                    </h4>
                    <p className="text-xs text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-600" />
                      Noida Sector 62, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Ambient Shapes */}
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-ocean-100 rounded-full blur-3xl -z-10 opacity-70" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gold-400/20 rounded-full blur-3xl -z-10 opacity-60" />
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>About Our Agency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-navy-950 tracking-tight leading-[1.2] mb-6">
              Your Journey <br />
              <span className="italic font-normal text-gold-600">Starts Here</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              <strong className="text-navy-950 font-semibold">Explore World Tours</strong> is a travel company based in Noida Sector 62, offering travel opportunities across India and international destinations.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are looking to trek the scenic Himalayan valleys, cruise the tropical backwaters of Kerala, experience the royal heritage of Rajasthan, or fly abroad to Dubai, Bali, and Europe — we help you turn your travel dreams into stress-free reality.
            </p>

            {/* Key Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact#planner"
                className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-gold-600 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="text-xs sm:text-sm font-semibold text-navy-900 hover:text-gold-600 underline underline-offset-4 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
