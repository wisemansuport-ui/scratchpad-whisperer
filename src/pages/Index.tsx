import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import ScarcityBar from "@/components/ScarcityBar";
import HeroSection from "@/components/HeroSection";
import PunchList from "@/components/PunchList";
import ActionArea from "@/components/ActionArea";
import ProofGrid from "@/components/ProofGrid";
import FAQSection from "@/components/FAQSection";

import ExitIntentPopup from "@/components/ExitIntentPopup";
import QuizQualificacao from "@/components/QuizQualificacao";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const Index = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* Ponto 4: ScarcityBar com contador 24h e visualizadores ao vivo */}
      <ScarcityBar />

      <div className="max-w-[750px] mx-auto px-5 py-12">
        {/* Ponto 1+2+6: Hero com link real, msg pré-preenchida e contador */}
        <div ref={addRevealRef} className="reveal">
          <HeroSection />
        </div>

        <div ref={addRevealRef} className="reveal">
          <PunchList />
        </div>

        <div ref={addRevealRef} className="reveal">
          <ActionArea />
        </div>

        {/* Ponto 3: Depoimentos com avatares */}
        <div ref={addRevealRef} className="reveal">
          <ProofGrid />
        </div>

        {/* Ponto 11: Quiz de qualificação antes do WhatsApp */}
        <div ref={addRevealRef} className="reveal">
          <div className="my-12 mt-20" id="quiz-section" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-center text-xl md:text-2xl font-cinzel text-gold mb-2">
              <Sparkles className="w-6 h-6 inline-block align-top mr-2" />
              O Teu Amor Ainda Tem Solução?
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-8">
              Responde a 3 perguntas rápidas e descobre o ritual ideal para o teu caso.
            </p>
            <QuizQualificacao />
          </div>
        </div>

        <div ref={addRevealRef} className="reveal">
          <FAQSection />
        </div>

        <footer className="mt-12 text-center text-[10px] text-muted-foreground/50 space-y-2">
          <p>Aviso Espiritual: Os resultados variam baseados na tua dedicação psíquica e na intensidade das energias envolvidas no teu caso específico. Tratamento Espiritual e Consultoria. © 2026.</p>
          <p>
            <Link to="/politica-privacidade" className="hover:text-gold transition-colors">
              Política de Privacidade
            </Link>
          </p>
        </footer>
      </div>



      {/* Ponto 7: Exit-intent popup */}
      <ExitIntentPopup />

      <CookieBanner />
    </>
  );
};

export default Index;
