import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Shield, CheckCircle, RefreshCw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  const { guarantee } = LANDING_COPY;

  return (
    <section className="py-12 bg-[#0B192C] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0F2847] via-[#0B192C] to-[#0D223A] rounded-3xl p-6 sm:p-10 border border-sky-400/30 shadow-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative overflow-hidden">
          
          {/* Guarantee Badge Seal */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#0284C7] via-[#38BDF8] to-[#BAE6FD] p-1 shrink-0 shadow-lg shadow-sky-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-[#0B192C] rounded-full flex flex-col items-center justify-center text-center p-2">
              <Shield className="w-7 h-7 text-[#38BDF8] mb-0.5" />
              <span className="font-syne text-[11px] font-extrabold text-[#BAE6FD] leading-tight">7 DIAS</span>
              <span className="text-[9px] text-sky-200 uppercase font-bold">GARANTIA</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-sky-400/10 border border-sky-400/30 text-sky-200 px-3 py-0.5 rounded-full text-xs font-bold uppercase">
              <RefreshCw className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{guarantee.badge}</span>
            </div>

            <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-white">
              {guarantee.title}
            </h3>

            <p className="text-sky-100/90 text-xs sm:text-sm leading-relaxed">
              {guarantee.text}
            </p>

            <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-xs text-sky-200 font-semibold">
              <CheckCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Sem perguntas, sem ressentimentos, sem burocracia.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
