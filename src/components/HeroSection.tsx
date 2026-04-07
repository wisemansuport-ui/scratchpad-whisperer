import WhatsAppButton from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="text-center mb-10">
    <span className="inline-flex items-center gap-2 font-cinzel text-[11px] font-extrabold text-gold uppercase tracking-[2px] border border-gold/40 px-3.5 py-1.5 bg-gold/5 rounded-sm mb-6">
      <Sparkles className="w-3.5 h-3.5" /> Diagnóstico de Viabilidade
    </span>

    <h1 className="text-[32px] md:text-[40px] leading-[1.15] font-black font-cinzel mb-6">
      A Falha Não Foi Tua. Há Uma <span className="text-gold">Terceira Energia</span> A Controlar A Mente De Quem Amas.
    </h1>

    <h2 className="text-[19px] font-normal text-muted-foreground italic max-w-[650px] mx-auto mb-6">
      A culpa não é sua. Descubra a verdade em um <strong>Diagnóstico Espiritual Gratuito</strong>. Realizamos o <strong>Afastamento de Energias Rivais</strong> e um <strong>Desbloqueio Afetivo</strong> profundo para limpar o caminho.
    </h2>

    {/* Ponto 6: Contador de resultados */}
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {[
        { value: "4.165", label: "Casais Reconectados" },
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

    <p className="mt-6 text-sm font-semibold text-red-500/90 max-w-[450px] mx-auto text-center px-4 animate-pulse">
      Devido ao desgaste energético que cada análise exige, realizamos um limite estrito de 5 Diagnósticos Gratuitos por dia. Verifique se a sua vaga de urgência hoje ainda está disponível.
    </p>
  </section>
);

export default HeroSection;
