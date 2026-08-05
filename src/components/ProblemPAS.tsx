import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { AlertTriangle, Flame, Frown, Sparkles, CheckCircle, XCircle } from 'lucide-react';

export const ProblemPAS: React.FC = () => {
  const { pasProblem, pasAgitation } = LANDING_COPY;

  return (
    <section className="py-16 md:py-24 bg-[#0B192C] border-y border-sky-400/20 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION 1: THE PROBLEM */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-[#38BDF8] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#38BDF8]" />
            <span>{pasProblem.tag}</span>
          </div>

          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {pasProblem.title}
          </h2>

          <p className="text-sky-100/90 text-base sm:text-lg">
            {pasProblem.subtitle}
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pasProblem.bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="bg-[#0F2847] p-6 rounded-2xl border border-sky-400/20 shadow-lg space-y-3 relative group hover:border-sky-400/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-[#38BDF8]">
                <Frown className="w-5 h-5" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                {bullet.title}
              </h3>
              <p className="text-sm text-sky-100/80 leading-relaxed">
                {bullet.desc}
              </p>
            </div>
          ))}
        </div>


        {/* SECTION 2: THE AGITATION (PAIN INTENSIFICATION) */}
        <div className="bg-gradient-to-br from-[#0D223A] via-[#0B192C] to-[#0F2C4A] rounded-3xl p-6 sm:p-10 border border-sky-400/30 shadow-2xl space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-sky-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#38BDF8]" />
              <span>{pasAgitation.tag}</span>
            </div>

            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
              {pasAgitation.title}
            </h3>

            <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed">
              {pasAgitation.text}
            </p>
          </div>

          {/* Comparison Matrix: Passive Screen vs Active Cogno Kids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Passive Screen Box */}
            <div className="bg-[#091D34] rounded-2xl p-6 border border-sky-300/20 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-sky-300/20">
                <h4 className="font-syne text-base sm:text-lg font-bold text-sky-200 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-sky-300" />
                  <span>{pasAgitation.comparison.passive.title}</span>
                </h4>
                <span className="text-[10px] bg-sky-400/20 text-sky-100 font-bold uppercase px-2 py-0.5 rounded">
                  Inofensivo Aparente
                </span>
              </div>

              <ul className="space-y-3">
                {pasAgitation.comparison.passive.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-sky-100/80">
                    <span className="text-sky-300 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active Cogno Kids Box */}
            <div className="bg-gradient-to-br from-[#38BDF8]/15 via-[#0284C7]/20 to-[#BAE6FD]/10 rounded-2xl p-6 border border-[#38BDF8]/40 shadow-xl shadow-sky-500/10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-[#38BDF8]/30">
                <h4 className="font-syne text-base sm:text-lg font-bold text-[#38BDF8] flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#38BDF8]" />
                  <span>{pasAgitation.comparison.active.title}</span>
                </h4>
                <span className="text-[10px] bg-[#38BDF8]/20 text-[#38BDF8] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-[#38BDF8]/30">
                  Recomendado
                </span>
              </div>

              <ul className="space-y-3">
                {pasAgitation.comparison.active.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white font-medium">
                    <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
