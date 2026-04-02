import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O trabalho espiritual realmente funciona nestes casos?",
    a: "Sim. São rituais ancestrais focados em quebrar vínculos nocivos. A Guia Maria Helena deteta interferências de terceiros e aplica o bloqueio mental com eficiência e rapidez.",
  },
  {
    q: "A pessoa amada vai saber que a mandei vigiar e intervir?",
    a: "Jamais. O sigilo é absoluto. A pessoa sentirá uma repulsa natural pelas interferências (amantes/más companhias) e uma vontade irresistível de voltar para ti, sem nunca desconfiar.",
  },
  {
    q: "Em quanto tempo verei a verdade e os resultados?",
    a: "A revelação e a quebra de laços iniciam-se logo após a consulta inicial. Sinais físicos como mensagens inesperadas, e afastamento das companhias indesejadas surgem entre 24 a 72h.",
  },
  {
    q: "Funciona mesmo à distância?",
    a: "A energia espiritual de manipulação não conhece barreiras físicas. Rastreamos bloqueios e isolamos a pessoa amada em qualquer parte do mundo — Portugal, Brasil, Angola, Europa.",
  },
  {
    q: "E se a pessoa já estiver com outra pessoa?",
    a: "Este é o cenário onde a nossa intervenção é mais crítica. O Protocolo atua destruindo o vínculo forjado pela rival, isolando as energias para que só sobrem os sentimentos verdadeiros por ti.",
  },
  {
    q: "A consulta pelo WhatsApp é gratuita?",
    a: "Sim, a primeira análise do teu caso é totalmente gratuita. Só agimos espiritualmente depois de provar, detetar a verdade ocultada e após a tua autorização direta.",
  },
];

const FAQSection = () => (
  <section className="mt-16 mb-12">
    <h2 className="text-2xl md:text-3xl font-cinzel text-center text-gold mb-6">
      Perguntas Frequentes
    </h2>
    <Accordion type="single" collapsible className="space-y-2">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="border border-border bg-card/80 rounded-sm px-5"
        >
          <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FAQSection;
