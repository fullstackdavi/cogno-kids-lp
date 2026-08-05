import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Mail, Sliders, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenCheckout: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenCheckout }) => {
  const { howItWorks } = LANDING_COPY;

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#0B192C] border-y border-sky-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-sky-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>{howItWorks.tag}</span>
          </div>

          <h2 className="font-syne text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            {howItWorks.title}
          </h2>

          <p className="text-sky-100/90 text-base sm:text-lg">
            Sem complicações tecnológicas. Você compra e já começa a usar em menos de 2 minutos.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0F2847] p-8 rounded-3xl border border-sky-400/20 hover:border-[#38BDF8]/40 shadow-xl relative space-y-4 group transition-all"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between">
                <span className="font-syne text-4xl font-extrabold text-[#38BDF8] opacity-90">
                  {step.num}
                </span>

                <div className="w-10 h-10 rounded-xl bg-white/5 border border-sky-300/20 flex items-center justify-center text-[#38BDF8]">
                  {idx === 0 && <Mail className="w-5 h-5 text-[#38BDF8]" />}
                  {idx === 1 && <Sliders className="w-5 h-5 text-[#38BDF8]" />}
                  {idx === 2 && <Sparkles className="w-5 h-5 text-[#38BDF8]" />}
                </div>
              </div>

              <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                {step.title}
              </h3>

              <p className="text-sm text-sky-100/80 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Call to Action */}
        <div className="pt-6 text-center">
          <button
            onClick={onOpenCheckout}
            className="btn-shimmer inline-flex items-center gap-3 bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] hover:opacity-95 text-[#0B192C] font-syne font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>QUERO COMEÇAR A TRANSFORMAÇÃO AGORA</span>
            <ArrowRight className="w-5 h-5 stroke-[3] text-[#0B192C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
