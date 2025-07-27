"use client";

import { useState } from "react";
import SearchSkeleton from "../../components/SearchSkeleton";

// Traditional approach: Import search component directly
import SearchIsland from "../../components/SearchIsland";

export default function SearchPage() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Search (Traditional)</h2>
            <span className="traditional-badge">Traditional</span>
          </div>
          <p className="section-description">
            This search component loads all JavaScript upfront with the page.
            The search functionality is available immediately, even if not used.
          </p>
          <div className="component-demo">
            <header className="nav-header">
              <nav>
                <button onClick={() => setShowSearch(true)}>🔍 Search</button>
              </nav>
            </header>

            {showSearch && (
              <div className="search-section">
                <SearchIsland />
              </div>
            )}
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>Search component is imported and bundled with the page</li>
              <li>All JavaScript loads immediately when page loads</li>
              <li>Search functionality is always available</li>
              <li>Larger initial bundle size</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
