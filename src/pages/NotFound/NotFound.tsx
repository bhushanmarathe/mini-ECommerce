import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem" }}>404</h1>
        <p>Page not found.</p>

        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}
