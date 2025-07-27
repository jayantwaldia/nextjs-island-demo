"use client";

import { useState } from "react";

export default function CarouselPage() {
  const [showCarousel, setShowCarousel] = useState(true);

  const slides = [
    { id: 1, image: "../assets/slide1.jpg" },
    { id: 2, image: "../assets/slide2.jpg" },
    { id: 3, image: "../assets/slide3.jpg" },
  ];

  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Carousel (Traditional)</h2>
            <span className="traditional-badge">Traditional</span>
          </div>
          <p className="section-description">
            This carousel loads all JavaScript immediately, even if not visible.
            All carousel controls and functionality are available from the
            start.
          </p>
          <div className="component-demo">
            <button onClick={() => setShowCarousel(!showCarousel)}>
              {showCarousel ? "Hide" : "Show"} Carousel
            </button>
            {showCarousel && (
              <div className="carousel">
                {slides.map((slide) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    width={200}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>Carousel JavaScript loads immediately with page</li>
              <li>All controls and functionality available upfront</li>
              <li>No lazy loading or viewport detection</li>
              <li>May impact initial page load performance</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
