import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, X } from 'lucide-react';

interface Notification {
  name: string;
  city: string;
  time: string;
  item: string;
}

const NOTIFICATIONS: Notification[] = [
  { name: 'Mariana S.', city: 'São Paulo/SP', time: 'há 2 minutos', item: 'Cogno Kids® Trilha Completa' },
  { name: 'Carolina M.', city: 'Belo Horizonte/MG', time: 'há 5 minutos', item: 'Cogno Kids® + Bônus VIP' },
  { name: 'Patrícia K.', city: 'Curitiba/PR', time: 'há 7 minutos', item: 'Cogno Kids® Trilha Completa' },
  { name: 'Fernanda R.', city: 'Rio de Janeiro/RJ', time: 'há 11 minutos', item: 'Cogno Kids® Kit Estímulo' },
  { name: 'Roberto A.', city: 'Porto Alegre/RS', time: 'há 14 minutos', item: 'Cogno Kids® Trilha Completa' },
  { name: 'Aline T.', city: 'Brasília/DF', time: 'há 18 minutos', item: 'Cogno Kids® + Bônus VIP' },
];

export const LiveNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before showing first notification
    const initialTimer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;

    // Hide toast after 6 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);

      // Schedule next notification after 10-15 seconds
      const nextTimer = setTimeout(() => {
        if (!dismissed) {
          setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
          setVisible(true);
        }
      }, 12000);

      return () => clearTimeout(nextTimer);
    }, 6000);

    return () => clearTimeout(hideTimer);
  }, [visible, dismissed]);

  if (dismissed || !visible) return null;

  const notification = NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-sm animate-fade-in transition-all duration-500 transform hover:scale-[1.02]">
      <div className="bg-[#0F2847]/95 backdrop-blur-md border border-[#38BDF8]/40 shadow-2xl rounded-2xl p-3.5 flex items-center gap-3 relative text-white">
        
        {/* Glow Icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#0284C7]/40 border border-[#38BDF8]/40 flex items-center justify-center shrink-0 shadow-inner">
          <Sparkles className="w-5 h-5 text-[#38BDF8] animate-pulse" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 text-xs text-[#38BDF8] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Nova Família Garantida</span>
            <span className="text-[10px] text-sky-200/60 font-normal">• {notification.time}</span>
          </div>
          <p className="text-xs text-white font-semibold truncate mt-0.5">
            {notification.name} <span className="text-sky-200/80 font-normal">({notification.city})</span>
          </p>
          <p className="text-[11px] text-sky-200/70 truncate">
            adquiriu <span className="text-[#38BDF8] font-medium">{notification.item}</span>
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 text-sky-200/60 hover:text-white p-1 transition-colors"
          title="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
