import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'India Tours', path: '/india-tours' },
    { name: 'International', path: '/international-tours' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full shadow-lg border border-slate-100 px-4 sm:px-6 py-2.5 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-gold-500/80 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white">
              <img
                src="/logo.jpg"
                alt="Explore World Tours Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight font-serif uppercase text-[#0D233A]">
                Explore World Tours
              </span>
              <span className="text-[10px] tracking-wider font-semibold text-gold-600 hidden sm:block">
                Noida Sector 62
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0D233A] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#0D233A] hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#0D233A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D233A]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <Link
              to="/contact#planner"
              className="bg-[#F59E0B] hover:bg-amber-400 text-[#0D233A] font-bold px-5 py-2 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all duration-200 hover:scale-102"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 rounded-full bg-slate-100 text-[#0D233A]"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-100 text-[#0D233A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl px-5 py-5 mt-2 animate-in fade-in slide-in-from-top-3">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0D233A] text-white'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                to="/contact#planner"
                className="w-full text-center bg-[#F59E0B] text-[#0D233A] font-bold py-2.5 rounded-full text-xs uppercase tracking-wider shadow-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
