import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const { footer } = LANDING_COPY;

  return (
    <footer className="bg-[#0B192C] border-t border-sky-400/20 text-sky-100/80 py-12 text-xs leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-400/10">
          
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-syne text-xl font-extrabold text-white">
                Cogno <span className="text-[#38BDF8]">Kids®</span>
              </span>
              <span className="text-[10px] bg-white/10 text-sky-200 font-bold px-2 py-0.5 rounded">
                v2.4
              </span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sky-200/90 font-medium">
            <a href="#termos" className="hover:text-[#38BDF8] transition-colors">Termos de Uso</a>
            <a href="#privacidade" className="hover:text-[#38BDF8] transition-colors">Política de Privacidade</a>
            <a href="#garantia" className="hover:text-[#38BDF8] transition-colors">Política de Reembolso</a>
            <a href="#contato" className="hover:text-[#38BDF8] transition-colors">Suporte ao Cliente</a>
          </div>

        </div>

        {/* Non-Clinical Disclaimer Box */}
        <div className="bg-white/5 p-4 rounded-2xl border border-sky-400/20 space-y-2 text-sky-100/80 text-[11px] leading-normal">
          <div className="flex items-center gap-1.5 font-bold text-[#38BDF8]">
            <ShieldAlert className="w-4 h-4 text-[#38BDF8]" />
            <span>Aviso Legal e Diretrizes de Uso Educativo:</span>
          </div>
          <p>{footer.disclaimer}</p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sky-200/60 text-[11px]">
          <p>{footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
