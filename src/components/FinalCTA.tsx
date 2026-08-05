import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenCheckout: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0B192C] via-[#0F2847] to-[#0B192C] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4 fill-[#38BDF8]" />
          <span>ÚLTIMA CHANCE DA CONDIÇÃO DE LANÇAMENTO</span>
        </div>

        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Não deixe a infância do seu filho passar no piloto automático das telas.
        </h2>

        <p className="text-sky-100/90 text-base sm:text-lg max-w-2xl mx-auto">
          Proporcione um desenvolvimento saudável, focado e divertido por apenas <strong className="text-[#38BDF8]">2x de R$ 5,96 ou R$ 10,99 à vista</strong>.
        </p>

        {/* CTA Button */}
        <div className="pt-2 max-w-md mx-auto space-y-3">
          <button
            onClick={onOpenCheckout}
            className="w-full btn-shimmer bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] hover:opacity-95 text-[#0B192C] font-syne font-extrabold text-lg sm:text-xl py-5 px-8 rounded-2xl shadow-2xl shadow-sky-500/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <span>QUERO MEU ACESSO VITALÍCIO AGORA</span>
            <ArrowRight className="w-6 h-6 stroke-[3] text-[#0B192C]" />
          </button>

          <p className="text-xs text-sky-200/80 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>Garantia Total de 7 Dias • Acesso Instantâneo</span>
          </p>
        </div>

      </div>
    </section>
  );
};
