import { useState, useEffect, useCallback } from "react";
import { Flame, Heart, Sparkles, ScrollText, Gem } from "lucide-react";
import ritual1 from "@/assets/ritual-1.jpg";
import ritual2 from "@/assets/ritual-2.jpg";
import ritual3 from "@/assets/ritual-3.jpg";
import ritual4 from "@/assets/ritual-4.png";
import ritual5 from "@/assets/ritual-5.png";

const slides = [
  {
    src: ritual1,
    title: "Ritual de Amarração de Alta Força",
    desc: "Velas sagradas e oferendas firmadas no altar para reconectar os caminhos amorosos.",
    icon: Flame,
  },
  {
    src: ritual2,
    title: "Altar de Adoçamento Amoroso",
    desc: "Trabalho com ervas sagradas e entidades de alta luz para suavizar o coração endurecido.",
    icon: Heart,
  },
  {
    src: ritual3,
    title: "Oferenda Espiritual de Reconquista",
    desc: "Ritual ancestral com velas vermelhas e flores para invocar o amor verdadeiro.",
    icon: Sparkles,
  },
  {
    src: ritual4,
    title: "Leitura de Cartas Espirituais",
    desc: "Consulta divinatória para revelar os bloqueios e o caminho do teu amor.",
    icon: ScrollText,
  },
  {
    src: ritual5,
    title: "Cristais de Cura Energética",
    desc: "Quartzo rosa e ametista alinhados para purificar e reacender a conexão amorosa.",
    icon: Gem,
  },
];

const RitualCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative w-full max-w-[500px] mx-auto mb-8 overflow-hidden rounded">
      {/* Image area */}
      <div className="aspect-[3/4] relative">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded pointer-events-none" />

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
          <div className="flex items-center gap-2 mb-2">
            <slide.icon className="w-5 h-5 text-gold flex-shrink-0" />
            <h3 className="font-cinzel font-bold text-base md:text-lg text-gold drop-shadow-lg leading-tight">
              {slide.title}
            </h3>
          </div>
          <p className="text-white/80 text-sm leading-snug drop-shadow-md">
            {slide.desc}
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-gold w-9 h-9 rounded-full flex items-center justify-center transition-colors text-lg backdrop-blur-sm"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-gold w-9 h-9 rounded-full flex items-center justify-center transition-colors text-lg backdrop-blur-sm"
        aria-label="Próxima"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-6" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RitualCarousel;
