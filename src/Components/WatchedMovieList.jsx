import { useState } from "react";

export default function WatchedMovieList({ watched }) {

  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <div className="poster">
            <img src={movie.poster} alt="Movie Poster" />
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
  );
}
