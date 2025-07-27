import LazyCarousel from "../../components/LazyCarousel";

export default function CarouselPage() {
  const slides = [
    { id: 1, image: "/slide1.jpg" },
    { id: 2, image: "/slide2.jpg" },
    { id: 3, image: "/slide3.jpg" },
  ];

  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Lazy Carousel Island</h2>
            <span className="island-badge">Island</span>
          </div>
          <p className="section-description">
            Scroll down to see this carousel load its interactive JavaScript
            when it enters the viewport. This demonstrates lazy loading of
            complex interactive components.
          </p>
          <div className="component-demo">
            <LazyCarousel slides={slides} />
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>Renders as static image initially</li>
              <li>JavaScript bundle loads when scrolled into view</li>
              <li>Carousel controls become interactive after hydration</li>
              <li>Reduces initial page load time significantly</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
