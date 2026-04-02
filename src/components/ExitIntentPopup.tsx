import { useState, useEffect } from "react";
import { Flame } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("exit-popup-dismissed")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !fired) {
        setFired(true);
        setVisible(true);
      }
    };

    // Mobile: show after 40s of inactivity
    const mobileTimer = setTimeout(() => {
      if (!fired && window.innerWidth < 768) {
        setFired(true);
        setVisible(true);
      }
    }, 40000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [fired]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("exit-popup-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={dismiss}
    >
      <div
        className="relative bg-card border border-gold/40 rounded-lg p-8 max-w-md w-full text-center shadow-[0_0_60px_hsl(var(--gold)/0.2)] animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-3 right-4 text-muted-foreground hover:text-foreground text-2xl leading-none transition-colors"
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="flex justify-center mb-4">
          <Flame className="w-10 h-10 text-gold animate-pulse" />
        </div>

        <p className="text-gold font-cinzel font-black text-lg mb-2">
          Espera! Não vás embora assim.
        </p>

        <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
          O teu amor pode ser recuperado. A Guia Maria Helena ainda tem{" "}
          <strong className="text-yellow-300">1 vaga disponível</strong> para hoje.
        </p>

        <p className="text-foreground text-sm font-semibold mb-6">
          A consulta inicial é <span className="text-gold">100% gratuita</span>. Sem compromisso.
        </p>

        <div className="flex flex-col items-center gap-3">
          <WhatsAppButton label="Quero a Minha Vaga Gratuita" />
          <button
            onClick={dismiss}
            className="text-muted-foreground text-xs hover:text-foreground underline transition-colors"
          >
            Não, vou desistir do meu amor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
