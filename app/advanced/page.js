import Link from "next/link";

export default function AdvancedPage() {
  const sections = [
    {
      title: "Search Island",
      description:
        "This search component loads its JavaScript only when activated. Demonstrates on-demand loading of interactive features.",
      href: "/advanced/search",
      icon: "🔍",
    },
    {
      title: "Product Card Island",
      description:
        "This component loads its interactive JavaScript only when needed.",
      href: "/advanced/product-card",
      icon: "🛍️",
    },
    {
      title: "Lazy Carousel Island",
      description:
        "Scroll down to see this carousel load its interactive JavaScript when it enters the viewport.",
      href: "/advanced/carousel",
      icon: "🖼️",
    },
    {
      title: "Contact Form Island",
      description: "This form loads its submit functionality as an island.",
      href: "/advanced/contact-form",
      icon: "📝",
    },
  ];

  return (
    <main className="demo-content">
      <div className="overview-section">
        <h2>Advanced Islands Overview</h2>
        <p className="overview-description">
          Explore each island component individually to see how they work in
          isolation. Each page demonstrates a different aspect of React Islands
          architecture.
        </p>

        <div className="sections-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-card">
              <div className="section-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <Link href={section.href} className="section-link">
                View Demo →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
