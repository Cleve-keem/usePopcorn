import Movie from "./Movie";

export default function MovieList({ movies }) {
  return (
    <ul className="rating">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
