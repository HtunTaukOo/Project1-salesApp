import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Dashboard
      </Link>
      <Link to="/journal" style={{ color: "white" }}>
        Sales Journal
      </Link>
    </nav>
  );
}
