"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SearchSkeleton from "./SearchSkeleton";

const SearchIsland = dynamic(() => import("./SearchIsland"), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

export default function SearchContainer() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="search-islands">
      <header className="nav-header">
        <nav>
          <button onClick={() => setShowSearch(true)}>🔍 Search</button>
        </nav>
      </header>

      {showSearch && (
        <div className="search-section">
          <div className="section-header">
            <h2>Search Island</h2>
            <span className="island-badge">Island</span>
          </div>
          <p className="section-description">
            This search component loads its JavaScript only when activated.
          </p>
          <SearchIsland />
        </div>
      )}
    </div>
  );
}
