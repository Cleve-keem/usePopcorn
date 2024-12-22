// import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Main from "./Components/Main";

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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FPosters-USA-Inception-Poster-GLOSSY%2Fdp%2FB01MRP0KEW&psig=AOvVaw1Ftq_kteRsyn2u4KsSkupu&ust=1734605133751000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDwmu-RsYoDFQAAAAAdAAAAABAE",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    title: "Back To The Future",
    year: "!985",
    poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBack_to_the_Future&psig=AOvVaw2Ou2vT15dDMRQWyvQqpTcL&ust=1734605816159000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjnuK-UsYoDFQAAAAAdAAAAABAE",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function average(arr) {
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
}

function App() {
  return (
    <div className="app">
      <NavBar />
      <Main
        tempMovieData={tempMovieData}
        tempWatchedData={tempWatchedData}
        average={average}
      />
    </div>
  );
}

export default App;
