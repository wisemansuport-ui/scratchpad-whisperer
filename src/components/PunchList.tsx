const items = [
  {
    title: "Magia de Alta Força e Eficácia",
    text: "Chega de sofreres com promessas vazias e charlatães. Os meus trabalhos de amarração e adoçamento atacam diretamente as energias que estão a separar os vossos caminhos, quebrando bloqueios e orgulho.",
  },
  {
    title: "Sigilo Absoluto e Garantido",
    text: "O desespero e a dor de um amor partido são sagrados. Todo o ritual é traçado e mantido em segredo rigoroso. Ninguém, especialmente a pessoa amada, saberá como ou por que decidiu voltar a procurar-te tão repentinamente.",
  },
  {
    title: "Resultados Acelerados (24 Horas)",
    text: "A energia não conhece distância. Assim que o teu trabalho é firmado no altar, as correntes invisíveis começam a puxar os pensamentos da pessoa até ti. A saudade aperta, o telefone toca.",
  },
];

const PunchList = () => (
  <ul className="mx-auto mb-12 max-w-[650px] list-none space-y-4">
    {items.map((item) => (
      <li
        key={item.title}
        className="bg-card/80 border border-border border-l-[3px] border-l-gold p-5 md:p-6 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-sm md:text-base"
      >
        <strong className="text-gold font-cinzel text-lg block mb-1">
          {item.title}
        </strong>
        {item.text}
      </li>
    ))}
  </ul>
);

export default PunchList;
