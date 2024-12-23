import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({ children }) {     //  movies, tempWatchedData, average
  return (
    <main className="main">
      {children}
    </main>
  );
}
