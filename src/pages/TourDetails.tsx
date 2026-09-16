import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTourBySlug, tours } from '../data/tours';
import { 
  MapPin, 
  Users, 
  Share2, 
  ChevronUp, 
  ChevronDown, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Mail, 
  Check, 
  Info,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { createWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const TourDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = slug ? getTourBySlug(slug) : undefined;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusion' | 'exclusion'>('itinerary');
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 1: true });
  const [copiedLink, setCopiedLink] = useState(false);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: '',
  });

  // Contact Message Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: tour ? tour.title : '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenDays({ 1: true });
    setActiveTab('itinerary');
  }, [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-white">
        <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
          <Info className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#0D233A] mb-2">Package Not Found</h1>
        <p className="text-slate-600 max-w-md mb-6 text-sm">
          We could not find the specific tour package you requested. Browse all available packages or contact our travel desk.
        </p>
        <Link
          to="/packages"
          className="bg-[#E53E3E] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
        >
          View All Packages
        </Link>
      </div>
    );
  }

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tour.title,
        text: `Check out ${tour.title} with Explore World Tours`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `🌴 *Tour Booking Request: ${tour.title}*`,
      `📍 *Destination:* ${tour.location}`,
      `💰 *Price:* ₹${tour.price.toLocaleString('en-IN')} / Per Person`,
      bookingForm.name ? `👤 *Name:* ${bookingForm.name}` : '',
      bookingForm.phone ? `📞 *Phone:* ${bookingForm.phone}` : '',
      bookingForm.email ? `✉️ *Email:* ${bookingForm.email}` : '',
      bookingForm.date ? `📅 *Travel Date:* ${bookingForm.date}` : '',
      bookingForm.notes ? `📝 *Notes:* ${bookingForm.notes}` : '',
      '',
      'Hello Explore World Tours, I would like to book this tour package. Please share available dates and confirmation details.',
    ].filter(Boolean).join('\n');

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `✨ *General Enquiry - Explore World Tours*`,
      contactForm.name ? `👤 *Name:* ${contactForm.name}` : '',
      contactForm.phone ? `📞 *Phone:* ${contactForm.phone}` : '',
      contactForm.email ? `✉️ *Email:* ${contactForm.email}` : '',
      contactForm.destination ? `📍 *Destination:* ${contactForm.destination}` : '',
      contactForm.message ? `💬 *Message:* ${contactForm.message}` : '',
      '',
      'Please get in touch with me with itinerary options & quotation!',
    ].filter(Boolean).join('\n');

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Panoramic Hero Banner */}
      <div className="relative h-[340px] sm:h-[400px] md:h-[440px] w-full overflow-hidden flex items-center justify-center text-center">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-90" />

        {/* Center Title & Breadcrumb */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto mt-16 sm:mt-20">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Tour Details
          </h1>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium px-5 py-1.5 rounded-full border border-white/20 shadow-md">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span className="text-white/50">›</span>
              <span className="text-amber-300">Tour Details</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* 2. Package Title & Share Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D233A] tracking-tight leading-tight">
            {tour.title}
          </h2>

          <button
            onClick={handleShare}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-300 text-red-500 hover:bg-red-50 text-xs sm:text-sm font-semibold transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* 3. Info Bar: Location, Traveler, Price Pill */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-slate-200/80 mb-12">
          
          <div className="flex flex-wrap items-center gap-8 sm:gap-12">
            {/* Location */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50/70 flex items-center justify-center text-red-500 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Location
                </span>
                <span className="font-bold text-sm sm:text-base text-[#0D233A]">
                  {tour.location}
                </span>
              </div>
            </div>

            {/* Traveler */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50/70 flex items-center justify-center text-red-500 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Traveler
                </span>
                <span className="font-bold text-sm sm:text-base text-[#0D233A]">
                  {tour.travelers}
                </span>
              </div>
            </div>
          </div>

          {/* Price Pill Button */}
          <div>
            <div className="bg-[#E53E3E] text-white font-bold px-7 sm:px-8 py-3 rounded-full text-sm sm:text-base shadow-lg shadow-red-500/25 tracking-wide">
              ₹ {tour.price.toLocaleString('en-IN')} / Per Person
            </div>
          </div>
        </div>

        {/* 4. Inclusion & Exclusion Section (Side by Side matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 py-8 border-b border-slate-200/80 mb-12">
          
          {/* Inclusion Column */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D233A] mb-6">
              Inclusion
            </h3>
            <ul className="space-y-3.5">
              {tour.inclusion.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusion Column */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D233A] mb-6">
              Exclusion
            </h3>
            <ul className="space-y-3.5">
              {tour.exclusion.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. Lower Section: Tabs, Itinerary Accordion & Tour Booking Card (Image 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Tabs & Day Accordion */}
          <div className="lg:col-span-7">
            
            {/* Tab Navigation */}
            <div className="flex items-center gap-8 border-b border-slate-200 pb-3 mb-6 text-sm sm:text-base font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('itinerary')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'itinerary'
                    ? 'text-red-600 font-bold border-b-2 border-red-600 -mb-[13px]'
                    : 'text-slate-500 hover:text-[#0D233A]'
                }`}
              >
                Itinerary
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('inclusion')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'inclusion'
                    ? 'text-red-600 font-bold border-b-2 border-red-600 -mb-[13px]'
                    : 'text-slate-500 hover:text-[#0D233A]'
                }`}
              >
                Inclusion
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('exclusion')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'exclusion'
                    ? 'text-red-600 font-bold border-b-2 border-red-600 -mb-[13px]'
                    : 'text-slate-500 hover:text-[#0D233A]'
                }`}
              >
                Exclusion
              </button>
            </div>

            {/* Tab: Itinerary View */}
            {activeTab === 'itinerary' && (
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D233A] mb-6">
                  Itinerary
                </h3>

                <div className="space-y-3.5">
                  {tour.itinerary.map((day) => {
                    const isOpen = !!openDays[day.day];

                    return (
                      <div key={day.day} className="overflow-hidden transition-all duration-200">
                        {isOpen ? (
                          /* Active / Expanded Day matching screenshot */
                          <div>
                            <button
                              type="button"
                              onClick={() => toggleDay(day.day)}
                              className="w-full bg-[#E53E3E] text-white font-bold px-6 py-4 rounded-t-2xl flex items-center justify-between shadow-sm cursor-pointer"
                            >
                              <span className="text-sm sm:text-base font-bold">
                                Day {day.day} : {day.title}
                              </span>
                              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                                <ChevronUp className="w-4 h-4" />
                              </div>
                            </button>
                            <div className="bg-[#F8F9FA] px-6 py-5 rounded-b-2xl border-x border-b border-slate-200/70 text-slate-700 text-sm leading-relaxed">
                              {day.details}
                            </div>
                          </div>
                        ) : (
                          /* Inactive / Collapsed Day matching screenshot */
                          <button
                            type="button"
                            onClick={() => toggleDay(day.day)}
                            className="w-full bg-[#F8F9FA] hover:bg-slate-100 text-[#0D233A] font-bold px-6 py-4 rounded-2xl flex items-center justify-between border border-slate-200/70 transition-colors cursor-pointer text-left"
                          >
                            <span className="text-sm sm:text-base font-bold">
                              Day {day.day} : {day.title}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-slate-500">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab: Inclusion View */}
            {activeTab === 'inclusion' && (
              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/70">
                <h3 className="font-serif text-xl font-bold text-[#0D233A] mb-4">Included in Package:</h3>
                <ul className="space-y-3">
                  {tour.inclusion.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab: Exclusion View */}
            {activeTab === 'exclusion' && (
              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/70">
                <h3 className="font-serif text-xl font-bold text-[#0D233A] mb-4">Not Included in Package:</h3>
                <ul className="space-y-3">
                  {tour.exclusion.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Tour Booking Card (Image 3) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl sticky top-28">
              <h3 className="font-serif text-2xl font-bold text-[#0D233A] mb-6">
                Tour Booking
              </h3>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl px-4 py-3.5 text-sm placeholder:text-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-slate-800"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl px-4 py-3.5 text-sm placeholder:text-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-slate-800"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl px-4 py-3.5 text-sm placeholder:text-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-slate-800"
                  />
                </div>

                {/* Date */}
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-slate-700"
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Additional information"
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl px-4 py-3.5 text-sm placeholder:text-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-slate-800 resize-none"
                  />
                </div>

                {/* Payment Section */}
                <div className="mt-6 pt-6 border-t border-slate-200/80 text-center">
                  <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">
                    Scan to Pay Booking Amount
                  </h4>
                  <div className="bg-[#F8F9FA] p-4 rounded-xl inline-block border border-slate-200/90 shadow-sm">
                    <img 
                      src="/payment-qr.jpg" 
                      alt="Payment QR Code" 
                      className="w-48 h-48 object-cover mx-auto mix-blend-multiply"
                    />
                    <div className="mt-3 text-lg font-bold text-[#E53E3E]">
                      ₹ {tour.price.toLocaleString('en-IN')} / Person
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 px-4">
                    Please share the payment screenshot on WhatsApp after booking.
                  </p>
                </div>

                {/* Book Now Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E53E3E] hover:bg-red-600 text-white font-bold py-4 rounded-2xl text-base shadow-lg shadow-red-500/30 transition-all cursor-pointer hover:shadow-red-500/40 mt-6"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 6. "Plan Your Dream Journey Today" Section (Image 4) */}
      <section className="bg-[#0B1727] text-white py-20 lg:py-24 mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Get In Touch text and contact details */}
            <div className="lg:col-span-5">
              <span className="text-amber-400 text-sm font-serif italic mb-2 block tracking-wide">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
                Plan Your Dream <br />
                Journey Today
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Ready to explore the world? Our travel experts are here to craft the perfect itinerary for you. Reach out and let's make memories together.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-6 mb-8">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                      LOCATION
                    </span>
                    <p className="text-sm font-medium text-white leading-snug mt-0.5">
                      {BUSINESS_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                      PHONE
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors block mt-0.5 break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-500 text-white font-bold px-7 py-3 rounded-full text-sm uppercase tracking-wider shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Right Column: "Send Us a Message" Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#132338] rounded-3xl p-6 sm:p-9 border border-white/10 shadow-2xl">
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Row: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1.5">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#1b2f4a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1.5">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-[#1b2f4a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1.5">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#1b2f4a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Dream Destination */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1.5">
                      DREAM DESTINATION
                    </label>
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      value={contactForm.destination}
                      onChange={(e) => setContactForm({ ...contactForm, destination: e.target.value })}
                      className="w-full bg-[#1b2f4a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your trip..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-[#1b2f4a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#F59E0B] hover:bg-amber-400 text-slate-900 font-bold py-4 rounded-xl text-sm uppercase tracking-wider transition-colors shadow-lg mt-2 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 ring-4 ring-emerald-500/20"
        title="Chat on WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
      </a>
    </div>
  );
};
