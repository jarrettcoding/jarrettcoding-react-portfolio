import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <span>JarrettCoding</span>
        </Link>
      </div>

      <div>
        <Link to="/aboutme">
          <span>About Me</span>
        </Link>
        <Link to="/contactme">
          <span>Contact Me</span>
        </Link>
        <Link to="/projects">
          <span>More Projects</span>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
