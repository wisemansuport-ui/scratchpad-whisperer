import { useState } from "react";
import {
  HeartCrack,
  Frown,
  PhoneOff,
  Search,
  UserX,
  Clock,
  Eye,
  Magnet,
  ShieldAlert,
  Sparkles,
  Flame,
  Loader2,
  Lock
} from "lucide-react";

const WHATSAPP_NUMBER = "22999455359";

interface QuizOption {
  label: string;
  icon: React.ElementType;
  value: string;
}

interface QuizStep {
  question: string;
  subtitle: string;
  options: QuizOption[];
}

const steps: QuizStep[] = [
  {
    question: "O QUE ESTÁ A DESTRUIR A TUA PAZ NESTE MOMENTO?",
    subtitle: "Sê verdadeira. O Tarot não esconde a presença de intrusos ou feitiços.",
    options: [
      { label: "Sinto que há bruxaria, feitiço ou inveja a afastar o meu amor", icon: ShieldAlert, value: "afastamento_espiritual" },
      { label: "Ele(a) mudou da noite para o dia, ficou frio e distante do nada", icon: UserX, value: "mudanca_repentina" },
      { label: "Brigas inexplicáveis, como se uma força nos quisesse separar", icon: Flame, value: "conflito_constante" },
    ],
  },
  {
    question: "HÁ QUANTO TEMPO O TEU AMOR ESTÁ SOB ESTA INFLUÊNCIA?",
    subtitle: "Atenção: Quanto mais o tempo passa, mais o corte espiritual se enraíza.",
    options: [
      { label: "Algumas semanas (O laço rápido ainda é fácil de reverter)", icon: Clock, value: "semanas" },
      { label: "Meses de agonia (Risco crítico de bloqueio cármico severo)", icon: HeartCrack, value: "meses" },
      { label: "Já perdi o contacto ou assumiu amante (Emergência Espiritual)", icon: PhoneOff, value: "perda_total" },
    ],
  },
  {
    question: "SENTES ALGUM DESTES SINTOMAS RECENTEMENTE?",
    subtitle: "Sê honesta, estes são os primeiros sinais somáticos de um ataque espiritual.",
    options: [
      { label: "Insónia pesada e ansiedade que aperta o peito de madrugada", icon: Eye, value: "insonia" },
      { label: "Uma tristeza repentina, falta de ar ou dores inexplicáveis", icon: Frown, value: "dores" },
      { label: "Pensamentos obsessivos que não consigo controlar de jeito nenhum", icon: Sparkles, value: "obsessao" },
    ],
  },
  {
    question: "COMO ACONTECEU A MUDANÇA DE COMPORTAMENTO DELE(A)?",
    subtitle: "A resposta a isto ajuda-me a desvendar a origem do corte magnético.",
    options: [
      { label: "Foi de forma muito fria, repulsiva e do dia para a noite", icon: UserX, value: "repulsa" },
      { label: "Disse que estava confuso(a) e cortou-me da vida do nada", icon: HeartCrack, value: "confusao" },
      { label: "Houve forte manipulação dissimulada de família ou falsos amigos", icon: ShieldAlert, value: "manipulacao" },
    ],
  },
  {
    question: "SE AGIRMOS AINDA HOJE, O QUE EXIGES QUE ACONTEÇA?",
    subtitle: "Esta resposta calibra a agressividade do meu ritual magnético.",
    options: [
      { label: "Desmascarar a rival e causar nojo absoluto na mente dele(a)", icon: Eye, value: "verdade" },
      { label: "Gerar arrependimento e fazê-lo(a) voltar a rastejar e implorar", icon: Magnet, value: "bloqueio" },
      { label: "Quebrar toda a inveja e selar a nossa relação de forma irreversível", icon: Sparkles, value: "protecao" },
    ],
  },
];

