import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Target, Pencil, ShieldCheck, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  const { benefits } = LANDING_COPY;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'target': return <Target className="w-7 h-7 text-[#38BDF8]" />;
      case 'pencil': return <Pencil className="w-7 h-7 text-[#7DD3FC]" />;
      case 'shield-check': return <ShieldCheck className="w-7 h-7 text-[#BAE6FD]" />;
      case 'sparkles': return <Sparkles className="w-7 h-7 text-[#38BDF8]" />;
      case 'heart': return <Heart className="w-7 h-7 text-[#7DD3FC]" />;
      default: return <Sparkles className="w-7 h-7 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-[#0B192C] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            O que seu filho ganha todos os dias com o Cogno Kids®
          </h2>

          <p className="text-sky-100/90 text-base sm:text-lg">
            Resultados visíveis no comportamento, na escola e na harmonia da sua casa em poucas semanas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#0F2847]/90 backdrop-blur-md p-7 rounded-3xl border border-sky-400/20 hover:border-[#38BDF8]/60 shadow-xl hover:shadow-2xl hover:shadow-sky-500/15 space-y-4 group transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#38BDF8]/5 rounded-bl-full pointer-events-none group-hover:bg-[#38BDF8]/10 transition-colors" />

              <div className="flex items-center justify-between relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-sky-300/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#38BDF8]/10 transition-all shadow-inner">
                  {getIcon(benefit.iconName)}
                </div>

                <span
                  className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-sky-300/30 bg-sky-400/10 text-sky-200"
                >
                  {benefit.badge}
                </span>
              </div>

              <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors relative z-10">
                {benefit.title}
              </h3>

              <p className="text-sm text-sky-100/80 leading-relaxed relative z-10">
                {benefit.description}
              </p>

              <div className="pt-2 border-t border-sky-400/10 flex items-center gap-2 text-xs text-sky-200/70 relative z-10">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Evolução contínua sem estresse</span>
              </div>
            </div>
          ))}

          {/* Highlight Stat Card */}
          <div className="bg-gradient-to-br from-[#0284C7] via-[#38BDF8] to-[#0284C7] p-7 rounded-3xl text-[#0B192C] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C]/80">PROVA CIENTÍFICA PARENTAL</span>
              <h3 className="font-syne text-2xl font-extrabold text-[#0B192C]">98.4% de Aprovação</h3>
              <p className="text-sm text-[#0B192C]/90 font-medium leading-relaxed">
                Dos pais entrevistados relataram maior tranquilidade na rotina e aumento espontâneo do tempo de concentração dos filhos.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0B192C]/20 flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#0B192C]">Desenvolvimento Saudável</span>
              <span className="bg-[#0B192C] text-white font-extrabold text-xs px-3 py-1 rounded-full">
                100% Lúdico
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
