export default function Movie({movie}) {
  return (
    <li className="movie">
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
  );
}
