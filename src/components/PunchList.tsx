import { Magnet, Scissors, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "A Inversão Magnética Dominante",
    icon: Magnet,
    text: "Chega de implorar atenção. O Protocolo inverte as polaridades do casal. É ele(a) quem vai sentir a ansiedade do afastamento e o impulso incontrolável de te ligar a pedir perdão.",
  },
  {
    title: "Corte do Nó Cármico na Raiz",
    icon: Scissors,
    text: "O motivo da separação não foram as brigas. Foi o acúmulo de inveja e bloqueios que 'cegaram' a pessoa amada. Nós cortamos esse nó num altar de alta magia secreta em 24h.",
  },
  {
    title: "A Blindagem Absoluta de Cristal",
    icon: ShieldCheck,
    text: "Não basta voltar. O trabalho espiritual não termina até que a vossa ligação seja 100% selada contra rivais, ex-parceiros e influências negativas. O vosso amor torna-se indestrutível.",
  },
];

const PunchList = () => (
  <ul className="mx-auto mb-12 max-w-[650px] list-none space-y-4">
    {items.map((item) => (
      <li
        key={item.title}
        className="bg-card/80 border border-border border-l-[3px] border-l-gold p-5 md:p-6 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-sm md:text-base"
      >
        <strong className="flex items-center gap-2 text-gold font-cinzel text-lg mb-2">
          <item.icon className="w-5 h-5 flex-shrink-0" />
          {item.title}
        </strong>
        <p className="text-muted-foreground">{item.text}</p>
      </li>
    ))}
  </ul>
);

export default PunchList;
