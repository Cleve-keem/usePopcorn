import { useState } from "react";

export default function NavBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="navbar">
      <div className="logo">
        <span className="icon">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Found 10 results</p>
    </div>
  );
}
