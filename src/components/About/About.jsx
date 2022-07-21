import React from "react";
import { Link } from "react-scroll";
import "./about.css";

export default function About() {
  return (
    <div className="aboutcontainer" id="about">
      <h1 className="aboutname">Esteban Longo</h1>
      <h2 className="aboutfullstack">Full Stack Developer</h2>
      <p className="aboutp">
        {/* Soy una persona proactiva, de mente analítica, con grandes habilidades
        de comunicación y empatía. Con pensamiento creativo, resolución de problemas,
        trabajo en equipo, comunicación y autonomía. Día a día intento mejorar mis habilidades, soy un entusiasta del aprendizaje continuo. */}
        Mi curiosidad hace de mi día a día mejorar mis habilidades. Soy un entusiasta del continuo aprendizaje. Tanto en lo grupal como en lo individual me reconozco como una persona proactiva, de mente analítica, resolutiva y creativa, con grandes habilidades de comunicación y de trabajo en equipo.
      </p>

      <section id="section05" className="demo">
        {/* <a href="#projects"> */}
          <Link
            className="linkaboutprojects"       
            to="projects"
            smooth={true}
            duration={500}>
          <span></span>Mis proyectos
          </Link>
        {/* </a> */}
      </section>
    </div>
  );
}
