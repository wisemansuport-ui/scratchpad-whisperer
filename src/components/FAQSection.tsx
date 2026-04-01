import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O trabalho espiritual realmente funciona?",
    a: "Sim. São rituais ancestrais praticados há séculos com resultados comprovados. A Guia Maria Helena trabalha com entidades de alta força e cada caso é tratado de forma individual e personalizada.",
  },
  {
    q: "Em quanto tempo verei resultados?",
    a: "Os primeiros sinais costumam surgir entre 24 a 72 horas após o ritual ser firmado. Mensagens inesperadas, sonhos, saudade repentina — são os primeiros movimentos energéticos.",
  },
  {
    q: "A pessoa amada vai saber que fiz um trabalho?",
    a: "Jamais. O sigilo é absoluto. A pessoa sentirá uma vontade natural e irresistível de voltar, sem nunca desconfiar de qualquer intervenção espiritual.",
  },
  {
    q: "Funciona mesmo à distância?",
    a: "A energia espiritual não conhece barreiras físicas. Trabalhamos com pessoas em todo o mundo — Portugal, Brasil, Angola, Moçambique — com a mesma eficácia.",
  },
  {
    q: "E se a pessoa estiver com outra pessoa?",
    a: "Esse é um dos casos mais comuns. O trabalho de amarração atua diretamente no vínculo emocional, enfraquecendo ligações superficiais e reacendendo o amor verdadeiro.",
  },
  {
    q: "A consulta pelo WhatsApp é gratuita?",
    a: "Sim, a primeira conversa é totalmente gratuita e sem compromisso. A Guia Maria Helena analisa o teu caso e indica o melhor caminho espiritual.",
  },
];

const FAQSection = () => (
  <section className="mb-12">
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
