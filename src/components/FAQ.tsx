import React, { useState } from 'react';
import { LANDING_COPY } from '../data/landingData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { faqs } = LANDING_COPY;
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0B192C] border-t border-sky-400/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#38BDF8]" />
            <span>TIRA-DÚVIDAS & OBJEÇÕES</span>
          </div>

          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Perguntas Frequentes dos Pais
          </h2>

          <p className="text-sky-100/90 text-sm sm:text-base">
            Tudo o que você precisa saber antes de garantir o acesso do seu filho.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0F2847] rounded-2xl border border-sky-400/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                >
                  <span className="font-syne font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#38BDF8] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-sky-100/80 leading-relaxed border-t border-sky-400/10 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Support Notice */}
        <div className="bg-white/5 p-4 rounded-2xl border border-sky-400/20 text-center text-xs text-sky-100/90 flex flex-col sm:flex-row items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
          <span>Ficou com alguma dúvida adicional? Nosso suporte WhatsApp está pronto para te atender 24h por dia.</span>
        </div>

      </div>
    </section>
  );
};
