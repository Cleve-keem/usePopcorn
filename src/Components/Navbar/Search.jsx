import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

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
