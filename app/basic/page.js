"use client";

import "../globals.css";
import Link from "next/link";

export default function BasicPage() {
  const sections = [
    {
      title: "Product Card (Traditional)",
      description:
        "This component loads all JavaScript upfront with the page. All interactive features are available immediately.",
      href: "/basic/product-card",
      icon: "🛍️",
    },
    {
      title: "Carousel (Traditional)",
      description:
        "This carousel loads all JavaScript immediately, even if not visible. All controls are available from the start.",
      href: "/basic/carousel",
      icon: "🖼️",
    },
    {
      title: "Contact Form (Traditional)",
      description:
        "This form loads all JavaScript upfront with the page. Form validation and submission logic is always available.",
      href: "/basic/contact-form",
      icon: "📝",
    },
  ];

  return (
    <main className="demo-content">
      <div className="overview-section">
        <h2>Traditional Approach Overview</h2>
        <p className="overview-description">
          Explore each traditional component individually to see how they work
          compared to the Islands approach. Each page demonstrates the
          conventional way of loading JavaScript - all at once, upfront.
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
