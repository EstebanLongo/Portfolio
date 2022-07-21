import React from "react";
import { Link } from "react-scroll";
import "./navBar.css";

export default function NavBar() {
  return (
    <>
      <ul className="navbarlist">
        <li className="navbaritems">
          <Link
            className="hover:border-b-4 border-pink-600 duration-100"
            to="about"
            smooth={true}
            duration={500}
          >
            SOBRE MI
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            className="hover:border-b-4 border-pink-600 duration-100"
            to="skills"
            smooth={true}
            duration={500}
          >
            SKILLS
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            className="hover:border-b-4 border-pink-600 duration-100"
            to="projects"
            smooth={true}
            duration={500}
          >
            PROYECTOS
          </Link>
        </li>

        <li className="navbaritems">
          <Link
            className="hover:border-b-4 border-pink-600 duration-100"
            to="contact"
            smooth={true}
            duration={500}
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </>
  );
}
