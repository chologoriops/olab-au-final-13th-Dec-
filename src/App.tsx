import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services'));
const BrandTech = lazy(() => import('./components/BrandTech'));
const MarketingROI = lazy(() => import('./components/MarketingROI'));
const BusinessValue = lazy(() => import('./components/BusinessValue'));
const Consulting = lazy(() => import('./components/Consulting'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Team = lazy(() => import('./components/Team'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <div className="relative">
        <Navbar />
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
            <Consulting />
            <About />
            <BrandTech />
            <MarketingROI />
            <BusinessValue />
            <Testimonials />
            <Team />
            <FAQ />
            <Contact />
          </Suspense>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;

//Just for check