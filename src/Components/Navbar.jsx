import { useState } from "react";

export default function NavBar() {
  const [search, setSearch] = useState("");
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="icon">🍿</span>
        <h2>usePopcorn</h2>
      </div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Found 10 results</p>
    </nav>
  );
}
