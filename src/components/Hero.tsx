import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Sparkles, CheckCircle2, Star, Shield, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onScrollToDemo }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#38BDF8]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#BAE6FD]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Headline */}
            <h1 className="font-syne text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.14] tracking-tight text-white">
              Jogos que treinam a mente do seu filho{' '}
              <span className="block mt-2 gradient-text">
                em 10 minutos por dia.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sky-100/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {LANDING_COPY.hero.subheadline}
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-100">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Para 2 a 10 anos</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-100">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Celular, Tablet ou PC</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-100 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Packs para Imprimir</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto btn-shimmer bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] hover:opacity-95 text-[#0B192C] font-syne font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{LANDING_COPY.hero.ctaText}</span>
                  <ArrowRight className="w-5 h-5 text-[#0B192C] stroke-[3]" />
                </button>

                <button
                  onClick={onScrollToDemo}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-5 py-4 rounded-2xl border border-sky-300/20 transition-all"
                >
                  <Play className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8]" />
                  <span>Testar Demonstração</span>
                </button>
              </div>

              {/* CTA Subtext */}
              <p className="text-xs text-sky-200/90 font-medium flex items-center justify-center lg:justify-start gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{LANDING_COPY.hero.ctaSubtext}</span>
              </p>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-4 border-t border-sky-400/20 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-[#0B192C] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Mãe" />
                <img className="w-8 h-8 rounded-full border-2 border-[#0B192C] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Pai" />
                <img className="w-8 h-8 rounded-full border-2 border-[#0B192C] object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Mãe" />
                <div className="w-8 h-8 rounded-full border-2 border-[#0B192C] bg-gradient-to-br from-[#38BDF8] to-[#0284C7] text-[10px] font-bold text-[#0B192C] flex items-center justify-center">
                  +12k
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8]" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-sky-200/70">{LANDING_COPY.hero.socialProofBadge}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#38BDF8]/20 via-[#0284C7]/30 to-[#BAE6FD]/20 rounded-3xl blur-2xl -z-10" />

            {/* Product Image Container without frame */}
            <div className="relative overflow-hidden py-2">
              <div className="animate-scroll-slow flex items-center gap-4">
                <img 
                  src="https://i.postimg.cc/gkD7XyTV/image.png" 
                  alt="Plataforma Cogno Kids 1" 
                  className="w-[320px] sm:w-[440px] md:w-[500px] h-auto rounded-2xl object-contain shadow-2xl shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://i.postimg.cc/VLVjVdrs/image.png" 
                  alt="Plataforma Cogno Kids 2" 
                  className="w-[320px] sm:w-[440px] md:w-[500px] h-auto rounded-2xl object-contain shadow-2xl shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://i.postimg.cc/GtbZVXfh/image.png" 
                  alt="Plataforma Cogno Kids 3" 
                  className="w-[320px] sm:w-[440px] md:w-[500px] h-auto rounded-2xl object-contain shadow-2xl shrink-0"
                  referrerPolicy="no-referrer"
                />
                {/* Duplicated images for continuous uninterrupted infinite scrolling loop */}
                <img 
                  src="https://i.postimg.cc/gkD7XyTV/image.png" 
                  alt="Plataforma Cogno Kids 1" 
                  className="w-[320px] sm:w-[440px] md:w-[500px] h-auto rounded-2xl object-contain shadow-2xl shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://i.postimg.cc/VLVjVdrs/image.png" 
                  alt="Plataforma Cogno Kids 2" 
                  className="w-[320px] sm:w-[440px] md:w-[500px] h-auto rounded-2xl object-contain shadow-2xl shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://i.postimg.cc/GtbZVXfh/image.png" 
                  alt="Plataforma Cogno Kids 3" 
                  className="w-[320px] sm:w-[440px] md:w-[500px] h-auto rounded-2xl object-contain shadow-2xl shrink-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-2 right-2 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] p-3 rounded-2xl shadow-xl border border-white/20 text-white flex items-center gap-2 animate-bounce z-10 pointer-events-none">
                <Sparkles className="w-5 h-5 text-[#BAE6FD]" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase text-sky-100 font-bold">Acesso Vitalício</span>
                  <span className="text-xs font-extrabold font-syne">Sem Mensalidades</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
