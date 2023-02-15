import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <ul className="navbarlist">
        <li className="navbaritems">
          <Link
            // className="hover:border-b-4 border-pink-600 duration-100"
            to="about"
            smooth={true}
            duration={500}
          >
            ABOUT
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
            SKILLS
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            // className="hover:border-b-4 border-pink-600 duration-100"
            to="projects"
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            className="hover:border-b-4 border-pink-600 duration-100"
            to="contact"
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
}
