import React from "react";
import { Link } from "react-scroll";
import "./about.css";

export default function About() {
  return (
    <div className="aboutcontainer" id="about">
      <p className="aboutsaludo">Hi, my name is</p>
      <h1 className="aboutname">Esteban Longo.</h1>
      <h2 className="aboutfullstack">Full Stack Developer</h2>
      <p className="aboutp">
        I'm a positive and enthusiastic Full Stack Web Developer from Argentina.
        <br />
        I'm continously learning and building up my skills. I consider myself a
        very curious person, with the ability to solve problems and above all
        always willing to teach and learn from others.
        <br />
        My development experience has been mainly in the academic field, at the
        soyHenry bootcamp, where I was able to exercise my technical skills, but
        above all my social skills as a developer. I'm a proactive person, with
        an analytical mind, with great communication and empathy skills, great
        curiosity and always eager to learn new technologies.
      </p>

      <section id="section05" className="demo">
        <Link
          className="linkaboutprojects"
          to="projects"
          smooth={true}
          duration={500}
        >
          <span></span>My projects
        </Link>
      </section>
    </div>
  );
}
