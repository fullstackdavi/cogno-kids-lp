import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const { testimonials } = LANDING_COPY;

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#0B192C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            Veja o relato de pais que já transformaram a rotina dos seus filhos
          </h2>

          <p className="text-sky-100/90 text-base sm:text-lg">
            Mais de 12.800 famílias atendidas em todo o Brasil.
          </p>
        </div>

        {/* Aggregate Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0F2847] p-6 rounded-3xl border border-sky-400/20 text-center">
          <div className="space-y-1">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">
              +12.840
            </span>
            <span className="block text-xs text-sky-200/80">Famílias Atendidas</span>
          </div>
          <div className="space-y-1">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-[#BAE6FD]">
              4.9 / 5.0
            </span>
            <span className="block text-xs text-sky-200/80">Avaliação Média dos Pais</span>
          </div>
          <div className="space-y-1">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
              98.4%
            </span>
            <span className="block text-xs text-sky-200/80">Aprovação em Foco e Calma</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#0F2847] p-7 rounded-3xl border border-sky-400/20 hover:border-[#38BDF8]/40 shadow-xl space-y-4 flex flex-col justify-between relative group transition-all"
            >
              <Quote className="w-8 h-8 text-[#38BDF8]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8]" />
                  ))}
                  <span className="text-xs text-sky-200 font-bold ml-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Compra Verificada
                  </span>
                </div>

                {/* Highlight Quote */}
                <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1.5 rounded-xl text-xs font-bold text-[#38BDF8] inline-block">
                  "{t.highlight}"
                </div>

                {/* Body Text */}
                <p className="text-sm text-sky-100/90 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-sky-400/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#38BDF8]/50"
                />
                <div>
                  <h4 className="font-syne font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-sky-200/80">{t.role} • {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
