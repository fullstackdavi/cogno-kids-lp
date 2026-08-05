import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-[#0B192C]/95 backdrop-blur-md border-t border-[#38BDF8]/30 shadow-2xl transition-all duration-300 md:hidden animate-slide-up">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-[10px] bg-[#38BDF8]/20 text-[#BAE6FD] font-bold px-1.5 py-0.5 rounded uppercase">
              76% OFF
            </span>
            <span className="text-xs text-sky-200/60 line-through">R$ 197</span>
          </div>
          <span className="font-syne font-extrabold text-lg text-[#38BDF8] leading-none block">
            R$ 47,00
          </span>
          <span className="text-[10px] text-sky-100/80">Pagamento Único</span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="btn-shimmer flex-1 bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] text-[#0B192C] font-syne font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 active:scale-95"
        >
          <span>QUERO O COGNO KIDS</span>
          <ArrowRight className="w-4 h-4 stroke-[3] text-[#0B192C]" />
        </button>
      </div>
    </div>
  );
};
