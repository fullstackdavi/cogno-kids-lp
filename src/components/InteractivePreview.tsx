import React, { useState } from 'react';
import { Palette, Sparkles, CheckCircle2, RotateCcw, Lock } from 'lucide-react';

interface InteractivePreviewProps {
  onOpenCheckout: () => void;
}

type AgeGroup = '2-4' | '5-7' | '8-10';

export const InteractivePreview: React.FC<InteractivePreviewProps> = ({ onOpenCheckout }) => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('5-7');
  const [selectedColor, setSelectedColor] = useState<string>('#38BDF8');
  const [coloredParts, setColoredParts] = useState<{ [key: string]: string }>({});
  const [puzzleCompleted, setPuzzleCompleted] = useState<boolean>(false);

  // Available interactive baby blue palette
  const colors = [
    { name: 'Azul bebê claro', hex: '#BAE6FD' },
    { name: 'Azul celeste', hex: '#38BDF8' },
    { name: 'Azul bebê escuro', hex: '#0284C7' },
    { name: 'Azul marinho baby', hex: '#075985' },
    { name: 'Branco puro', hex: '#FFFFFF' },
    { name: 'Azul suave', hex: '#7DD3FC' },
  ];

  const handleColorPart = (partId: string) => {
    setColoredParts(prev => {
      const updated = { ...prev, [partId]: selectedColor };
      // Check if most parts are colored to celebrate completion
      if (Object.keys(updated).length >= 4) {
        setPuzzleCompleted(true);
      }
      return updated;
    });
  };

  const resetCanvas = () => {
    setColoredParts({});
    setPuzzleCompleted(false);
  };

  return (
    <section id="demo-interativa" className="py-16 md:py-24 bg-[#0B192C] border-t border-sky-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-sky-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>DEGUSTAÇÃO PRÁTICA INTERATIVA</span>
          </div>

          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Experimente agora como seu filho vai brincar e aprender
          </h2>

          <p className="text-sky-100/80 text-sm sm:text-base">
            Selecione a faixa etária e toque nas áreas da ilustração para pintar e resolver a atividade!
          </p>
        </div>

        {/* Age Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          {[
            { id: '2-4', label: '2 a 4 Anos', desc: 'Cores & Formas' },
            { id: '5-7', label: '5 a 7 Anos', desc: 'Desafios & Lógica' },
            { id: '8-10', label: '8 a 10 Anos', desc: 'Raciocínio & Foco' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedAge(tab.id as AgeGroup);
                resetCanvas();
              }}
              className={`px-5 py-3 rounded-2xl border text-left transition-all ${
                selectedAge === tab.id
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] border-[#BAE6FD] text-[#0B192C] shadow-lg shadow-sky-500/20 font-bold'
                  : 'bg-white/5 border-sky-400/20 text-sky-200 hover:bg-white/10'
              }`}
            >
              <span className="block font-syne font-bold text-sm sm:text-base">{tab.label}</span>
              <span className="text-[11px] opacity-80">{tab.desc}</span>
            </button>
          ))}
        </div>

        {/* Interactive Workspace Card */}
        <div className="max-w-4xl mx-auto bg-[#0F2847] p-6 sm:p-8 rounded-3xl border border-sky-400/20 shadow-2xl space-y-6">
          
          {/* Top Canvas Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-sky-400/20 text-xs text-sky-100">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-bold text-white">Atividade:</span>
              <span className="text-sky-200">
                {selectedAge === '2-4' && 'O Ursinho Estelar (Cores Mágicas)'}
                {selectedAge === '5-7' && 'O Foguete Espacial (Ligar & Colorir)'}
                {selectedAge === '8-10' && 'O Robô de Raciocínio (Lógica de Peças)'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetCanvas}
                className="flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>

              <span className="bg-[#38BDF8]/10 text-[#38BDF8] px-2.5 py-1 rounded-full font-bold">
                {Object.keys(coloredParts).length} / 5 Áreas Pintadas
              </span>
            </div>
          </div>

          {/* Color Palette Selector */}
          <div className="flex items-center justify-center gap-3 flex-wrap bg-white/5 p-3 rounded-2xl border border-sky-400/10">
            <span className="text-xs font-bold text-sky-100 mr-2">Escolha uma cor:</span>
            {colors.map(c => (
              <button
                key={c.hex}
                onClick={() => setSelectedColor(c.hex)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-transform transform active:scale-90 flex items-center justify-center border border-white/20 ${
                  selectedColor === c.hex ? 'scale-125 ring-4 ring-[#38BDF8] shadow-lg' : 'hover:scale-110 opacity-90'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              >
                {selectedColor === c.hex && <CheckCircle2 className="w-5 h-5 text-[#0B192C]" />}
              </button>
            ))}
          </div>

          {/* Canvas Illustration (Interactive SVG) */}
          <div className="relative bg-[#0B192C] rounded-2xl p-6 border border-sky-400/20 flex items-center justify-center min-h-[300px] overflow-hidden">
            
            {/* SVG Illustration with click-to-color parts */}
            <svg viewBox="0 0 300 240" className="w-full max-w-sm h-auto select-none cursor-pointer">
              
              {/* Stars Background */}
              <circle cx="40" cy="30" r="2" fill="#38BDF8" className="animate-ping" />
              <circle cx="260" cy="50" r="2" fill="#BAE6FD" className="animate-ping" />
              <circle cx="280" cy="180" r="1.5" fill="#7DD3FC" />
              <circle cx="30" cy="190" r="2" fill="#38BDF8" />

              {/* Character Base / Robot / Rocket Depending on Age */}
              {selectedAge === '2-4' && (
                /* Cute Teddy Bear Head */
                <g>
                  {/* Left Ear */}
                  <circle
                    cx="100" cy="70" r="30"
                    fill={coloredParts['ear-left'] || '#0F2847'}
                    stroke="#38BDF8" strokeWidth="4"
                    onClick={() => handleColorPart('ear-left')}
                    className="hover:opacity-80 transition-fill"
                  />
                  {/* Right Ear */}
                  <circle
                    cx="200" cy="70" r="30"
                    fill={coloredParts['ear-right'] || '#0F2847'}
                    stroke="#38BDF8" strokeWidth="4"
                    onClick={() => handleColorPart('ear-right')}
                    className="hover:opacity-80 transition-fill"
                  />
                  {/* Face Main */}
                  <circle
                    cx="150" cy="130" r="60"
                    fill={coloredParts['face'] || '#091D34'}
                    stroke="#38BDF8" strokeWidth="4"
                    onClick={() => handleColorPart('face')}
                    className="hover:opacity-80 transition-fill"
                  />
                  {/* Snout */}
                  <ellipse
                    cx="150" cy="145" rx="25" ry="20"
                    fill={coloredParts['snout'] || '#133054'}
                    stroke="#38BDF8" strokeWidth="3"
                    onClick={() => handleColorPart('snout')}
                  />
                  {/* Eyes & Nose */}
                  <circle cx="130" cy="115" r="7" fill="#FFFFFF" />
                  <circle cx="170" cy="115" r="7" fill="#FFFFFF" />
                  <circle cx="150" cy="140" r="8" fill="#0B192C" />
                  {/* Bowtie */}
                  <polygon
                    points="130,185 150,195 130,205"
                    fill={coloredParts['bow-left'] || '#1A3C66'}
                    stroke="#38BDF8" strokeWidth="2"
                    onClick={() => handleColorPart('bow-left')}
                  />
                  <polygon
                    points="170,185 150,195 170,205"
                    fill={coloredParts['bow-right'] || '#1A3C66'}
                    stroke="#38BDF8" strokeWidth="2"
                    onClick={() => handleColorPart('bow-right')}
                  />
                </g>
              )}

              {selectedAge === '5-7' && (
                /* Space Rocket */
                <g>
                  {/* Rocket Body */}
                  <path
                    d="M150 20 C110 60 100 130 100 170 H200 C200 130 190 60 150 20 Z"
                    fill={coloredParts['rocket-body'] || '#0F2847'}
                    stroke="#38BDF8" strokeWidth="4"
                    onClick={() => handleColorPart('rocket-body')}
                  />
                  {/* Window Ring */}
                  <circle
                    cx="150" cy="90" r="25"
                    fill={coloredParts['window-ring'] || '#133054'}
                    stroke="#38BDF8" strokeWidth="3"
                    onClick={() => handleColorPart('window-ring')}
                  />
                  <circle cx="150" cy="90" r="14" fill="#0B192C" stroke="#38BDF8" strokeWidth="2" />
                  {/* Left Fin */}
                  <polygon
                    points="100,120 60,170 100,170"
                    fill={coloredParts['fin-left'] || '#1A3C66'}
                    stroke="#38BDF8" strokeWidth="3"
                    onClick={() => handleColorPart('fin-left')}
                  />
                  {/* Right Fin */}
                  <polygon
                    points="200,120 240,170 200,170"
                    fill={coloredParts['fin-right'] || '#1A3C66'}
                    stroke="#38BDF8" strokeWidth="3"
                    onClick={() => handleColorPart('fin-right')}
                  />
                  {/* Flame Bottom */}
                  <polygon
                    points="120,170 150,220 180,170"
                    fill={coloredParts['flame'] || '#1A3C66'}
                    stroke="#BAE6FD" strokeWidth="3"
                    onClick={() => handleColorPart('flame')}
                  />
                </g>
              )}

              {selectedAge === '8-10' && (
                /* Robot Head */
                <g>
                  {/* Antenna */}
                  <line x1="150" y1="20" x2="150" y2="50" stroke="#38BDF8" strokeWidth="4" />
                  <circle
                    cx="150" cy="20" r="10"
                    fill={coloredParts['antenna'] || '#133054'}
                    stroke="#38BDF8" strokeWidth="3"
                    onClick={() => handleColorPart('antenna')}
                  />
                  {/* Main Head */}
                  <rect
                    x="80" y="50" width="140" height="110" rx="15"
                    fill={coloredParts['robot-head'] || '#0F2847'}
                    stroke="#38BDF8" strokeWidth="4"
                    onClick={() => handleColorPart('robot-head')}
                  />
                  {/* Left Eye */}
                  <rect
                    x="100" y="75" width="35" height="30" rx="8"
                    fill={coloredParts['eye-left'] || '#1A3C66'}
                    stroke="#38BDF8" strokeWidth="2"
                    onClick={() => handleColorPart('eye-left')}
                  />
                  {/* Right Eye */}
                  <rect
                    x="165" y="75" width="35" height="30" rx="8"
                    fill={coloredParts['eye-right'] || '#1A3C66'}
                    stroke="#38BDF8" strokeWidth="2"
                    onClick={() => handleColorPart('eye-right')}
                  />
                  {/* Mouth Screen */}
                  <rect
                    x="105" y="125" width="90" height="20" rx="5"
                    fill={coloredParts['mouth'] || '#0B192C'}
                    stroke="#38BDF8" strokeWidth="2"
                    onClick={() => handleColorPart('mouth')}
                  />
                </g>
              )}

            </svg>

            {/* Instruction overlay */}
            {Object.keys(coloredParts).length === 0 && (
              <div className="absolute inset-x-0 bottom-4 text-center pointer-events-none">
                <span className="bg-[#38BDF8] text-[#0B192C] font-extrabold text-xs px-3 py-1 rounded-full shadow-lg animate-bounce inline-block">
                  👉 TOQUE NAS PARTES PARA PINTAR!
                </span>
              </div>
            )}
          </div>

          {/* Completion Celebration Message */}
          {puzzleCompleted && (
            <div className="bg-[#38BDF8]/20 border border-[#38BDF8]/40 p-4 rounded-2xl text-center space-y-2 animate-fade-in">
              <span className="text-2xl">🎉</span>
              <h4 className="font-syne text-lg font-bold text-[#BAE6FD]">
                Parabéns! Você acabou de experimentar a magia do Cogno Kids®!
              </h4>
              <p className="text-xs text-sky-100">
                Seu filho terá acesso a mais de 350 atividades interativas e packs imprimíveis iguais a esta.
              </p>
            </div>
          )}

          {/* Bottom CTA to unlock full app */}
          <div className="pt-2 text-center flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-sky-400/20">
            <div className="text-left">
              <h4 className="font-syne text-sm font-bold text-white flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#38BDF8]" />
                <span>Quer liberar o acervo completo com +350 atividades?</span>
              </h4>
              <p className="text-xs text-sky-100/70">Acesso ilimitado, novos lançamentos mensais e suporte aos pais.</p>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto btn-shimmer bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B192C] font-syne font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 text-nowrap"
            >
              LIBERAR ACERVO COMPLETO POR R$ 47
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
