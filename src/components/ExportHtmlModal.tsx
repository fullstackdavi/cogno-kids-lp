import React, { useState } from 'react';
import { X, Copy, Check, Code, Download } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleSingleFileHtml = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cogno Kids® | Estimulação Cognitiva Infantil Divertida & Inteligente</title>
  <!-- Google Fonts: Poppins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: '#0B192C',
            skyLight: '#BAE6FD',
            skyMid: '#38BDF8',
            skyDark: '#0284C7'
          },
          fontFamily: {
            syne: ['Poppins', 'sans-serif'],
            sans: ['Poppins', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif']
          }
        }
      }
    }
  </script>
  <style>
    * { font-family: 'Poppins', sans-serif; }
    body { background-color: #0B192C; color: #F0F9FF; font-family: 'Poppins', sans-serif !important; overflow-x: hidden; }
    h1, h2, h3, h4, h5, h6, button, input, select, textarea, .font-syne, .font-poppins { font-family: 'Poppins', sans-serif !important; }
    .gradient-text { background: linear-gradient(135deg, #BAE6FD 0%, #38BDF8 50%, #0284C7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .btn-shimmer { position: relative; overflow: hidden; }
    .btn-shimmer::after { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(60deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%); transform: rotate(30deg); animation: shimmer 3s infinite; }
    @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
  </style>
</head>
<body class="bg-[#0B192C] text-white">
  <!-- AIDA HERO SECTION -->
  <header class="sticky top-0 z-40 bg-[#0B192C]/90 backdrop-blur border-b border-sky-400/20">
    <div class="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0284C7] text-[#0B192C] text-xs py-1.5 text-center font-bold">
      🔥 OFERTA DE LANÇAMENTO: 76% DE DESCONTO + BÔNUS EXCLUSIVOS HOJE!
    </div>
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="font-syne text-xl font-extrabold text-white">Cogno <span class="text-[#38BDF8]">Kids®</span></div>
      <a href="https://pay.kirvano.com/b604abf7-4440-4e01-8fcd-b428a3893cd7" class="bg-[#38BDF8] text-[#0B192C] font-syne font-extrabold px-4 py-2 rounded-xl text-xs">GARANTIR DESCONTO</a>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section class="py-16 text-center px-4 max-w-4xl mx-auto">
      <h1 class="font-syne text-3xl sm:text-4xl lg:text-[47px] font-extrabold mt-4 leading-tight">
        Seu filho hipnotizado na frente das telas assistindo conteúdos vazios? 
        <span class="block gradient-text mt-2">Transforme o tempo de tela do seu filho(a) em superpoder cognitivo.</span>
      </h1>
      <p class="text-sky-100/90 mt-4 text-base sm:text-lg">O Cogno Kids® é a plataforma de estímulo lúdico com ilustrações para colorir, jogos de raciocínio e desafios que desenvolvem a atenção, coordenação e lógica do seu filho sem o vício dos vídeos curtos.</p>
      <div class="mt-8">
        <a href="https://pay.kirvano.com/b604abf7-4440-4e01-8fcd-b428a3893cd7" class="bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] text-[#0B192C] font-syne font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl inline-block btn-shimmer">
          QUERO ESTIMULAR MEU FILHO AGORA →
        </a>
      </div>
    </section>
  </main>

  <footer class="bg-[#0B192C] py-8 text-center text-xs text-sky-200/60 border-t border-sky-400/20">
    <p>© 2026 Cogno Kids® por DS Company. Todos os direitos reservados.</p>
  </footer>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleSingleFileHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([sampleSingleFileHtml], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "cogno-kids-landing.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0F2847] w-full max-w-2xl rounded-3xl border border-[#38BDF8]/40 shadow-2xl overflow-hidden relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sky-200/80 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0284C7] p-5 text-center text-[#0B192C]">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Code className="w-5 h-5 text-[#0B192C]" />
            <h3 className="font-syne font-extrabold text-xl text-[#0B192C]">
              Exportar Arquivo HTML Standalone Único
            </h3>
          </div>
          <p className="text-xs text-[#0B192C]/80 font-medium">Código HTML5 + Tailwind + Google Fonts Poppins pronto para produção</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-sky-100/90">
            Você pode copiar o código abaixo ou baixar o arquivo <code className="text-[#38BDF8] bg-black/40 px-1.5 py-0.5 rounded">cogno-kids-landing.html</code> para subir diretamente em qualquer hospedagem, CDN ou servidor web da agência <strong className="text-white">DS Company</strong>.
          </p>

          <div className="relative">
            <textarea
              readOnly
              value={sampleSingleFileHtml}
              className="w-full h-48 bg-[#0B192C] border border-sky-300/20 rounded-2xl p-4 font-mono text-xs text-[#38BDF8] focus:outline-none resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-5 py-3 rounded-xl border border-sky-300/20 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-[#38BDF8]" /> : <Copy className="w-4 h-4 text-[#38BDF8]" />}
              <span>{copied ? 'Copiado para a Área de Transferência!' : 'Copiar Código HTML'}</span>
            </button>

            <button
              onClick={downloadFile}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0B192C] font-syne font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Arquivo .html</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
