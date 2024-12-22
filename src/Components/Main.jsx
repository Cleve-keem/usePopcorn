import { useState } from "react";
import Button from "./Button";

export default function Main({ tempWatchedData, tempMovieData, average }) {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  const avgUserRating = average(watched.map((movie) => movie.userRating));

  console.log(avgImdbRating);
  console.log(avgUserRating);
  console.log(avgRuntime);

  function handleToggle1() {
    setIsOpen1((prevState) => !prevState);
  }

  function handleToggle2() {
    setIsOpen2((prevState) => !prevState);
  }

  return (
    <main className="main">
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

      <div className="box">
        <Button onClick={handleToggle2}>{isOpen2 ? "-" : "+"}</Button>
        {isOpen2 && (
          <>
            <div className="summary">
              <h2>Movies you watched</h2>
              <div>
                <p>
                  <span>#️⃣</span>
                  <span>{watched.length} Movies</span>
                </p>
                <p>
                  <span>⭐</span>
                  <span>{avgImdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{avgUserRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{avgRuntime} mins</span>
                </p>
              </div>
            </div>

            <ul className="list">
              {watched.map((movie) => (
                <li>
                  <div className="poster">
                    <img
                      src={movie.poster}
                      alt="Movie Poster"
                    />
                  </div>
                  <div className="desc">
                    <h4 className="name">{movie.title}</h4>
                    <div className="ratings">
                      <p>
                        <span>⭐</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>⭐</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} mins</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
