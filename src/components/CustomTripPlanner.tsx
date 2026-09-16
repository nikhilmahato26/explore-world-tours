import React, { useState } from 'react';
import { Send, Sparkles, Compass, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { getCustomTripWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/business';

export const CustomTripPlanner: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelType: 'Domestic (India)',
    travelDate: '',
    travelers: '2 Travelers',
    budget: 'Flexible Budget',
    travelStyle: 'Family Holiday',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = getCustomTripWhatsAppUrl({
      name: formData.name,
      destination: formData.destination || 'Custom Destination',
      travelType: formData.travelType,
      travelDate: formData.travelDate,
      travelers: formData.travelers,
      travelStyle: formData.travelStyle,
      budget: formData.budget,
      message: `${formData.phone ? `Phone: ${formData.phone}` : ''} | ${formData.email ? `Email: ${formData.email}` : ''} | ${formData.message}`,
    });

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planner" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Trust */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-gold-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Tour Planner</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                Tell Us Your <br />
                <span className="italic font-normal text-gold-300">Dream Destination</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Share your travel requirements and our Noida Sector 62 travel specialists will handcraft a personalized itinerary, hotel recommendations and quote.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>100% Tailored around your preferred schedule</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Transparent itemized hotel, flight & cab pricing</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Instant communication via WhatsApp & Phone</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Travel Desk: 9525528655</span>
                </a>
              </div>
            </div>

            {/* Right Column: Planner Form */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy-950">
                      Enquiry Prepared!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your custom trip requirements have been formatted for our WhatsApp travel team. If WhatsApp did not open automatically, click the button below.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-navy-900 underline mt-2 block mx-auto"
                    >
                      Fill Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 2: Destination & Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Destination *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="e.g. Andaman, Kashmir, Dubai"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Trip Category
                        </label>
                        <select
                          value={formData.travelType}
                          onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        >
                          <option value="Domestic (India)">Domestic (India)</option>
                          <option value="International Tour">International Tour</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Travel Date & Travelers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Expected Travel Date
                        </label>
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none text-slate-700"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Number of Travelers
                        </label>
                        <select
                          value={formData.travelers}
                          onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        >
                          <option value="1 Solo Traveler">1 Solo Traveler</option>
                          <option value="2 Pax (Couple / Twin)">2 Pax (Couple / Twin)</option>
                          <option value="3-4 Pax (Family)">3-4 Pax (Family)</option>
                          <option value="5-8 Pax (Small Group)">5-8 Pax (Small Group)</option>
                          <option value="9+ Pax (Group / Corporate)">9+ Pax (Large Group)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Travel Style & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Preferred Travel Style
                        </label>
                        <select
                          value={formData.travelStyle}
                          onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        >
                          <option value="Family Holiday">Family Holiday</option>
                          <option value="Honeymoon Getaway">Honeymoon Getaway</option>
                          <option value="Adventure & Trek">Adventure & Trek</option>
                          <option value="Luxury Staycation">Luxury Staycation</option>
                          <option value="Group Tour">Group Tour</option>
                          <option value="Corporate / MICE">Corporate / MICE</option>
                          <option value="Religious / Pilgrimage">Religious / Pilgrimage</option>
                          <option value="Leisure & Relaxation">Leisure & Relaxation</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                          Approximate Budget (per person)
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                        >
                          <option value="Under ₹10,000">Under ₹10,000</option>
                          <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                          <option value="Above ₹1,00,000">Above ₹1,00,000 (Luxury)</option>
                          <option value="Flexible / Best Value">Flexible / Best Value</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                        Specific Requests or Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Need sea-facing room, private cab throughout, vegetarian meal options..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-navy-900 focus:outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Plan My Trip (Send via WhatsApp)</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
