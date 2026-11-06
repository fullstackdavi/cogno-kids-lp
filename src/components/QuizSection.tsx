import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  FileText,
  Calendar,
  Lock,
  Smartphone,
  Brain,
  Clock,
  UserCheck,
  Target,
  Sparkle,
  RotateCcw
} from 'lucide-react';

interface QuizSectionProps {
  onOpenCheckout: () => void;
  onScrollToDemo?: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenCheckout }) => {
  // Quiz State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [age, setAge] = useState<string>('');
  const [focus, setFocus] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [behavior, setBehavior] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Total steps before result
  const totalSteps = 4;

  const handleSelectOption = (value: string) => {
    if (currentStep === 1) {
      setAge(value);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setFocus(value);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setTime(value);
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setBehavior(value);
      // Brief loading animation for high perceived value
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setCurrentStep(5); // Result Step
      }, 1100);
    }
  };

  const handleBack = () => {
    if (currentStep > 1 && currentStep <= 4) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAge('');
    setFocus('');
    setTime('');
    setBehavior('');
  };

  // Progress percentage
  const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <section id="quiz-section" className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284C7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-[350px] h-[350px] bg-[#38BDF8]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Quiz Card */}
        <div className="bg-[#0F2847]/90 backdrop-blur-md rounded-3xl border border-[#38BDF8]/40 shadow-2xl shadow-sky-500/10 p-5 sm:p-8 md:p-10 relative overflow-hidden">
          
          {/* Back Button Row (if active) */}
          {currentStep > 1 && currentStep <= 4 && (
            <div className="flex justify-end mb-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-xs font-semibold text-sky-200/80 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar</span>
              </button>
            </div>
          )}

          {/* Progress Bar (Visible during steps 1-4) */}
          {currentStep <= 4 && (
            <div className="mb-8 space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-sky-200/80">
                <span>Etapa {currentStep} de {totalSteps}</span>
                <span className="text-[#38BDF8] font-bold">{Math.round(progressPercent)}% concluído</span>
              </div>
              <div className="w-full bg-[#0B192C] h-2.5 rounded-full overflow-hidden border border-sky-400/20">
                <motion.div
                  className="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#BAE6FD] h-full rounded-full shadow-sm"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>
          )}

          {/* Quiz Content Container */}
          <AnimatePresence mode="wait">
            
            {/* Analyzing State */}
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center space-y-5"
              >
                <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-sky-400/20 animate-ping" />
                  <div className="w-12 h-12 rounded-full border-4 border-[#38BDF8] border-t-transparent animate-spin" />
                  <Brain className="w-6 h-6 text-[#38BDF8] absolute" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-syne font-bold text-xl text-white">
                    Analisando respostas e perfil pedagógico...
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-200/70">
                    Montando a trilha ideal para o perfil do seu filho
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 1: IDADE */}
            {!isAnalyzing && currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left space-y-2">
                  <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Qual a idade do seu filho ou filha?
                  </h2>
                  <p className="text-sky-200/80 text-sm">
                    Selecione a faixa etária para adaptarmos o nível dos desafios cognitivos.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  {[
                    { label: '3 a 5 anos', desc: 'Anos iniciais & Estímulo Lúdico', icon: '🎈' },
                    { label: '6 a 8 anos', desc: 'Alfabetização & Raciocínio', icon: '📚' },
                    { label: '9 a 10 anos', desc: 'Foco & Lógica Avançada', icon: '🧠' }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleSelectOption(option.label)}
                      className={`group p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                        age === option.label
                          ? 'bg-[#0284C7]/30 border-[#38BDF8] shadow-lg shadow-sky-500/20'
                          : 'bg-[#0B192C]/80 border-sky-400/20 hover:border-[#38BDF8]/60 hover:bg-[#0B192C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{option.icon}</span>
                        <div className="w-5 h-5 rounded-full border border-sky-400/40 group-hover:border-[#38BDF8] flex items-center justify-center transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div>
                        <div className="font-syne font-bold text-lg text-white group-hover:text-[#38BDF8] transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-sky-200/60 mt-0.5">
                          {option.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: FOCO */}
            {!isAnalyzing && currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left space-y-2">
                  <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    O que mais te preocupa hoje no desenvolvimento dele?
                  </h2>
                  <p className="text-sky-200/80 text-sm">
                    Isso define a prioridade das atividades recomendadas na primeira semana.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    { label: 'Atenção e concentração', desc: 'Dificuldade para focar e manter o interesse', icon: '🎯' },
                    { label: 'Raciocínio lógico', desc: 'Resolução de problemas e percepção visual', icon: '🧩' },
                    { label: 'Coordenação e escrita', desc: 'Controle motor fino e traços de caligrafia', icon: '✏️' },
                    { label: 'Ainda não sei bem', desc: 'Quero um diagnóstico completo de incentivo geral', icon: '❓' }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleSelectOption(option.label)}
                      className={`group p-5 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-3 ${
                        focus === option.label
                          ? 'bg-[#0284C7]/30 border-[#38BDF8] shadow-lg shadow-sky-500/20'
                          : 'bg-[#0B192C]/80 border-sky-400/20 hover:border-[#38BDF8]/60 hover:bg-[#0B192C]'
                      }`}
                    >
                      <div className="flex gap-3.5 items-start">
                        <span className="text-2xl mt-0.5">{option.icon}</span>
                        <div>
                          <div className="font-syne font-bold text-base text-white group-hover:text-[#38BDF8] transition-colors">
                            {option.label}
                          </div>
                          <div className="text-xs text-sky-200/60 mt-1">
                            {option.desc}
                          </div>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border border-sky-400/40 group-hover:border-[#38BDF8] flex items-center justify-center shrink-0 mt-1 transition-colors">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: TEMPO DISPONÍVEL */}
            {!isAnalyzing && currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left space-y-2">
                  <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Quanto tempo por dia vocês têm disponível?
                  </h2>
                  <p className="text-sky-200/80 text-sm">
                    O Cogno Kids® foi pensado para encaixar perfeitamente na rotina familiar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  {[
                    { label: '10 minutos', desc: 'Sessões curtas e super objetivas', icon: '⏱️' },
                    { label: '20 minutos', desc: 'Dose diária ideal de aprendizado', icon: '⏳' },
                    { label: 'Mais de 30 minutos', desc: 'Imersão completa e atividades impressas', icon: '🚀' }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleSelectOption(option.label)}
                      className={`group p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                        time === option.label
                          ? 'bg-[#0284C7]/30 border-[#38BDF8] shadow-lg shadow-sky-500/20'
                          : 'bg-[#0B192C]/80 border-sky-400/20 hover:border-[#38BDF8]/60 hover:bg-[#0B192C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{option.icon}</span>
                        <div className="w-5 h-5 rounded-full border border-sky-400/40 group-hover:border-[#38BDF8] flex items-center justify-center transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div>
                        <div className="font-syne font-bold text-lg text-white group-hover:text-[#38BDF8] transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-sky-200/60 mt-0.5">
                          {option.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: COMPORTAMENTO ATUAL */}
            {!isAnalyzing && currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left space-y-2">
                  <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Hoje, como ele ocupa o tempo livre?
                  </h2>
                  <p className="text-sky-200/80 text-sm">
                    Ajudará a calibrar a transição para hábitos mais saudáveis e focados.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  {[
                    { label: 'Tela ou celular', desc: 'Vídeos curtos, redes ou jogos passivos', icon: '📱' },
                    { label: 'Atividades soltas, sem direção', desc: 'Brincadeiras sem estímulo intencional', icon: '🎲' },
                    { label: 'Já faz algo estruturado', desc: 'Leitura, desenhos ou tarefas escolares', icon: '📋' }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleSelectOption(option.label)}
                      className={`group p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                        behavior === option.label
                          ? 'bg-[#0284C7]/30 border-[#38BDF8] shadow-lg shadow-sky-500/20'
                          : 'bg-[#0B192C]/80 border-sky-400/20 hover:border-[#38BDF8]/60 hover:bg-[#0B192C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{option.icon}</span>
                        <div className="w-5 h-5 rounded-full border border-sky-400/40 group-hover:border-[#38BDF8] flex items-center justify-center transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div>
                        <div className="font-syne font-bold text-base sm:text-lg text-white group-hover:text-[#38BDF8] transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-sky-200/60 mt-1">
                          {option.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 5: TELA DE RESULTADO */}
            {!isAnalyzing && currentStep === 5 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center sm:text-left"
              >
                {/* Result Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-[#38BDF8]/20 border border-[#38BDF8]/40 px-3 py-1 rounded-full text-xs font-bold text-[#38BDF8] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>DIAGNÓSTICO CONCLUÍDO COM SUCESSO</span>
                  </div>
                  <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    Sua trilha personalizada está pronta
                  </h2>
                  <p className="text-sky-200/90 text-sm sm:text-base">
                    Feita sob medida com base no que você respondeu
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#0B192C]/90 rounded-2xl border border-[#38BDF8]/40 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#38BDF8] flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-[#0B192C]" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-sky-200/70 font-bold">
                        Resumo da Trilha
                      </span>
                      <p className="font-syne font-bold text-base sm:text-lg text-[#38BDF8]">
                        Trilha gerada para {age || '3 a 5 anos'}, foco em {focus || 'Atenção e concentração'}
                      </p>
                    </div>
                  </div>

                  {/* Conditional Copy for "Tela ou celular" */}
                  {behavior === 'Tela ou celular' && (
                    <div className="pt-2 border-t border-sky-400/20 flex items-start gap-2.5 text-xs sm:text-sm text-sky-100 font-medium">
                      <Smartphone className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>
                        Uma alternativa estruturada ao tempo de tela, com resultado que dá pra acompanhar.
                      </span>
                    </div>
                  )}
                </div>

                {/* What's Included */}
                <div className="space-y-3">
                  <h3 className="font-syne font-bold text-base text-white flex items-center gap-2">
                    <Sparkle className="w-4 h-4 text-[#38BDF8]" />
                    <span>O que sua trilha inclui:</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#0B192C]/60 p-3.5 rounded-xl border border-sky-400/20 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                        <Gamepad2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Jogos e atividades pedagógicas
                      </span>
                    </div>

                    <div className="bg-[#0B192C]/60 p-3.5 rounded-xl border border-sky-400/20 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Atividades em PDF para imprimir
                      </span>
                    </div>

                    <div className="bg-[#0B192C]/60 p-3.5 rounded-xl border border-sky-400/20 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Plano diário guiado de 7 dias
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-2 space-y-3 text-center sm:text-left">
                  <button
                    onClick={onOpenCheckout}
                    className="w-full btn-shimmer bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] hover:opacity-95 text-[#0B192C] font-syne font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-2xl shadow-sky-500/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Lock className="w-5 h-5 text-[#0B192C]" />
                    <span>Desbloquear minha trilha</span>
                    <ArrowRight className="w-5 h-5 text-[#0B192C] stroke-[3]" />
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sky-200/80 font-medium px-1">
                    <span>⚡ Acesso Imediato • 2x de R$ 5,96 ou R$ 10,99 à vista</span>
                    <button
                      onClick={handleRestart}
                      className="inline-flex items-center gap-1 text-[#38BDF8] hover:underline"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Refazer respostas</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
