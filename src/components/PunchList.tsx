import { Magnet, Scissors, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "1. Descoberta e Investigação da Mentira",
    icon: Magnet,
    text: "Muitos afastamentos escondem a manipulação de terceiros. A Vidência Rastreadora descobre rapidamente quem ou o que causou o bloqueio, trazendo a verdade oculta à luz.",
  },
  {
    title: "2. Corte Absoluto de Terceiros e Inveja",
    icon: Scissors,
    text: "O trabalho cessa imediatamente qualquer ligação espiritual e física da pessoa amada com amantes e rivais. Cria um muro energético que impede qualquer interferência de destruir a vossa união.",
  },
  {
    title: "3. Bloqueio Mental e Domínio Magnético",
    icon: ShieldCheck,
    text: "Não basta voltar, é preciso garantir exclusividade. O protocolo age no subconsciente de quem amas, gerando repulsa por terceiros e um impulso incontrolável de pedir perdão e voltar para ti.",
  },
];

const PunchList = () => (
  <ul className="mx-auto mb-12 max-w-[650px] list-none space-y-4">
    {items.map((item) => (
      <li
        key={item.title}
        className="bg-card/80 border border-border border-l-[3px] border-l-gold p-5 md:p-6 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-sm md:text-base"
      >
        <strong className="flex items-start gap-2 text-gold font-cinzel text-lg mb-2">
          <item.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="leading-snug text-left">{item.title}</span>
        </strong>
        <p className="text-muted-foreground">{item.text}</p>
      </li>
    ))}
  </ul>
);

export default PunchList;