const resultMessages: Record<string, { title: string; message: string; urgency: string }> = {
  afastamento_espiritual: {
    title: "⚠️ ALERTA: FIZERAM UM TRABALHO PARA VOS SEPARAR.",
    message: "A mudança repentina não foi culpa vossa. Há um trabalho de corte energético feito recentemente para secar o afeto e sugar as vossas energias. O Protocolo Magnético ainda pode reverter isto e devolver o alvo para ti.",
    urgency: "🟢 1 Vaga de Urgência Liberada",
  },
  mudanca_repentina: {
    title: "👁️ A MENTE DELE(A) FOI MANIPULADA POR TERCEIROS.",
    message: "A pessoa que amas sofre de cegueira espiritual severa. Existe uma forte influência (inveja ou amarração) a puxar a energia para longe. O nosso Ritual destrói essa ligação pirata e gera repulsa instantânea por rivais.",
    urgency: "🔴 AÇÃO IMEDIATA REQUERIDA (Risco de Perda Permanente)",
  },
  conflito_constante: {
    title: "🧛 VAMPIRISMO ENERGÉTICO EXTREMO DETETADO.",
    message: "Existe uma magia de peso plantada no vosso caminho para anular a química e destruir a vontade de estarem juntos. Estão a ser sugados por espíritos obsessores. Precisamos de blindar a relação HOJE para desatar esse nó.",
    urgency: "🟢 Protocolo de Contra-Ataque Energético Pronto",
  },
};

