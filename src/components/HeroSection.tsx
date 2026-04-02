import WhatsAppButton from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="text-center mb-10">
    <span className="inline-flex items-center gap-2 font-cinzel text-[11px] font-extrabold text-gold uppercase tracking-[2px] border border-gold/40 px-3.5 py-1.5 bg-gold/5 rounded-sm mb-6">
      <Sparkles className="w-3.5 h-3.5" /> Atendimento Espiritual Confidencial
    </span>

    <h1 className="text-[32px] md:text-[40px] leading-[1.15] font-black font-cinzel mb-6">
      A Falha Não É Tua. Ele Afastou-se Por Um <span className="text-gold">Bloqueio Cármico</span> Oculto.
    </h1>

    <h2 className="text-[19px] font-normal text-muted-foreground italic max-w-[650px] mx-auto mb-6">
      Descobre como o <strong>Protocolo de Inversão Magnética</strong> limpa as energias de inveja e faz a pessoa amada voltar arrependida, sem que precises de mandar uma única mensagem.
    </h2>

    {/* Ponto 6: Contador de resultados */}
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {[
        { value: "4.200+", label: "Casais Reconectados" },
        { value: "10+", label: "Anos de Experiência" },
        { value: "98%", label: "Taxa de Sucesso" },
      ].map((stat) => (
        <div key={stat.label} className="flex flex-col items-center bg-card/60 border border-gold/20 rounded px-5 py-3 min-w-[100px]">
          <span className="text-gold font-black font-cinzel text-2xl">{stat.value}</span>
          <span className="text-muted-foreground text-[11px] uppercase tracking-wider mt-0.5">{stat.label}</span>
        </div>
      ))}
    </div>

    <WhatsAppButton />
  </section>
);

export default HeroSection;
