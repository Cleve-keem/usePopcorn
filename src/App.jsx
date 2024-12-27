import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Main from "./Components/Main";
import Logo from "./Components/Navbar/Logo";
import Search from "./Components/Navbar/Search";
// import WatchedBox from "./Components/WatchedBox";
import MovieLength from "./Components/Navbar/MovieLength";
import Box from "./Components/Box";
import MovieList from "./Components/MovieList";
import WatchedSummary from "./Components/WatchedSumarry";
import WatchedMovieList from "./Components/WatchedMovieList";
import SelectedMovie from "./Components/SelectedMovie";


const loadingStyle = {
  textAlign: "center",
  marginTop: "20px",
};

function average(arr) {
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
}

const KEY = "7023817c";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`
          );

          if (!res.ok)
            throw new Error("Something went wrong when fetching movies!");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error(data.Error || "Movie not found");

          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          // console.log("error", err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }

        if (search.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
      }
      fetchMovies();
    },
    [search]
  );

  function Error({ errorMessage }) {
    return (
      <div className="error">
        <span>⛔</span>
        {errorMessage}
      </div>
    );
  }

  function Loading() {
    return (
      <div className="loading" style={loadingStyle}>
        Loading...
      </div>
    );
  }

  function selectedMovie(id) {
    setSelectedID((prev) => (id === prev ? null : id));
  }

  return (
    <div className="app">
      <NavBar>
        <Logo />
        <Search search={search} setSearch={setSearch} />
        <MovieLength movies={movies} />
      </NavBar>

      <Main>
        {/* explicit props */}
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} average={average} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}

        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelected={selectedMovie} />
          )}
          {error && <Error errorMessage={error} />}
        </Box>

        <Box>
          {selectedID ? (
            <SelectedMovie selectedID={selectedID}/>
          ) : (
            <>
              <WatchedSummary watched={watched} average={average} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
