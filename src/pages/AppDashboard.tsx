import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  Lock, 
  MessageCircle, 
  Headphones, 
  AlertTriangle, 
  Bell, 
  User, 
  Home,
  Menu,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const AppDashboard = () => {
  const [shieldActive, setShieldActive] = useState(true);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-0 md:p-6 font-sans">
      {/* Moldura que simula o ecrã do telemóvel num desktop, e ocupa 100% num mobile real */}
      <div className="w-full max-w-[400px] h-[100dvh] md:h-[800px] bg-[#0c0c0e] relative overflow-y-auto overflow-x-hidden md:rounded-3xl md:border-[6px] border-neutral-900 shadow-2xl flex flex-col">
        
        {/* APP HEADER */}
        <header className="sticky top-0 z-50 bg-[#0c0c0e]/80 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold to-yellow-600 p-0.5">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gold" />
              </div>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Portal VIP</p>
              <h1 className="text-white text-sm font-bold">Guardião Magnético</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-white/80" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse border border-black"></span>
            </div>
            <Menu className="w-5 h-5 text-white/80" />
          </div>
        </header>

        {/* MAIN SCROLLABLE CONTENT */}
        <main className="flex-1 p-5 pb-24 space-y-6">
          
          {/* URGENT ALERT */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex gap-4 animate-in slide-in-from-top-4 duration-500">
            <div className="mt-0.5">
              <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            <div>
              <h3 className="text-red-500 font-bold text-sm mb-1">Aviso Cártico: 12h45</h3>
              <p className="text-red-200/80 text-xs leading-relaxed">
                Interferência externa mínima detectada à volta da energia de <strong>Ricardo</strong>. O escudo protegeu, mas a ligação caiu 5%.
              </p>
              <button className="mt-3 text-xs bg-red-500 text-white font-bold py-1.5 px-4 rounded-full uppercase tracking-wider hover:bg-red-600 transition">
                Reforçar Imediatamente
              </button>
            </div>
          </div>

          {/* RADAR DE LIGAÇÃO */}
          <section className="bg-card/40 border border-white/5 rounded-3xl p-6 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity className="w-24 h-24" />
            </div>
            <h2 className="text-xs uppercase tracking-[3px] text-white/50 font-black mb-6">Radar Magnético</h2>
            
            {/* Círculo do Radar (Simulado) */}
            <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-gold/40 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-4 rounded-full border border-gold/10" />
              
              {/* Core */}
              <div className="z-10 flex flex-col items-center justify-center w-28 h-28 bg-gradient-to-br from-black to-neutral-900 rounded-full border border-gold/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                <span className="text-3xl font-black text-white font-cinzel tracking-tighter">85%</span>
                <span className="text-[9px] text-gold uppercase tracking-wider font-bold mt-1">Conexão</span>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-white/70">A energia de repulsa contra terceiros está <strong className="text-green-400">Ativa</strong>.</p>
          </section>

          {/* AÇÕES DIÁRIAS (GAMIFICATION) */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setShieldActive(!shieldActive)}
              className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all duration-500 ${shieldActive ? 'bg-gold/10 border-gold/40 shadow-[0_0_20px_rgba(234,179,8,0.15)]' : 'bg-card/40 border-white/5'}`}
            >
              <ShieldCheck className={`w-8 h-8 ${shieldActive ? 'text-gold' : 'text-white/30'}`} />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Blindagem <br/><span className={shieldActive ? 'text-gold' : 'text-white/40'}>{shieldActive ? 'Ativada' : 'Pausada'}</span>
              </span>
            </button>

            <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/40 border border-white/5 hover:bg-white/5 transition-all">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Fazer <br/><span className="text-blue-400">Despacho</span>
              </span>
            </button>
          </div>

          {/* ARSENAL VIP */}
          <section>
            <h2 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 ml-1">Arsenal Exclusivo</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-card/40 border border-white/5 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Chat Confidencial</h4>
                    <p className="text-xs text-white/50">Fila Prioritária VIP</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-white/30" />
              </div>

              <div className="flex items-center justify-between p-4 bg-card/40 border border-white/5 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Inception Subconsciente</h4>
                    <p className="text-xs text-white/50">Áudios para escutar a dormir</p>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-purple-400/50" />
              </div>
            </div>
          </section>

        </main>

        {/* BOTTOM TAB BAR */}
        <nav className="absolute bottom-0 w-full bg-[#0c0c0e]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex items-center justify-between pb-8 md:pb-4 z-50">
          <button className="flex flex-col items-center gap-1.5 opacity-100">
            <Home className="w-5 h-5 text-gold" />
            <span className="text-[10px] text-gold font-bold">Radar</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition">
            <Activity className="w-5 h-5 text-white" />
            <span className="text-[10px] text-white">Alertas</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-[10px] text-white">Guia</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition">
            <User className="w-5 h-5 text-white" />
            <span className="text-[10px] text-white">Perfil</span>
          </button>
        </nav>

      </div>
    </div>
  );
};

export default AppDashboard;
