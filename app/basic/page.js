"use client";

import "../globals.css";
import Link from "next/link";

import { useState } from "react";

export default function BasicPage() {
  const [showSearch, setShowSearch] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);

  const slides = [
    { id: 1, image: "../assets/slide1.jpg" },
    { id: 2, image: "../assets/slide2.jpg" },
    { id: 3, image: "../assets/slide3.jpg" },
  ];

  return (
    <div className="basic-page">
      <header className="demo-header">
        <h1>Next.js Islands Demo - Basic</h1>
        <p className="demo-description">
          This page demonstrates the traditional approach where all JavaScript
          loads upfront.
        </p>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            ← Back to Home
          </Link>
          <Link href="/advanced" className="nav-link">
            View Advanced Demo →
          </Link>
        </div>
      </header>

      <div className="demo-wrapper">
        <header className="nav-header">
          <nav>
            <button onClick={() => setShowSearch(!showSearch)}>
              🔍 Search
            </button>
          </nav>
        </header>

        {showSearch && (
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button>Go</button>
          </div>
        )}
      </div>

      <main className="demo-content">
        <div className="demo-wrapper">
          <section className="demo-section">
            <div className="section-header">
              <h2>Product Card (Traditional)</h2>
              <span className="traditional-badge">Traditional</span>
            </div>
            <p className="section-description">
              This component loads all JavaScript upfront with the page.
            </p>
            <div className="product-card">
              <h3>Sample Product</h3>
              <p>$99.99</p>
              <img src="/product.jpg" alt="Sample product" width={300} />
              <button onClick={() => setLiked(!liked)}>
                {liked ? "❤️" : "🤍"} Like
              </button>
            </div>
          </section>
        </div>
        <div className="demo-wrapper">
          <section className="demo-section">
            <div className="section-header">
              <h2>Carousel (Traditional)</h2>
              <span className="traditional-badge">Traditional</span>
            </div>
            <p className="section-description">
              This carousel loads all JavaScript immediately, even if not
              visible.
            </p>
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
          </section>
        </div>
        <div className="demo-wrapper">
          <section className="demo-section">
            <div className="section-header">
              <h2>Contact Form (Traditional)</h2>
              <span className="traditional-badge">Traditional</span>
            </div>
            <p className="section-description">
              This form loads all JavaScript upfront with the page.
            </p>
            <form action="/api/contact" method="POST">
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
              />
              <textarea name="message" required placeholder="Your message" />
              <button type="submit">Send Message</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
