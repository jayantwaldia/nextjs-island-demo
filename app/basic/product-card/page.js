"use client";

import { useState } from "react";

export default function ProductCardPage() {
  const [liked, setLiked] = useState(false);

  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Product Card (Traditional)</h2>
            <span className="traditional-badge">Traditional</span>
          </div>
          <p className="section-description">
            This component loads all JavaScript upfront with the page. All
            interactive features are available immediately when the page loads.
          </p>
          <div className="component-demo">
            <div className="product-card">
              <h3>Sample Product</h3>
              <p>$99.99</p>
              <img src="/product.jpg" alt="Sample product" width={300} />
              <button onClick={() => setLiked(!liked)}>
                {liked ? "❤️" : "🤍"} Like
              </button>
            </div>
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>All JavaScript loads immediately with the page</li>
              <li>Interactive features available from the start</li>
              <li>No lazy loading or progressive enhancement</li>
              <li>Larger initial bundle size</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
