import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const testimonials = [
  {
    text: "Guia Maria Helena, não tenho palavras. Em 3 dias apenas o meu namorado ligou-me aos prantos a pedir perdão, depois de semanas a ignorar as minhas mensagens. O seu dom é abençoado.",
    author: "Cláudia M.",
    location: "Lisboa",
    stars: 5,
    photo: avatar1,
    timeAgo: "há 2 dias",
  },
  {
    text: "Disseram-nos que éramos o passado e já tinham feito bruxaria para nos separar. O trabalho da dona Maria Helena quebrou tudo. A minha esposa está de volta a casa tal como me prometeu. Obrigado por tudo.",
    author: "Ricardo V.",
    location: "Porto",
    stars: 5,
    photo: avatar2,
    timeAgo: "há 5 dias",
  },
  {
    text: "Estava a sofrer há 6 meses, sem dormir, sem comer. Numa única consulta a Guia Maria Helena viu tudo sobre o meu caso. Em 2 semanas ele voltou completamente diferente, apaixonado como no início.",
    author: "Patrícia S.",
    location: "Braga",
    stars: 5,
    photo: avatar3,
    timeAgo: "há 1 semana",
  },
  {
    text: "Já tinha ido a outros guias e nenhum resolveu. A Maria Helena foi a única que me disse a verdade e cumpriu o que prometeu. Hoje estamos juntos e mais fortes que nunca.",
    author: "Fátima L.",
    location: "Coimbra",
    stars: 5,
    photo: avatar4,
    timeAgo: "há 2 semanas",
  },
  {
    text: "O meu marido saiu de casa por causa de outra mulher. A guia fez o trabalho e em 10 dias ele cortou com ela e voltou arrependido. Não acreditava se não tivesse vivido.",
    author: "Ana R.",
    location: "Faro",
    stars: 5,
    photo: avatar5,
    timeAgo: "há 3 semanas",
  },
  {
    text: "Procurei a Guia Maria Helena como última esperança. Ela disse-me para confiar e ter paciência. Em menos de 1 mês a minha namorada voltou a falar comigo e hoje já vivemos juntos novamente.",
    author: "Bruno T.",
    location: "Setúbal",
    stars: 4,
    photo: avatar6,
    timeAgo: "há 1 mês",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < count ? "text-gold" : "text-muted-foreground/30"}`}>
        ★
      </span>
    ))}
  </div>
);

const ProofGrid = () => (
  <div className="mt-12">
    <h2 className="text-center text-xl md:text-2xl font-cinzel text-gold mb-2">
      O Que Dizem Quem Já Recuperou o Amor
    </h2>
    <p className="text-center text-muted-foreground text-sm mb-6">
      ★★★★★ Avaliação média de 4.9 com base em +820 consultas
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {testimonials.map((t) => (
        <div
          key={t.author}
          className="bg-card border border-border p-5 rounded-sm text-sm flex flex-col gap-3"
        >
          {/* Avatar com foto real */}
          <div className="flex items-center gap-3">
            <img
              src={t.photo}
              alt={`Foto de ${t.author}`}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-gold/30 object-top"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-foreground text-sm">{t.author}</p>
              <p className="text-muted-foreground text-xs">{t.location} · {t.timeAgo}</p>
            </div>
          </div>

          <Stars count={t.stars} />

          <p className="italic text-muted-foreground leading-relaxed">"{t.text}"</p>

          <span className="text-[11px] text-green-400 flex items-center gap-1 font-medium">
            ✓ Consulta verificada via WhatsApp
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ProofGrid;
