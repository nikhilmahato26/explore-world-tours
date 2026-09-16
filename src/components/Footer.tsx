import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Compass, ArrowRight, Heart, Send, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Footer: React.FC = () => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailSub('');
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'India Tours', path: '/india-tours' },
    { name: 'International Tours', path: '/international-tours' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Travel Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const travelCategories = [
    { name: 'Domestic India Tours', path: '/india-tours' },
    { name: 'International Tours', path: '/international-tours' },
    { name: 'Family Holiday Packages', path: '/packages' },
    { name: 'Honeymoon Escapes', path: '/packages' },
    { name: 'Himalayan Adventure Tours', path: '/packages' },
    { name: 'Sacred Pilgrimages & Yatras', path: '/packages' },
    { name: 'Custom Tailored Itineraries', path: '/contact#planner' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 sm:pt-20 pb-28 lg:pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-navy-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3.5 mb-6 group">
              <div className="w-13 h-13 rounded-full overflow-hidden ring-2 ring-gold-500/80 bg-white p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <img
                  src="/logo.jpg"
                  alt="Explore World Tours Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-serif text-white tracking-tight uppercase block">
                  Explore World Tours
                </span>
                <span className="text-xs text-gold-400 tracking-wider font-medium">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">{BUSINESS_INFO.subTagline}</strong><br />
              Offering verified holiday packages, flight assistance, hotel bookings and customized itineraries based in Noida Sector 62.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold font-serif uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold font-serif uppercase tracking-wider text-white mb-5">
              Travel Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              {travelCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription Column (matching Wanderly reference) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold font-serif uppercase tracking-wider text-white mb-3">
              Stay Inspired
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Get seasonal tour releases, exclusive deals, and curated destination guides straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={emailSub}
                onChange={(e) => setEmailSub(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-navy-900/80 border border-navy-800 rounded-full px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500 pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>

            {subscribed && (
              <p className="text-[11px] text-emerald-400 mt-2">
                Thank you for subscribing! We will keep you updated.
              </p>
            )}

            <div className="mt-6 pt-6 border-t border-navy-900 flex items-center gap-3 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Support from Noida Sector 62</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Explore World Tours. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Travelers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
