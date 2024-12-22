import { useState } from "react";
import Button from "./Button";

export default function Main({ tempWatchedData, tempMovieData, average }) {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movies) => movies.imdbRating));
  const avgRuntime = average(watched.map((movies) => movies.runtime));
  const avgUserRating = average(watched.map((movies) => movies.userRating));

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
            <li className="movie">
              <div className="poster">
                <img
                  src="https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain"
                  alt="Movie Poster"
                />
              </div>
              <div className="desc">
                <h4 className="name">Title</h4>
                <p>
                  <span>📅</span>
                  <span>2010</span>
                </p>
              </div>
            </li>

            <li className="movie">
              <div className="poster">
                <img
                  src="https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain"
                  alt="Movie Poster"
                />
              </div>
              <div className="desc">
                <h4 className="name">Title</h4>
                <p>
                  <span>📅</span>
                  <span>2014</span>
                </p>
              </div>
            </li>
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
                  <span>2 Movies</span>
                </p>
                <p>
                  <span>⭐</span>
                  <span>10</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>8</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>132 min</span>
                </p>
              </div>
            </div>

            <ul className="list">
              <li>
                <div className="poster">
                  <img
                    src="https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain"
                    alt="Movie Poster"
                  />
                </div>
                <div className="desc">
                  <h4 className="name">Title</h4>
                  <div className="ratings">
                    <p>
                      <span>⭐</span>
                      <span>imdb rating</span>
                    </p>
                    <p>
                      <span>⭐</span>
                      <span>user rating</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>runtime</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
