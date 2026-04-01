import { useEffect, useRef } from "react";
import ScarcityBar from "@/components/ScarcityBar";
import HeroSection from "@/components/HeroSection";
import PunchList from "@/components/PunchList";
import ActionArea from "@/components/ActionArea";
import ProofGrid from "@/components/ProofGrid";
import FAQSection from "@/components/FAQSection";

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
      <ScarcityBar />
      <div className="max-w-[750px] mx-auto px-5 py-12">
        <div ref={addRevealRef} className="reveal">
          <HeroSection />
        </div>

        <div ref={addRevealRef} className="reveal">
          <PunchList />
        </div>

        <div ref={addRevealRef} className="reveal">
          <ActionArea />
        </div>

        <div ref={addRevealRef} className="reveal">
          <ProofGrid />
        </div>

        <div ref={addRevealRef} className="reveal">
          <FAQSection />
        </div>

        <footer className="mt-12 text-center text-[10px] text-muted-foreground/50">
          Aviso Espiritual: Os resultados variam baseados na tua dedicação psíquica e na intensidade das energias envolvidas no teu caso específico. Tratamento Espiritual e Consultoria. © 2026.
        </footer>
      </div>
    </>
  );
};

export default Index;
