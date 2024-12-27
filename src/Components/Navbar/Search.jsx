import { useState } from "react";

export default function Search({search, setSearch}) {
  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Search Movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
