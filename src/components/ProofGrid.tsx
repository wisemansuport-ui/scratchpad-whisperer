const testimonials = [
  {
    text: "Guia Maria Helena, não tenho palavras. Em 3 dias apenas o meu namorado ligou-me aos prantos a pedir perdão, depois de semanas a ignorar as minhas mensagens. O seu dom é abençoado.",
    author: "Cláudia M.",
    location: "Lisboa",
    stars: 5,
  },
  {
    text: "Disseram-nos que éramos o passado e já tinham feito bruxaria para nos separar. O trabalho da dona Maria Helena quebrou tudo. A minha esposa está de volta a casa tal como me prometeu. Obrigado por tudo.",
    author: "Ricardo V.",
    location: "Porto",
    stars: 5,
  },
  {
    text: "Estava a sofrer há 6 meses, sem dormir, sem comer. Numa única consulta a Guia Maria Helena viu tudo sobre o meu caso. Em 2 semanas ele voltou completamente diferente, apaixonado como no início.",
    author: "Patrícia S.",
    location: "Braga",
    stars: 5,
  },
  {
    text: "Já tinha ido a outros guias e nenhum resolveu. A Maria Helena foi a única que me disse a verdade e cumpriu o que prometeu. Hoje estamos juntos e mais fortes que nunca.",
    author: "Fátima L.",
    location: "Coimbra",
    stars: 5,
  },
  {
    text: "O meu marido saiu de casa por causa de outra mulher. A guia fez o trabalho e em 10 dias ele cortou com ela e voltou arrependido. Não acreditava se não tivesse vivido.",
    author: "Ana R.",
    location: "Faro",
    stars: 5,
  },
  {
    text: "Procurei a Guia Maria Helena como última esperança. Ela disse-me para confiar e ter paciência. Em menos de 1 mês a minha namorada voltou a falar comigo e hoje já vivemos juntos novamente.",
    author: "Bruno T.",
    location: "Setúbal",
    stars: 4,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${i < count ? "text-gold" : "text-muted-foreground/30"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const ProofGrid = () => (
  <div className="mt-12">
    <h2 className="text-center text-xl md:text-2xl font-cinzel text-gold mb-6">
      O Que Dizem Quem Já Recuperou o Amor
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {testimonials.map((t) => (
        <div
          key={t.author}
          className="bg-card border border-border p-5 rounded-sm text-sm"
        >
          <Stars count={t.stars} />
          <span className="text-gold text-2xl font-serif block mb-2 leading-[0.5]">
            "
          </span>
          <p className="italic mb-3">"{t.text}"</p>
          <p className="text-muted-foreground text-xs">
            — {t.author}, {t.location}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ProofGrid;
