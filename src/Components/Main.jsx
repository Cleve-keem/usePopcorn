export default function Main() {
  return (
    <main className="main">
      <div className="box">
        <button>-</button>
        <ul className="list_of_movies">
          <li className="movie">
            <div className="poster">
              <img src="https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain"alt="Movie Poster" />
            </div>
            <div className="desc">
              <h4 className="name">Title</h4>
              <p>
                <span>📅</span>
                <span>2010</span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="box">
        <button>-</button>
        <ul>
          <li>
            <div className="poster">
              <img src="" alt="Movie Poster" />
            </div>
            <div className="desc">
              <h4 className="name">Title</h4>
              <p>
                <span>📅</span>
                <span>2013</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
