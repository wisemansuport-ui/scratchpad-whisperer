import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm animate-in slide-in-from-bottom">
      <p className="text-muted-foreground text-center sm:text-left">
        Utilizamos cookies e tecnologias similares para melhorar a tua experiência, personalizar publicidade e recomendar conteúdo de teu interesse. Ao continuar a navegar, concordas com a nossa{" "}
        <Link to="/politica-privacidade" className="text-gold underline hover:text-gold/80">
          Política de Privacidade
        </Link>.
      </p>
      <button
        onClick={handleAccept}
        className="whitespace-nowrap bg-gold text-background font-bold px-6 py-2 rounded-sm transition-colors hover:bg-gold/90"
      >
        Aceitar e Fechar
      </button>
    </div>
  );
};

export default CookieBanner;
