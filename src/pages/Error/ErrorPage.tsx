import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1>Oops!</h1>
        <p>Something went wrong.</p>

        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
}
