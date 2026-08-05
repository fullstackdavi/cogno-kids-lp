import React, { useState } from 'react';
import { X, Check, QrCode, CreditCard, Lock, CheckCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://pay.kirvano.com/b604abf7-4440-4e01-8fcd-b428a3893cd7';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0F2847] w-full max-w-lg rounded-3xl border border-[#38BDF8]/40 shadow-2xl overflow-hidden relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sky-200/80 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0284C7] p-5 text-center relative text-[#0B192C]">
              <span className="text-[10px] bg-[#0B192C] text-[#38BDF8] font-black uppercase px-2.5 py-0.5 rounded-full inline-block mb-1 border border-[#38BDF8]/30">
                CHECKOUT SEGURO & INSTANTÂNEO
              </span>
              <h3 className="font-syne font-extrabold text-xl text-[#0B192C]">
                Inscrição Cogno Kids® Vitalício
              </h3>
              <p className="text-xs text-[#0B192C]/80 font-medium">Acesso enviado na hora para seu e-mail e WhatsApp</p>
            </div>

            {/* Order Summary */}
            <div className="p-6 space-y-5">
              <div className="bg-white/5 p-4 rounded-2xl border border-sky-300/20 space-y-2">
                <div className="flex items-center justify-between font-syne font-bold text-sm">
                  <span className="text-white">Cogno Kids® + 3 Bônus</span>
                  <span className="text-[#38BDF8]">2x R$ 5,96 ou R$ 10,99</span>
                </div>
                <div className="text-xs text-sky-100/80 space-y-1">
                  <p className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Acesso Vitalício sem Mensalidades</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>3 Packs de Bônus Grátis hoje</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Garantia de Satisfação de 7 dias</span>
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-sky-100/90 font-semibold mb-1">Seu Nome Completo:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Maria Silva"
                    value={parentName}
                    onChange={e => setParentName(e.target.value)}
                    className="w-full bg-[#0B192C] border border-sky-300/20 rounded-xl px-3.5 py-2.5 text-white placeholder-sky-200/40 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-sky-100/90 font-semibold mb-1">E-mail para Receber o Acesso:</label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    value={parentEmail}
                    onChange={e => setParentEmail(e.target.value)}
                    className="w-full bg-[#0B192C] border border-sky-300/20 rounded-xl px-3.5 py-2.5 text-white placeholder-sky-200/40 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                {/* Payment Option Tabs */}
                <div>
                  <label className="block text-sky-100/90 font-semibold mb-1.5">Forma de Pagamento:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                        paymentMethod === 'pix'
                          ? 'bg-[#38BDF8]/10 border-[#38BDF8] text-[#38BDF8]'
                          : 'bg-white/5 border-sky-300/20 text-sky-200/60'
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      <span>PIX (Acesso Instantâneo)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-[#38BDF8]/10 border-[#38BDF8] text-[#38BDF8]'
                          : 'bg-white/5 border-sky-300/20 text-sky-200/60'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Cartão de Crédito</span>
                    </button>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full btn-shimmer bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] text-[#0B192C] font-syne font-extrabold text-sm sm:text-base py-3.5 rounded-xl shadow-lg shadow-sky-500/20 mt-2"
                >
                  FINALIZAR INSCRIÇÃO • 2x R$ 5,96 OU R$ 10,99 À VISTA
                </button>

                <p className="text-[10px] text-sky-200/70 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-[#38BDF8]" />
                  <span>Ambiente seguro e criptografado com SSL 256-bit</span>
                </p>
              </form>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#38BDF8]/20 border-2 border-[#38BDF8] text-[#38BDF8] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-syne font-extrabold text-2xl text-white">
              Pedido Confirmado com Sucesso!
            </h3>

            <p className="text-sm text-sky-100/90">
              Parabéns, <strong className="text-[#38BDF8]">{parentName}</strong>! Os dados de acesso ao <strong className="text-white">Cogno Kids®</strong> foram enviados para <span className="text-[#BAE6FD] font-semibold">{parentEmail}</span>.
            </p>

            <div className="bg-white/5 p-4 rounded-2xl border border-sky-300/20 text-xs text-sky-100/80 space-y-1">
              <p>🎉 Você já pode acessar em qualquer celular, tablet ou PC.</p>
              <p>📄 Bônus liberados na área do aluno.</p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full bg-[#38BDF8] text-[#0B192C] font-syne font-extrabold text-sm py-3 rounded-xl hover:bg-[#7DD3FC]"
            >
              FECHAR E ACESSAR A PLATAFORMA
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