const QuizQualificacao = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingText, setAnalyzingText] = useState("A sintonizar frequências energéticas...");

  const handleSelect = (value: string) => {
    setSelectedOption(value);

    setTimeout(() => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        startAnalysis();
      }
    }, 400);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    const texts = [
      "A invocar proteções espirituais de alto feitiço...",
      "A fazer scan no campo magnético à procura de rivais...",
      "A procurar sinais de magia e trabalhos enterrados...",
      "CRÍTICO: Bloqueio energético invasivo detetado. A desencriptar diagnóstico..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < texts.length) {
        setAnalyzingText(texts[i]);
        i++;
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        setShowResult(true);
      }
    }, 1200);
  };

  const result = resultMessages[answers[0]] || resultMessages.afastamento_espiritual;

  const buildWhatsAppURL = () => {
    const situacaoMap: Record<string, string> = {
      afastamento_espiritual: "Bruxaria/Inveja ou Feitiço evidente",
      mudanca_repentina: "Mudou da noite para o dia/Ficou Frio",
      conflito_constante: "Brigas sem justificativa lógica",
    };
    const tempoMap: Record<string, string> = {
      semanas: "Algumas semanas (Dano rápido)",
      meses: "Meses de agonia contínua",
      perda_total: "Perda de contacto/Assumiu rival",
    };
    const sintomasMap: Record<string, string> = {
      insonia: "Insônia pesada / Ansiedade",
      dores: "Tristeza profunda / Dores estranhas",
      obsessao: "Pensamentos super obsessivos",
    };
    const comportamentoMap: Record<string, string> = {
      repulsa: "Ficou repulsivo(a) e frio de repente",
      confusao: "Diz que está confuso(a) e se distanciou",
      manipulacao: "Sinal nítido de manipulação de terceiros",
    };
    const desejoMap: Record<string, string> = {
      verdade: "Desmascarar rival e gerar NOJO nele(a)",
      bloqueio: "Destruir orgulho / Fazê-lo rastejar",
      protecao: "Selamento e blindagem definitiva do nosso laço",
    };

    const msg = encodeURIComponent(
      `Olá Guia Maria Helena! Recebi o meu *ALERTA DE ANÁLISE* no site com os meus dados e preciso de ajuda:\n\n` +
      `📌 *Diagnóstico:* ${situacaoMap[answers[0]] || answers[0]}\n` +
      `⏳ *Raiz do Tempo:* ${tempoMap[answers[1]] || answers[1]}\n` +
      `💔 *Meus Sintomas Ocultos:* ${sintomasMap[answers[2]] || answers[2]}\n` +
      `👤 *Mudança Comportamental:* ${comportamentoMap[answers[3]] || answers[3]}\n` +
      `🔥 *Minha Única Exigência:* ${desejoMap[answers[4]] || answers[4]}\n\n` +
      `🚨 *Por favor, revela-me qual foi a mensagem bloqueada e o que precisamos fazer de IMEDIATO para reverter esse feitiço!*`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setIsAnalyzing(false);
    setAnalyzingText("A sintonizar frequências energéticas...");
  };

  const progress = showResult || isAnalyzing ? 100 : ((currentStep) / steps.length) * 100;

  if (isAnalyzing) {
    return (
      <div className="border border-gold/30 rounded-lg bg-card p-6 md:p-8 text-center max-w-lg mx-auto flex flex-col items-center justify-center min-h-[340px]">
        <Loader2 className="w-12 h-12 text-gold animate-spin mb-6" />
        <h3 className="text-gold font-cinzel font-black text-xl mb-3 animate-pulse">A analisar energias...</h3>
        <p className="text-muted-foreground text-sm font-medium">{analyzingText}</p>
        
        {/* Fake Loading Bar */}
        <div className="w-full h-1.5 bg-border rounded-full mt-8 overflow-hidden max-w-[240px]">
          <div className="h-full bg-gold rounded-full relative w-full origin-left animate-pulse" />
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="border border-gold/30 rounded-lg bg-card p-6 md:p-8 text-center max-w-lg mx-auto relative overflow-hidden">
        {/* Glow effect in background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gold/10 blur-[50px] -z-10" />

        <div className="flex justify-center mb-4">
          <Flame className="w-12 h-12 text-gold animate-bounce" />
        </div>

        <h3 className="text-gold font-cinzel font-black text-2xl mb-5 leading-tight">{result.title}</h3>

        <div className="relative p-5 mb-6 border border-red-500/20 bg-red-950/10 rounded-lg text-left overflow-hidden group">
            <Lock className="w-6 h-6 text-red-500 mb-3" />
            <p className="text-red-400 text-sm font-bold mb-2 uppercase tracking-wide">
              🚨 Mensagem Oculta: Detalhe Crítico
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed blur-[5px] select-none opacity-80">
              {result.message} A verdade que ele(a) esconde está aqui, e requer uma intervenção imediata para reverter esta força magnética.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent flex items-end justify-center pb-4 transition-all duration-500 group-hover:pb-6">
               <span className="text-[11px] md:text-xs text-gold uppercase tracking-widest font-black font-cinzel drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                 <Lock className="w-3 h-3 inline mr-1 mb-0.5" /> Desbloquear Revelação 
               </span>
            </div>
        </div>

        <span className="inline-block text-xs font-bold mb-6 px-4 py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full animate-pulse">
          {result.urgency}
        </span>

        <p className="text-foreground text-sm md:text-base font-semibold mb-6">
          A Maria Helena tem uma mensagem pessoal para te entregar sobre este resultado. Libera a resposta agendando a tua consulta grátis.
        </p>

        <a
          href={buildWhatsAppURL()}
          onClick={() => {
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "Lead");
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-br from-whatsapp to-whatsapp-dark text-white no-underline text-base md:text-lg font-black py-4 px-6 rounded-full uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_hsl(var(--whatsapp)/0.5)] border border-whatsapp/80 animate-pulse-green"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Desbloquear a Verdade no WhatsApp
        </a>

        <button onClick={resetQuiz} className="mt-5 text-xs text-muted-foreground hover:text-foreground underline transition-colors">
          Refazer análise
        </button>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="border border-gold/30 rounded-lg bg-card p-6 md:p-8 max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-border rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step counter */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
          Pergunta {currentStep + 1} de {steps.length}
        </span>
        <span className="text-[11px] text-gold font-cinzel font-bold">
          ✦ Análise Espiritual
        </span>
      </div>

      {/* Question */}
      {/* Question */}
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-cinzel font-bold text-foreground mb-1">
          {step.question}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">{step.subtitle}</p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {step.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`flex items-start md:items-center gap-3 w-full text-left px-4 py-3.5 rounded border transition-all duration-300 text-sm
              ${
                selectedOption === opt.value
                  ? "border-red-600/80 bg-red-950/50 text-red-400 scale-[0.98] shadow-inner shadow-red-900/60"
                  : "border-border bg-card/80 text-foreground hover:border-red-500/40 hover:bg-red-950/20"
              }
            `}
          >
            <opt.icon className="w-5 h-5 flex-shrink-0 mt-0.5 md:mt-0" />
            <span className="font-medium leading-snug">{opt.label}</span>
            {selectedOption === opt.value && (
              <span className="ml-auto text-red-500 font-bold animate-pulse text-lg">✓</span>
            )}
          </button>
        ))}
      </div>

      {/* Confidence note */}
      <p className="mt-5 text-center text-[11px] text-muted-foreground/60">
        🔒 As tuas respostas são confidenciais e enviadas diretamente à Guia Maria Helena.
      </p>
    </div>
  );
};

export default QuizQualificacao;
