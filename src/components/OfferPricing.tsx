import React, { useState, useEffect } from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Sparkles, Check, Gift, ShieldCheck, ArrowRight, Clock, Lock } from 'lucide-react';

interface OfferPricingProps {
  onOpenCheckout: () => void;
}

export const OfferPricing: React.FC<OfferPricingProps> = ({ onOpenCheckout }) => {
  const { pricing } = LANDING_COPY;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 52 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 }; // Loop
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#0B192C] border-y border-sky-400/20 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#0284C7]/20 to-[#BAE6FD]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            {pricing.title}
          </h2>

          <p className="text-sky-100/90 text-base sm:text-lg">
            Sem pegadinhas, sem cobranças recorrentes. Você compra uma vez e tem acesso vitalício!
          </p>
        </div>

        {/* Live Countdown Timer Bar */}
        <div className="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0284C7] p-4 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-4 text-[#0B192C]">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#0B192C] animate-spin" />
            <span className="font-syne font-extrabold text-sm sm:text-base">
              Esta condição com 76% DE DESCONTO expira em:
            </span>
          </div>

          <div className="flex items-center gap-2 font-syne text-xl sm:text-2xl font-extrabold">
            <div className="bg-[#0B192C] text-[#38BDF8] px-3 py-1 rounded-xl border border-[#38BDF8]/40">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </div>
            <span className="text-[#0B192C] font-extrabold">:</span>
            <div className="bg-[#0B192C] text-[#38BDF8] px-3 py-1 rounded-xl border border-[#38BDF8]/40">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </div>
          </div>
        </div>

        {/* Main Pricing Box */}
        <div className="bg-[#0F2847] rounded-3xl border-2 border-[#38BDF8]/50 shadow-2xl shadow-sky-500/10 overflow-hidden">
          
          {/* Top Banner inside card */}
          <div className="bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] text-[#0B192C] py-2.5 px-6 text-center font-syne font-extrabold text-xs sm:text-sm uppercase tracking-wider">
            ✨ PACOTE COMPLETO VITALÍCIO + 3 BÔNUS EXCLUSIVOS INCLUSOS
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Price Anchoring Table */}
            <div className="space-y-3">
              <h3 className="font-syne text-xs uppercase tracking-wider text-sky-200/80 font-bold">
                COMPARAÇÃO DE VALOR REAL:
              </h3>

              <div className="space-y-2">
                {pricing.comparison.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm ${
                      item.isHighlight
                        ? 'bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-white font-bold'
                        : 'bg-white/5 text-sky-100/80'
                    }`}
                  >
                    <div>
                      <span className="font-semibold block">{item.item}</span>
                      <span className="text-[11px] text-sky-200/60">{item.note}</span>
                    </div>
                    <span className={item.isHighlight ? 'text-[#38BDF8] font-syne font-extrabold text-sm sm:text-base' : 'line-through text-sky-200/40'}>
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Highlight */}
            <div className="bg-[#0B192C] p-6 rounded-2xl border border-sky-300/20 text-center space-y-2">
              <span className="text-xs text-sky-200/80 uppercase font-bold tracking-wider">
                DE <span className="line-through text-sky-300/60">{pricing.originalPrice}</span> POR APENAS:
              </span>

              <div className="flex items-center justify-center gap-2">
                <span className="font-syne text-5xl sm:text-6xl font-extrabold text-[#38BDF8] tracking-tight">
                  {pricing.salePrice}
                </span>
                <span className="text-xs bg-[#38BDF8]/10 text-[#38BDF8] font-extrabold px-2.5 py-1 rounded-full border border-[#38BDF8]/20">
                  PAGAMENTO ÚNICO
                </span>
              </div>

              <p className="text-xs text-sky-100/90 font-medium">{pricing.installments}</p>
            </div>

            {/* Bonuses Included */}
            <div className="space-y-4 pt-2">
              <h4 className="font-syne text-sm uppercase tracking-wider text-sky-200 font-extrabold flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#38BDF8]" />
                <span>BÔNUS EXCLUSIVOS DE LANÇAMENTO (GRÁTIS HOJE):</span>
              </h4>

              <div className="space-y-3">
                {pricing.bonuses.map((bonus) => (
                  <div key={bonus.id} className="bg-white/5 p-4 rounded-2xl border border-sky-300/20 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                    <div className="space-y-1 text-left flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <h5 className="font-syne font-bold text-sm text-white">{bonus.title}</h5>
                        <span className="text-[10px] bg-sky-400/20 text-sky-100 font-bold px-2 py-0.5 rounded border border-sky-300/20">
                          {bonus.tag} (Valia {bonus.value})
                        </span>
                      </div>
                      <p className="text-xs text-sky-100/80">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 space-y-3">
              <button
                onClick={onOpenCheckout}
                className="w-full btn-shimmer bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] hover:opacity-95 text-[#0B192C] font-syne font-extrabold text-lg sm:text-xl py-5 px-6 rounded-2xl shadow-2xl shadow-sky-500/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <Lock className="w-5 h-5 text-[#0B192C]" />
                <span>SIM! QUERO O COGNO KIDS® POR 2x DE R$ 5,96 OU R$ 10,99 À VISTA</span>
                <ArrowRight className="w-6 h-6 text-[#0B192C] stroke-[3]" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-sky-200/80 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                  Acesso Imediato no E-mail
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-[#38BDF8]" />
                  Pagamento 100% Criptografado
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
