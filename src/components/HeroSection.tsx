import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => (
  <section className="text-center mb-10">
    <span className="inline-flex items-center gap-2 font-cinzel text-[11px] font-extrabold text-gold uppercase tracking-[2px] border border-gold/40 px-3.5 py-1.5 bg-gold/5 rounded-sm mb-6">
      ✦ Atendimento Espiritual Confidencial
    </span>

    <h1 className="text-[32px] md:text-[40px] leading-[1.15] font-black font-cinzel mb-6">
      Restaura o Teu Amor Perdido em 24 Horas
      <span className="block text-gold text-[20px] md:text-[26px] mt-4">
        Com Guia Maria Helena — Especialista em Rituais Amorosos há mais de 10 anos.
      </span>
    </h1>

    <h2 className="text-[19px] font-normal text-muted-foreground italic max-w-[650px] mx-auto mb-8">
      Já tentaste de tudo e nada resultou? Eu posso ajudar-te. Milhares de casais já foram reconectados através dos meus rituais personalizados. O teu caso pode ser o próximo.
    </h2>

    <WhatsAppButton />
  </section>
);

export default HeroSection;
