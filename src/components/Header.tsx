import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenExportHtml: () => void;
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExportHtml, onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B192C]/90 backdrop-blur-md border-b border-sky-400/20 transition-all">
      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] p-0.5 shadow-lg shadow-sky-500/20">
            <div className="w-full h-full bg-[#0B192C] rounded-[10px] flex items-center justify-center font-syne text-xl text-[#38BDF8] font-extrabold tracking-tighter">
              CK
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-syne text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Cogno <span className="text-[#38BDF8]">Kids®</span>
              </span>
            </div>
            <p className="text-[11px] text-sky-200/70 hidden sm:block">Estímulo Cognitivo & Lógico Infantil</p>
          </div>
        </div>

        {/* Nav Badges & CTAs */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs text-sky-100 bg-white/5 px-3 py-1.5 rounded-full border border-sky-400/20">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>Garantia de 7 Dias • Acesso Vitalício</span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="btn-shimmer bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:opacity-95 text-[#0B192C] font-syne font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all transform active:scale-95"
          >
            Acessar Cogno Kids ®
          </button>
        </div>
      </div>
    </header>
  );
};
