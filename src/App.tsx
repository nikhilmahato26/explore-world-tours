import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

import { Home } from './pages/Home';
import { PackagesPage } from './pages/PackagesPage';
import { TourDetails } from './pages/TourDetails';
import { IndiaToursPage } from './pages/IndiaToursPage';
import { InternationalToursPage } from './pages/InternationalToursPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll restoration component
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/tours/:slug" element={<TourDetails />} />
            <Route path="/india-tours" element={<IndiaToursPage />} />
            <Route path="/international-tours" element={<InternationalToursPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
};

export default App;
