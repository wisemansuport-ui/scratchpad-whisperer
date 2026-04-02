import { useState } from "react";
import {
  HeartCrack,
  Frown,
  PhoneOff,
  HeartOff,
  Zap,
  Calendar,
  CalendarDays,
  Hourglass,
  PlusCircle,
  MessageCircle,
  Sparkles,
  Flame
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
    question: "Qual é a tua situação atual?",
    subtitle: "Seleciona a opção que mais se aproxima do teu caso.",
    options: [
      { label: "Separação recente", icon: HeartCrack, value: "separacao_recente" },
      { label: "O(a) ex está com outra pessoa", icon: Frown, value: "com_outra_pessoa" },
      { label: "Sem contacto há semanas/meses", icon: PhoneOff, value: "sem_contacto" },
      { label: "Relação desgastada ou distante", icon: HeartOff, value: "relacao_desgastada" },
    ],
  },
  {
    question: "Há quanto tempo estão separados?",
    subtitle: "Quanto mais cedo agires, maior será a eficácia do trabalho.",
    options: [
      { label: "Menos de 1 semana", icon: Zap, value: "menos_1_semana" },
      { label: "1 a 4 semanas", icon: Calendar, value: "1_a_4_semanas" },
      { label: "1 a 6 meses", icon: CalendarDays, value: "1_a_6_meses" },
      { label: "Mais de 6 meses", icon: Hourglass, value: "mais_6_meses" },
    ],
  },
  {
    question: "Já tentaste algum método para reconquistá-lo(a)?",
    subtitle: "Isso ajuda-nos a entender o teu caso e a indicar o ritual certo.",
    options: [
      { label: "Não, é a primeira vez", icon: PlusCircle, value: "primeira_vez" },
      { label: "Sim, conversei e pedi outra chance", icon: MessageCircle, value: "conversei" },
      { label: "Sim, procurei outro guia espiritual", icon: Sparkles, value: "outro_guia" },
      { label: "Sim, várias tentativas sem resultado", icon: Frown, value: "varias_tentativas" },
    ],
  },
];

const resultMessages: Record<string, { title: string; message: string; urgency: string }> = {
  separacao_recente: {
    title: "Encontrámos um Padrão de Falha Energética.",
    message: "A energia entre vocês ainda existe, mas está a ser bloqueada por um nó invisível. O Protocolo Magnético reverte isto se agirmos rápido.",
    urgency: "🟢 Vaga confidencial disponível",
  },
  com_outra_pessoa: {
    title: "O Bloqueio Cármico é severo (Falsa Ligação).",
    message: "O teu amor está sob a influência densa de terceiros. O nosso Ritual de Corte de Nós Cármicos dissolve essa cortina e desfaz a cegueira espiritual dele(a).",
    urgency: "🔴 Ação espiritual urgente necessária",
  },
  sem_contacto: {
    title: "O Fio Vermelho ainda vos une.",
    message: "Mesmo sem contacto físico, a energia que vos marcou não apagou. A Inversão Magnética vai ativar gatilhos de saudade incontrolável nele(a) à distância.",
    urgency: "🟡 Frequência ainda ativa. Agir rápido",
  },
  relacao_desgastada: {
    title: "As polaridades estão completamente invertidas.",
    message: "A relação sofre de vampirismo energético. O Protocolo de Adoçamento Alfa varre essa negatividade, purifica a aura e reacende a química original da relação.",
    urgency: "🟢 Cenário ideal para inversão magnética",
  },
};

const QuizQualificacao = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedOption(value);

    setTimeout(() => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const result = resultMessages[answers[0]] || resultMessages.separacao_recente;

  const buildWhatsAppURL = () => {
    const situacaoMap: Record<string, string> = {
      separacao_recente: "Separação recente",
      com_outra_pessoa: "O(a) ex está com outra pessoa",
      sem_contacto: "Sem contacto há semanas/meses",
      relacao_desgastada: "Relação desgastada",
    };
    const tempoMap: Record<string, string> = {
      menos_1_semana: "menos de 1 semana",
      "1_a_4_semanas": "1 a 4 semanas",
      "1_a_6_meses": "1 a 6 meses",
      mais_6_meses: "mais de 6 meses",
    };
    const tentativaMap: Record<string, string> = {
      primeira_vez: "Primeira vez a procurar ajuda",
      conversei: "Já tentei conversar",
      outro_guia: "Já procurei outro guia",
      varias_tentativas: "Várias tentativas sem resultado",
    };

    const msg = encodeURIComponent(
      `Olá Guia Maria Helena! Fiz a análise no site e preciso da sua ajuda.\n\n` +
      `📌 Situação: ${situacaoMap[answers[0]] || answers[0]}\n` +
      `⏳ Tempo separados: ${tempoMap[answers[1]] || answers[1]}\n` +
      `🔄 Tentativas anteriores: ${tentativaMap[answers[2]] || answers[2]}\n\n` +
      `Pode analisar o meu caso, por favor?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  const progress = showResult ? 100 : ((currentStep) / steps.length) * 100;

  if (showResult) {
    return (
      <div className="border border-gold/30 rounded-lg bg-card p-6 md:p-8 text-center max-w-lg mx-auto">
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-border rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gold rounded-full transition-all duration-700" style={{ width: "100%" }} />
        </div>

        <div className="flex justify-center mb-4">
          <Flame className="w-12 h-12 text-gold animate-bounce" />
        </div>

        <h3 className="text-gold font-cinzel font-black text-xl mb-2">{result.title}</h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{result.message}</p>

        <span className="inline-block text-sm font-semibold mb-6 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
          {result.urgency}
        </span>

        <p className="text-foreground text-sm font-semibold mb-5">
          A Guia Maria Helena vai receber os detalhes do teu caso e responder-te pessoalmente.
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
          Receber Consulta Gratuita Agora
        </a>

        <button onClick={resetQuiz} className="mt-4 text-xs text-muted-foreground hover:text-foreground underline transition-colors">
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
      <h3 className="text-lg md:text-xl font-cinzel font-bold text-foreground mb-1">
        {step.question}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">{step.subtitle}</p>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {step.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded border transition-all duration-300 text-sm
              ${
                selectedOption === opt.value
                  ? "border-gold bg-gold/15 text-gold scale-[0.98]"
                  : "border-border bg-card/80 text-foreground hover:border-gold/40 hover:bg-gold/5"
              }
            `}
          >
            <opt.icon className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">{opt.label}</span>
            {selectedOption === opt.value && (
              <span className="ml-auto text-gold text-lg">✓</span>
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
