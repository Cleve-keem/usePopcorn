export default function MovieLength({movies}) {
  return (
    <p>
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}
