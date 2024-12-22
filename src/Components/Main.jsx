export default function Main() {
  return (
    <main className="main">
      <div className="box">
        <button>
            <span>-</span>
        </button>
        <ul>
          <li>
            <div className="movie">
              <div className="poster">
                <img src="" alt="Movie Poster" />
              </div>
              <div className="desc">
                <h3 className="name">Title</h3>
                <p>Year</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="box">
        <button>-</button>
        <ul>
          <li>
            <div className="movie">
              <div className="poster">
                <img src="" alt="Movie Poster" />
              </div>
              <div className="desc">
                <h3 className="name">Title</h3>
                <p>Year</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
