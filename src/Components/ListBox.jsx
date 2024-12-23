import { useState } from "react";
import Button from "./Button";
import MovieList from "./MovieList";

export default function ListBox({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);

  function handleToggle1() {
    setIsOpen1((prevState) => !prevState);
  }

  return (
    <div className="box">
      <Button onClick={handleToggle1}>{isOpen1 ? "-" : "+"}</Button>
      {isOpen1 && (
        <MovieList movies={movies}/>
      )}
    </div>
  );
}
