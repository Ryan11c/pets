import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Pet Wars</h2>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Vote
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
  },
  logo: {
    color: "#61dafb",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
