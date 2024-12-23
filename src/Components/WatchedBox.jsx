import { useState } from "react";
import Button from "./Button";
import WatchedSummary from "./WatchedSumarry";
import WatchedMovieList from "./WatchedMovieList";

export default function WatchedBox({ tempWatchedData, average }) {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  function handleToggle2() {
    setIsOpen2((prevState) => !prevState);
  }

  return (
    <div className="box">
      <Button onClick={handleToggle2}>{isOpen2 ? "-" : "+"}</Button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} average={average} />
          <WatchedMovieList watched={watched}/>
        </>
      )}
    </div>
  );
}
