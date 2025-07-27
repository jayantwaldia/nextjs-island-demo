"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SearchSkeleton from "../../components/SearchSkeleton";

const SearchIsland = dynamic(() => import("../../components/SearchIsland"), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

export default function SearchPage() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Search Island</h2>
            <span className="island-badge">Island</span>
          </div>
          <p className="section-description">
            This search component loads its JavaScript only when activated. The
            search functionality demonstrates on-demand loading of interactive
            features.
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
              <li>Search button is always available (static HTML)</li>
              <li>JavaScript loads only when search is activated</li>
              <li>Uses dynamic imports with loading skeleton</li>
              <li>Demonstrates progressive enhancement</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
