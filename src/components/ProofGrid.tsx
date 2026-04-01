const testimonials = [
  {
    text: "Guia Maria Helena, não tenho palavras. Em 3 dias apenas o meu namorado ligou-me aos prantos a pedir perdão, depois de semanas a ignorar as minhas mensagens. O seu dom é abençoado.",
    author: "Cláudia M.",
  },
  {
    text: "Disseram-nos que éramos o passado e já tinham feito bruxaria para nos separar. O trabalho da dona Maria Helena quebrou tudo. A minha esposa está de volta a casa tal como me prometeu. Obrigado por tudo.",
    author: "Ricardo V.",
  },
];

const ProofGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
    {testimonials.map((t) => (
      <div
        key={t.author}
        className="bg-card border border-border p-5 rounded-sm text-sm"
      >
        <span className="text-gold text-2xl font-serif block mb-2 leading-[0.5]">"</span>
        <p className="italic mb-3">"{t.text}"</p>
        <p className="text-muted-foreground text-xs">— {t.author}</p>
      </div>
    ))}
  </div>
);

export default ProofGrid;
