import React from 'react';
import { LANDING_COPY } from '../data/landingData';
import { Palette, Brain, Printer, Smartphone, Sparkles, Check } from 'lucide-react';

export const Solution: React.FC = () => {
  const { solution } = LANDING_COPY;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette': return <Palette className="w-6 h-6 text-[#38BDF8]" />;
      case 'brain': return <Brain className="w-6 h-6 text-[#7DD3FC]" />;
      case 'printer': return <Printer className="w-6 h-6 text-[#BAE6FD]" />;
      default: return <Smartphone className="w-6 h-6 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="solucao" className="py-16 md:py-24 bg-[#0B192C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>{solution.tag}</span>
          </div>

          <h2 className="font-syne text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {solution.title}
          </h2>

          <p className="text-sky-100/90 text-base sm:text-lg leading-relaxed">
            {solution.description}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solution.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#0F2847] p-6 rounded-2xl border border-sky-400/20 hover:border-[#38BDF8]/50 shadow-lg transition-all duration-300 space-y-4 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-sky-300/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(feat.icon)}
              </div>

              <h3 className="font-syne text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                {feat.title}
              </h3>

              <p className="text-sm text-sky-100/80 leading-relaxed">
                {feat.desc}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#38BDF8] font-semibold">
                <Check className="w-4 h-4 text-[#38BDF8]" />
                <span>Pronto para uso</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
