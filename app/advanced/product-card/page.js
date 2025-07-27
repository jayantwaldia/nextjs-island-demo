import ProductCard from "../../components/ProductCard";

export default function ProductCardPage() {
  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Product Card Island</h2>
            <span className="island-badge">Island</span>
          </div>
          <p className="section-description">
            This component loads its interactive JavaScript only when needed.
            The product card demonstrates how islands can handle user
            interactions like adding items to cart, favoriting, and viewing
            details.
          </p>
          <div className="component-demo">
            <ProductCard />
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>Initially renders as static HTML</li>
              <li>JavaScript loads when the component enters viewport</li>
              <li>Interactive features become available after hydration</li>
              <li>Maintains performance by loading only when needed</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
