import React, { useState } from 'react';
import { LANDING_COPY } from '../data/landingData';
import { X, ZoomIn } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const { socialProofs } = LANDING_COPY;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicate list multiple times for seamless uninterrupted marquee loop
  const marqueeItems = socialProofs ? [...socialProofs, ...socialProofs, ...socialProofs, ...socialProofs] : [];

  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-[#0B192C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
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

      </div>

      {/* Infinite Horizontal Scrolling Container */}
      <div className="mt-10 relative w-full overflow-hidden py-4">
        {/* Fade gradient masks on sides */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#0B192C] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#0B192C] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-slow gap-6 w-max">
          {marqueeItems.map((proof, idx) => (
            <div
              key={`${proof.id}-${idx}`}
              onClick={() => setSelectedImage(proof.imageUrl)}
              className="w-[260px] sm:w-[300px] md:w-[340px] shrink-0 group transition-transform transform hover:scale-[1.02] cursor-pointer relative"
            >
              <img
                src={proof.imageUrl}
                alt={`Prova Social ${idx + 1}`}
                className="w-full h-auto block object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none rounded-lg">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B192C]/90 text-[#38BDF8] text-xs font-bold px-3 py-1.5 rounded-full border border-[#38BDF8]/40 shadow-xl flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" /> Ampliar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#0F2847] rounded-3xl p-3 border border-sky-400/30 shadow-2xl flex flex-col items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#0B192C] text-white p-2 rounded-full border border-sky-400/30 hover:bg-sky-500/20 transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full overflow-y-auto flex justify-center p-2">
              <img
                src={selectedImage}
                alt="Prova Social Ampliada"
                className="max-w-full h-auto rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
