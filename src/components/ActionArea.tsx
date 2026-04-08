import { Lock, MessageCircle, Sparkles } from "lucide-react";

import RitualCarousel from "./RitualCarousel";

const ActionArea = () => {
  const scrollToQuiz = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center bg-[radial-gradient(circle,hsl(280_30%_5%)_0%,hsl(var(--background))_100%)] p-10 border border-border rounded">
      <p className="text-xl md:text-2xl font-cinzel mb-8 text-foreground">
        A Verdade Está Prestes a Vir à Tona.{" "}
        <span className="text-gold">Assume o Controlo e Traz Quem Amas de Volta.</span>
      </p>

      <RitualCarousel />

      <div className="flex justify-center w-full">
        <a 
          href="#quiz-section"
          onClick={scrollToQuiz}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 w-full max-w-[320px] rounded-full font-bold text-lg md:text-xl text-black bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 hover:scale-[1.02] shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 relative overflow-hidden group"
        >
          {/* Efeito de brilho passando */}
          <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          <span className="relative flex items-center justify-center text-center flex-wrap gap-2 leading-tight">
            <span>Descobre o Teu Ritual</span> 
            <Sparkles className="w-5 h-5 animate-pulse flex-shrink-0" />
          </span>
        </a>
      </div>

      <div className="mt-6 text-xs text-muted-foreground flex justify-center gap-4 md:gap-5 flex-wrap">
        <span className="flex items-start md:items-center text-left md:text-center gap-1.5 max-w-full">
          <Lock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 md:mt-0" /> 
          <span>Atendimento 100% Discreto e Sigilo Absoluto</span>
        </span>
        <span className="flex items-start md:items-center text-left md:text-center gap-1.5 max-w-full">
          <MessageCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 md:mt-0" /> 
          <span>Diagnóstico de Viabilidade</span>
        </span>
      </div>
    </div>
  );
};

export default ActionArea;
