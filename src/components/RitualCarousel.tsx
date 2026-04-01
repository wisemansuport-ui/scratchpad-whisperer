import { useState, useEffect, useCallback } from "react";
import ritual1 from "@/assets/ritual-1.jpg";
import ritual2 from "@/assets/ritual-2.jpg";
import ritual3 from "@/assets/ritual-3.jpg";

const images = [ritual1, ritual2, ritual3];

const RitualCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full max-w-[500px] mx-auto mb-8 overflow-hidden rounded">
      <div className="aspect-[3/4] relative">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Ritual espiritual ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-gold w-9 h-9 rounded-full flex items-center justify-center transition-colors text-lg"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-gold w-9 h-9 rounded-full flex items-center justify-center transition-colors text-lg"
        aria-label="Próxima"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-gold w-5" : "bg-foreground/40"
            }`}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RitualCarousel;
