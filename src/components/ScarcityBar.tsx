import { useState, useEffect } from "react";

const getEndTime = () => {
  const stored = sessionStorage.getItem("scarcity-end");
  if (stored) return parseInt(stored, 10);
  // Random between 2h and 4h from now
  const end = Date.now() + (2 * 60 + Math.floor(Math.random() * 120)) * 60 * 1000;
  sessionStorage.setItem("scarcity-end", String(end));
  return end;
};

const ScarcityBar = () => {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, endTime - Date.now()));

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
    <div className="bg-scarcity text-center py-2.5 px-4 font-semibold text-[13px] tracking-wide sticky top-0 z-50 text-foreground">
      ⚠️ ATENÇÃO: Apenas{" "}
      <span className="font-black text-yellow-300">3 vagas disponíveis</span>{" "}
      para rituais urgentes —{" "}
      <span className="font-black text-yellow-300 tabular-nums">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>{" "}
      restantes
    </div>
  );
};

export default ScarcityBar;
