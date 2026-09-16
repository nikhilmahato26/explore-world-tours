import React from 'react';
import { Hero } from '../components/Hero';
import { BookingSearch } from '../components/BookingSearch';
import { DestinationGrid } from '../components/DestinationGrid';
import { FeaturedPackages } from '../components/FeaturedPackages';
import { AboutSection } from '../components/AboutSection';
import { IndiaToursSection } from '../components/IndiaToursSection';
import { InternationalToursSection } from '../components/InternationalToursSection';
import { TourCategories } from '../components/TourCategories';
import { TravelServices } from '../components/TravelServices';
import { CustomTripPlanner } from '../components/CustomTripPlanner';
import { PopularExperiences } from '../components/PopularExperiences';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FeaturedCTA } from '../components/FeaturedCTA';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Cinematic Travel Hero */}
      <Hero />

      {/* 2. Floating Pill Booking Search Bar */}
      <BookingSearch />

      {/* 3. Featured Packages with all 8 base tours */}
      <FeaturedPackages />

      {/* 4. Wanderly Editorial Destination Explorer */}
      <DestinationGrid />

      {/* 5. About Explore World Tours (Noida Sector 62) */}
      <AboutSection />

      {/* 6. Dedicated India Tours Regional Showcase */}
      <IndiaToursSection />

      {/* 7. Dedicated International Tours Section */}
      <InternationalToursSection />

      {/* 8. Tour Categories (Find Your Perfect Trip) */}
      <TourCategories />

      {/* 9. Travel Services (Complete Travel Assistance) */}
      <TravelServices />

      {/* 10. Custom Trip Planner Form */}
      <CustomTripPlanner />

      {/* 11. Popular Experiences Slider/Grid */}
      <PopularExperiences />

      {/* 12. Why Choose Us (Your Trusted Travel Partner) */}
      <WhyChooseUs />

      {/* 13. Testimonials (Real Stories. Real Adventures.) */}
      <Testimonials />

      {/* 14. Scenic CTA Banner */}
      <FeaturedCTA />

      {/* 15. FAQ Accordion */}
      <FAQSection />

      {/* 16. Contact Details & Location */}
      <ContactSection />
    </main>
  );
};
