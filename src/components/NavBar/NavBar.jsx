import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbarlist">
        <li className="navbaritems">
          <Link className="linknavbar" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            // className="hover:border-b-4 border-pink-600 duration-100"
            className="linknavbar"
            to="skills"
            smooth={true}
            duration={500}
          >
            Tech Stack
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            // className="hover:border-b-4 border-pink-600 duration-100"
            className="linknavbar"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            className="linknavbar"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
