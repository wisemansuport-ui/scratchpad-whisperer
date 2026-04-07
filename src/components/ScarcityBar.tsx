import { useState, useEffect } from "react";
import { AlertTriangle, BellRing } from "lucide-react";

// Fixed 24h countdown that resets at midnight — feels more real
const getMidnightEnd = () => {
  const stored = sessionStorage.getItem("scarcity-midnight-end");
  const nowTime = Date.now();
  
  if (stored) {
    const storedTime = parseInt(stored, 10);
    // Only use stored time if it's in the future
    if (storedTime > nowTime) {
      return storedTime;
    }
  }
  
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // next midnight
  const end = midnight.getTime();
  sessionStorage.setItem("scarcity-midnight-end", String(end));
  return end;
};

// Simulated live viewers (fluctuates between 11–27)
const useViewers = () => {
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * 17) + 11);
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((v) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.min(27, Math.max(11, v + delta));
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return viewers;
};

const ScarcityBar = () => {
  const [endTime] = useState(getMidnightEnd);
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, endTime - Date.now()));
  const viewers = useViewers();

  // Strategy A: Escassez Dinâmica
  const [slots, setSlots] = useState(() => {
    // Initialize from storage or default to 2
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem("scarcity-slots");
      if (stored) return parseInt(stored, 10);
    }
    return 2;
  });
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      setTimeLeft(remaining);
      if (remaining <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  // Handlers for Strategy A
  useEffect(() => {
    if (slots === 2) {
      // Após 12 segundos, surge a notificação da Margarida
      const dropTimer = setTimeout(() => {
        setToastVisible(true);
        
        // Exatamente 1.5s depois do toast aparecer, a barra superior atualiza para "1 vaga"
        setTimeout(() => {
          setSlots(1);
          sessionStorage.setItem("scarcity-slots", "1");
        }, 1500);
        
        // Esconde o toast após 7 segundos
        setTimeout(() => {
          setToastVisible(false);
        }, 8500);
        
      }, 12000); 
      
      return () => clearTimeout(dropTimer);
    }
  }, [slots]);

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-background via-[#2a0808] to-background border-b border-red-900/50 sticky top-0 z-50 text-white shadow-xl">
      <div className="text-center py-2.5 px-4 font-semibold text-[12px] md:text-[13px] tracking-wide flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5">
        
        <span className="flex items-center gap-1.5 text-red-500">
          <AlertTriangle className="w-4 h-4 animate-pulse" /> 
          <span className="uppercase tracking-[0.15em] text-[10px] md:text-[11px] font-black">Risco de Esgotamento:</span>
        </span>
        
        <span className="text-white/80">Restam apenas</span>
        
        <span key={slots} className={`font-black text-white px-2 py-0.5 rounded bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)] transition-all duration-500 ${slots === 1 ? 'animate-[ping_1.5s_ease-out_1]' : ''}`}>
          {slots} {slots === 1 ? 'vaga' : 'vagas'}
        </span>
        
        <span className="text-white/80">hoje —</span>
        
        <span className="font-bold text-red-300 tabular-nums bg-red-950/80 px-2 py-0.5 rounded border border-red-900 text-[11px] md:text-[12px] tracking-widest">
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
        
        <span className="hidden sm:inline text-white/20 ml-1 mr-1">|</span>
        
        <span className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-red-400 font-bold">{viewers} online</span>
          <span className="text-white/50 text-[10px] uppercase tracking-wider hidden sm:inline">a concorrer agora</span>
        </span>

      </div>

      {/* Floating Toast Notification (Strategy A) */}
      <div 
        className={`fixed bottom-24 left-4 z-[110] max-w-[320px] bg-card border border-gold/40 rounded-lg p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-700
          ${toastVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-10 -translate-x-10 pointer-events-none'}`}
      >
        <div className="flex items-start gap-3">
          <div className="bg-gold/20 p-2 rounded-full mt-0.5">
            <BellRing className="w-5 h-5 text-gold animate-[ring_2s_ease-in-out_infinite] origin-top" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-foreground mb-1 leading-snug">
              Margarida F. (Porto) garantiu a <strong className="text-red-400">penúltima vaga</strong> gratuita!
            </p>
            <p className="text-[11px] text-muted-foreground w-full flex justify-between items-center">
              <span>AGORA MESMO</span>
              <span className="text-gold font-bold animate-pulse">Só resta 1 vaga</span>
            </p>
          </div>
        </div>
        {/* Progress bar emptying out */}
        {toastVisible && (
          <div className="absolute bottom-0 left-0 h-1 bg-gold rounded-full w-full animate-[shrink_7s_linear_forwards]" />
        )}
      </div>

    </div>
  );
};

export default ScarcityBar;
