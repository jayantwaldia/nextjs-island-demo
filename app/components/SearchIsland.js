"use client";
import { useState } from "react";

export default function SearchIsland() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}
