import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Plane, 
  Building2, 
  FileCheck2, 
  Car, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/services';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const TravelServices: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6 text-navy-900" />,
    Plane: <Plane className="w-6 h-6 text-ocean-600" />,
    Building2: <Building2 className="w-6 h-6 text-gold-600" />,
    FileCheck2: <FileCheck2 className="w-6 h-6 text-indigo-600" />,
    Car: <Car className="w-6 h-6 text-emerald-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>End-to-End Travel Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Complete Travel Assistance
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            From seamless flight reservations to customized sightseeing cabs, we orchestrate all elements of your travel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon */}
                <div className="w-13 h-13 rounded-2xl bg-slate-50 flex items-center justify-center p-3 mb-6 border border-slate-100/80 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                  {iconMap[svc.iconName] || <Compass className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                  {svc.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {svc.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {svc.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Assistance
                </span>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>Enquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Visa */}
        <div className="mt-10 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          * Note: Visa assistance provides documentation checking and appointment coordination. Final issuance decisions remain exclusively under the discretion of the respective embassy or immigration authority.
        </div>
      </div>
    </section>
  );
};
