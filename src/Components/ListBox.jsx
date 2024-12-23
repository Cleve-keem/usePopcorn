import { useState } from "react";
import Button from "./Button";

export default function ListBox({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);

  function handleToggle1() {
    setIsOpen1((prevState) => !prevState);
  }

  return (
    <div className="box">
      <Button onClick={handleToggle1}>{isOpen1 ? "-" : "+"}</Button>
      {isOpen1 && (
        <ul className="rating">
          {movies.map((movie) => (
            <li className="movie" key={movie.imdbID}>
              <div className="poster">
                <img src={movie.poster} alt="Movie Poster" />
              </div>
              <div className="desc">
                <h4 className="name">{movie.title}</h4>
                <p>
                  <span>📅</span>
                  <span>{movie.year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
