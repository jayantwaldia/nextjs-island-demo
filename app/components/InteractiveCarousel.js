"use client";
import { useState, useEffect } from "react";

export default function InteractiveCarousel({ slides, onLoad }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return (
    <div className="interactive-carousel">
      <img
        src={slides[selected].image}
        alt={`Slide ${selected + 1}`}
        width={300}
        className="carousel-main-image"
      />
      <div className="carousel-controls">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setSelected(i)}
            className={`carousel-button ${selected === i ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
