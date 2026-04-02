import { Lock, MessageCircle, Sparkles } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import RitualCarousel from "./RitualCarousel";

const ActionArea = () => {
  const scrollToQuiz = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center bg-[radial-gradient(circle,hsl(280_30%_5%)_0%,hsl(var(--background))_100%)] p-10 border border-border rounded">
      <p className="text-xl md:text-2xl font-cinzel mb-8 text-foreground">
        O Protocolo de Inversão Magnética está pronto para ser ativado.{" "}
        <span className="text-gold">Ele(a) vai correr atrás. Não tu.</span>
      </p>

      <RitualCarousel />

      <WhatsAppButton 
        label={<span className="flex items-center gap-2">Descobre o Teu Ritual <Sparkles className="w-5 h-5" /></span>} 
        href="#quiz-section"
        onClick={scrollToQuiz}
      />

      <div className="mt-6 text-xs text-muted-foreground flex justify-center gap-5 flex-wrap">
        <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Conversa 100% Confidencial</span>
        <span className="flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Atendimento Humanizado</span>
      </div>
    </div>
  );
};

export default ActionArea;
