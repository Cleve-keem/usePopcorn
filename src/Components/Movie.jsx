export default function Movie({ movie, onSelected }) {
  return (
    <li className="movie" onClick={()=>{onSelected(movie.imdbID)}}>
      <div className="poster">
        <img src={movie.Poster} alt="Movie Poster" />
      </div>
      <div className="desc">
        <h4 className="name">{movie.Title}</h4>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
