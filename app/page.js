import Link from "next/link";
import "../app/globals.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="demo-header">
        <h1>Next.js Islands Architecture Demo</h1>
        <p className="demo-description">
          This demo showcases the difference between traditional React
          applications and Next.js Islands architecture for progressive loading.
        </p>
      </header>

      <main className="demo-content">
        <div className="comparison-grid">
          <div className="comparison-card">
            <div className="card-header">
              <h2>Traditional Approach</h2>
              <span className="traditional-badge">Basic</span>
            </div>
            <p>
              All JavaScript loads upfront with the page, even for components
              that aren't immediately visible or needed.
            </p>
            <ul>
              <li>✅ Full interactivity immediately</li>
              <li>❌ Larger initial bundle</li>
              <li>❌ Slower initial load</li>
              <li>❌ Unused JavaScript</li>
            </ul>
            <Link href="/basic" className="demo-link">
              View Basic Demo →
            </Link>
          </div>

          <div className="comparison-card">
            <div className="card-header">
              <h2>Islands Architecture</h2>
              <span className="island-badge">Advanced</span>
            </div>
            <p>
              JavaScript loads progressively as components come into view or
              when user interaction is needed.
            </p>
            <ul>
              <li>✅ Faster initial load</li>
              <li>✅ Smaller initial bundle</li>
              <li>✅ Progressive enhancement</li>
              <li>✅ Better performance</li>
            </ul>
            <Link href="/advanced" className="demo-link">
              View Advanced Demo →
            </Link>
          </div>
        </div>

        <div className="features-section">
          <h2>Key Features Demonstrated</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🔍 Search Island</h3>
              <p>Loads JavaScript only when the search is activated</p>
            </div>
            <div className="feature">
              <h3>🖼️ Lazy Carousel</h3>
              <p>Loads interactive JavaScript when scrolled into viewport</p>
            </div>
            <div className="feature">
              <h3>💝 Like Button</h3>
              <p>Isolated interactive component with minimal JavaScript</p>
            </div>
            <div className="feature">
              <h3>📝 Contact Form</h3>
              <p>Form submission handled as an island component</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
