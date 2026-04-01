import WhatsAppButton from "./WhatsAppButton";
import RitualCarousel from "./RitualCarousel";

const ActionArea = () => (
  <div className="text-center bg-[radial-gradient(circle,hsl(280_30%_5%)_0%,hsl(var(--background))_100%)] p-10 border border-border rounded">
    <p className="text-xl md:text-2xl font-cinzel mb-8 text-foreground">
      É hora de trazer o teu amor de volta para as tuas mãos.{" "}
      <span className="text-gold">Sem sofrimento. Sem humilhações.</span>
    </p>

    <RitualCarousel />

    <WhatsAppButton />

    <div className="mt-6 text-xs text-muted-foreground flex justify-center gap-5 flex-wrap">
      <span className="flex items-center gap-1.5">🔒 Conversa 100% Confidencial</span>
      <span className="flex items-center gap-1.5">💬 Atendimento Humanizado</span>
    </div>
  </div>
);

export default ActionArea;
