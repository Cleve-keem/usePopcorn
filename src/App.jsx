import { useState } from "react";
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

const tempMovieData = [
  {
    imdbID: "tt1375666",
    title: "inception",
    year: "2010",
    poster:
      "https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain",
  },
  {
    imdbID: "tt0133093",
    title: "The Matix",
    year: "1999",
    poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcR5DoFtShSmClflZ0RzBj9JBMweU5IUVBCeEbbLeV2XPlCnTKNi&psig=AOvVaw0yJsotMJs3u2tlmswuOIap&ust=1734605253632000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCw7aySsYoDFQAAAAAdAAAAABAE",
  },
  {
    imdbID: "tt6751668",
    title: "Parasite",
    year: "2019",
    poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQBeM99UrE8KJqgLw2TnRYKPsE-b2s1vv_FNiYt6CJDC6ZlnqLv&psig=AOvVaw0hGBdycT1z7UTRXQHb-Sig&ust=1734605394273000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDImuaSsYoDFQAAAAAdAAAAABAE",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    title: "inception",
    year: "2010",
    poster:
      "https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    title: "Back To The Future",
    year: "1985",
    poster:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiAUI52_-niASQabl_PqdkJQ-moVziM6ahfiYkZW9NSnhcciNw",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function average(arr) {
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
}

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="app">
      <NavBar>
        <Logo />
        <Search />
        <MovieLength movies={movies} />
      </NavBar>

      <Main>
        {/* explicit props */}
        <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} average={average} />
              <WatchedMovieList watched={watched} />
            </>
          }
        />

        {/* <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} average={average} />
          <WatchedMovieList watched={watched} />
        </Box> */}
      </Main>
    </div>
  );
}

export default App;
