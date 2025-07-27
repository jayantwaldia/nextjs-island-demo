import ProductCard from "../components/ProductCard";
import LazyCarousel from "../components/LazyCarousel";
import ContactForm from "../components/ContactForm";
import SearchContainer from "../components/SearchContainer";
import Link from "next/link";
import "../globals.css";

export default function AdvancedPage() {
  const slides = [
    { id: 1, image: "/slide1.jpg" },
    { id: 2, image: "/slide2.jpg" },
    { id: 3, image: "/slide3.jpg" },
  ];

  return (
    <div className="advanced-page">
      <header className="demo-header">
        <h1>Next.js Islands Demo - Advanced</h1>
        <p className="demo-description">
          This page demonstrates progressive loading with React Islands.
          Components load JavaScript only when they come into view.
        </p>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            ← Back to Home
          </Link>
          <Link href="/basic" className="nav-link">
            View Basic Demo →
          </Link>
        </div>
      </header>

      <SearchContainer />

      <main className="demo-content">
        <div className="demo-wrapper">
          <section className="demo-section">
            <div className="section-header">
              <h2>Product Card Island</h2>
              <span className="island-badge">Island</span>
            </div>
            <p className="section-description">
              This component loads its interactive JavaScript only when needed.
            </p>
            <ProductCard />
          </section>
        </div>

        <div className="demo-wrapper">
          <section className="demo-section">
            <div className="section-header">
              <h2>Lazy Carousel Island</h2>
              <span className="island-badge">Island</span>
            </div>
            <p className="section-description">
              Scroll down to see this carousel load its interactive JavaScript
              when it enters the viewport.
            </p>
            <LazyCarousel slides={slides} />
          </section>
        </div>

        <div className="demo-wrapper">
          <section className="demo-section">
            <div className="section-header">
              <h2>Contact Form Island</h2>
              <span className="island-badge">Island</span>
            </div>
            <p className="section-description">
              This form loads its submit functionality as an island.
            </p>
            <ContactForm />
          </section>
        </div>
      </main>
    </div>
  );
}
