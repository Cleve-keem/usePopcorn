import { useEffect, useState } from "react";
import StarRating from "./StarRating";

export default function MovieDetails({ selectedID, onClose, Apikey }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actor: actor,
    Director: director,
    Genre: genre,
  } = movieDetails;

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${Apikey}&i=${selectedID}`
          );

          const data = await res.json();
          setMovieDetails(data);
          setIsLoading(false);
          //   console.log(data);
        } catch (err) {
          console.log(err.message);
        }
      }
      getMovieDetails();
    },
    [selectedID]
  );

  function Loading() {
    return <div className="loading" style={{textAlign: "center", marginTop: "2rem"}}>Loading...</div>;
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="header">
            <button className="btn-close" onClick={onClose}>
              &larr;
            </button>
            <div className="details-poster">
              <img src={poster} alt="Poster" />
            </div>
            <div className="details-overview">
              <h2 className="title">{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <StarRating maxRating={10} size={24} />
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actor}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
