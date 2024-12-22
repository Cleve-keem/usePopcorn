import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Main from "./Components/Main";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "inception",
    Year: "2010",
    Poster:
      "https://th.bing.com/th/id/OIP.ULu3ytbiO_JdNVHqx4mqiQHaLH?rs=1&pid=ImgDetMain",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matix",
    Year: "1999",
    Poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcR5DoFtShSmClflZ0RzBj9JBMweU5IUVBCeEbbLeV2XPlCnTKNi&psig=AOvVaw0yJsotMJs3u2tlmswuOIap&ust=1734605253632000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCw7aySsYoDFQAAAAAdAAAAABAE",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQBeM99UrE8KJqgLw2TnRYKPsE-b2s1vv_FNiYt6CJDC6ZlnqLv&psig=AOvVaw0hGBdycT1z7UTRXQHb-Sig&ust=1734605394273000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDImuaSsYoDFQAAAAAdAAAAABAE",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "inception",
    Year: "2010",
    Poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FPosters-USA-Inception-Poster-GLOSSY%2Fdp%2FB01MRP0KEW&psig=AOvVaw1Ftq_kteRsyn2u4KsSkupu&ust=1734605133751000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDwmu-RsYoDFQAAAAAdAAAAABAE",
    runtime: 148,
    imdbRating: 8.8,
    UserRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back To The Future",
    Year: "!985",
    Poster:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBack_to_the_Future&psig=AOvVaw2Ou2vT15dDMRQWyvQqpTcL&ust=1734605816159000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjnuK-UsYoDFQAAAAAdAAAAABAE",
    runtime: 116,
    imdbRating: 8.5,
    UserRating: 9,
  },
];

function App() {
  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
