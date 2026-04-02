import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-5">
      <div className="max-w-[800px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-6">Política de Privacidade</h1>
        
        <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed">
          <p>
            A tua privacidade é fundamental para nós. Esta política descreve as informações que recolhemos sobre ti, como são utilizadas, e as opções que tens relativamente aos teus dados.
          </p>

          <h2 className="text-xl font-cinzel text-foreground mt-8">1. Recolha de Informações</h2>
          <p>
            Recolhemos dados estatísticos de navegação e informações de interação com os nossos anúncios e site (através de cookies e do Pixel do Facebook) para melhorar a qualidade dos nossos serviços. 
          </p>

          <h2 className="text-xl font-cinzel text-foreground mt-8">2. Utilização das Informações</h2>
          <p>
            As informações recolhidas são usadas exclusivamente para personalizar a tua experiência e para fins de marketing e re-marketing de forma anónima nas plataformas de anúncios (Meta Platforms, Inc). Nenhuma informação pessoal identificável é vendida a terceiros.
          </p>

          <h2 className="text-xl font-cinzel text-foreground mt-8">3. Sigilo Espiritual</h2>
          <p>
            Qualquer informação trocada no WhatsApp durante a consulta é estritamente confidencial, protegida pelo sigilo espiritual e jamais será divulgada.
          </p>

          <h2 className="text-xl font-cinzel text-foreground mt-8">4. Consentimento</h2>
          <p>
            Ao utilizar o nosso site, consentes com a nossa política de privacidade. O botão de contato via WhatsApp é uma ação voluntária e os termos de serviço da aplicação WhatsApp aplicam-se à comunicação efetuada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
