import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

// Fixed 24h countdown that resets at midnight — feels more real
const getMidnightEnd = () => {
  const stored = sessionStorage.getItem("scarcity-midnight-end");
  if (stored) return parseInt(stored, 10);
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

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      setTimeLeft(remaining);
      if (remaining <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-scarcity sticky top-0 z-50 text-foreground">
      <div className="text-center py-2 px-4 font-semibold text-[12px] md:text-[13px] tracking-wide flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1"><AlertTriangle className="w-4 h-4 text-yellow-300" /> ATENÇÃO: Apenas</span>
        <span className="font-black text-yellow-300">3 vagas disponíveis</span>
        <span>para hoje —</span>
        <span className="font-black text-yellow-300 tabular-nums">
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
        <span className="hidden sm:inline text-white/60">|</span>
        <span className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-green-300 font-bold">{viewers} pessoas</span>
          <span>a ver agora</span>
        </span>
      </div>
    </div>
  );
};

export default ScarcityBar;
