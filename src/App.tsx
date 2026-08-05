import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemPAS } from './components/ProblemPAS';
import { Solution } from './components/Solution';
import { InteractivePreview } from './components/InteractivePreview';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { OfferPricing } from './components/OfferPricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { CheckoutModal } from './components/CheckoutModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';

export const CHECKOUT_URL = 'https://pay.kirvano.com/b604abf7-4440-4e01-8fcd-b428a3893cd7';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const handleOpenCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const handleScrollToDemo = () => {
    const demoElement = document.getElementById('demo-interativa');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B192C] text-white selection:bg-[#38BDF8] selection:text-[#0B192C] antialiased">
      {/* Header Bar */}
      <Header
        onOpenExportHtml={() => setIsExportOpen(true)}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Main High-Conversion Landing Flow */}
      <main>
        {/* Hero Section (AIDA - Attention) */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onScrollToDemo={handleScrollToDemo}
        />

        {/* Problem & Agitation Section (PAS) */}
        <ProblemPAS />

        {/* Solution Introduction */}
        <Solution />

        {/* Reciprocity: Interactive App Demo / Sandbox */}
        <InteractivePreview onOpenCheckout={handleOpenCheckout} />

        {/* Tangible Benefits (AIDA - Desire) */}
        <Benefits />

        {/* How It Works (3 Steps) */}
        <HowItWorks onOpenCheckout={handleOpenCheckout} />

        {/* Social Proof (12,800+ Families) */}
        <SocialProof />

        {/* Offer & Pricing (AIDA - Action, Price Anchoring, Bonuses) */}
        <OfferPricing onOpenCheckout={handleOpenCheckout} />

        {/* 7-Day Unconditional Guarantee */}
        <Guarantee />

        {/* FAQ & Objections */}
        <FAQ />

        {/* Final Urgency Call to Action */}
        <FinalCTA onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer & DS Company Branding */}
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <StickyMobileCTA onOpenCheckout={handleOpenCheckout} />

      {/* Checkout Simulated Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Standalone HTML Export Modal */}
      <ExportHtmlModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}

