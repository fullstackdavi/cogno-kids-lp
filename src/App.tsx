import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuizSection } from './components/QuizSection';
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
import { ScrollProgress } from './components/ScrollProgress';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { ScrollReveal } from './components/ScrollReveal';

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
    <div className="min-h-screen bg-[#0B192C] text-white selection:bg-[#38BDF8] selection:text-[#0B192C] antialiased relative overflow-hidden">
      {/* Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Ambient Aurora Glow Lights (Background Atmosphere) */}
      <div className="fixed top-20 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-2/3 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Header Bar */}
      <Header
        onOpenExportHtml={() => setIsExportOpen(true)}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Main High-Conversion Landing Flow */}
      <main>
        {/* Section 1: Hero & Headline v2 */}
        <ScrollReveal direction="none">
          <Hero
            onOpenCheckout={handleOpenCheckout}
            onScrollToDemo={handleScrollToDemo}
          />
        </ScrollReveal>

        {/* Personalization Quiz (Diagnóstico Cognitivo) */}
        <ScrollReveal direction="up" delay={0.1}>
          <QuizSection
            onOpenCheckout={handleOpenCheckout}
            onScrollToDemo={handleScrollToDemo}
          />
        </ScrollReveal>

        {/* Problem & Agitation Section (PAS) */}
        <ScrollReveal direction="up" delay={0.1}>
          <ProblemPAS />
        </ScrollReveal>

        {/* Solution Introduction */}
        <ScrollReveal direction="up" delay={0.1}>
          <Solution />
        </ScrollReveal>

        {/* Reciprocity: Interactive App Demo / Sandbox */}
        <ScrollReveal direction="up" delay={0.1}>
          <InteractivePreview onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Tangible Benefits (AIDA - Desire) */}
        <ScrollReveal direction="up" delay={0.1}>
          <Benefits />
        </ScrollReveal>

        {/* How It Works (3 Steps) */}
        <ScrollReveal direction="up" delay={0.1}>
          <HowItWorks onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Social Proof (12,800+ Families) */}
        <ScrollReveal direction="up" delay={0.1}>
          <SocialProof />
        </ScrollReveal>

        {/* Offer & Pricing (AIDA - Action, Price Anchoring, Bonuses) */}
        <ScrollReveal direction="up" delay={0.1}>
          <OfferPricing onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* 7-Day Unconditional Guarantee */}
        <ScrollReveal direction="up" delay={0.1}>
          <Guarantee />
        </ScrollReveal>

        {/* FAQ & Objections */}
        <ScrollReveal direction="up" delay={0.1}>
          <FAQ />
        </ScrollReveal>

        {/* Final Urgency Call to Action */}
        <ScrollReveal direction="up" delay={0.1}>
          <FinalCTA onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>
      </main>

      {/* Footer & DS Company Branding */}
      <Footer />

      {/* Real-Time Family Acquisition Toast */}
      <LiveNotificationToast />

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



