import React from "react";
import "./proyects.css";
import img from "../../assets/countriesApp.JPG";
import moviesapp from "../../assets/moviesapp.PNG";
import terapeando from "../../assets/terapeandoApp.PNG";
import aguademar from "../../assets/aguademar.PNG";

export default function Projects() {
  return (
    <div className="projectscontainer" id="projects">
      <h1 className="projectstitle">My projects</h1>

      <div className="projectscont">
        <div className="projects" data-aos="fade-up">
          <div>
            <img src={aguademar} className="projectimg" alt="img not found" />
          </div>

          <div className="project" data-aos="fade-down" data-aos-delay="1100">
            <h2 className="projecttitle">Agua de mar</h2>
            <br />
            <div className="projectp">
              Web page for a seawater distributor in Cordoba, Argentina.
              <br />
              In which you can obtain information about the process through
              which seawater passes until it can be consumed, its composition,
              how it is obtained, how it is consumed and the benefits for our
              health that consuming seawater has.
              <br />
              <br />
              There are also recommended readings, a list of frequently asked
              questions about its consumption, its conservation and
              contraindications and it also has a contact form to place orders
              or request more information.
              <br />
              <br />
              <h3>Tech stack:</h3>
              Javascript, React, HTML, CSS
            </div>
            <button className="projectbtn">
              <a
                href="https://aguademar-rl.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btnanchor"
              >
                Project
              </a>
            </button>
          </div>
        </div>

        <div className="projects" data-aos="fade-right">
          <div>
            <img src={terapeando} className="projectimg" alt="img not found" />
          </div>
          <div className="=project">
            <h2 className="projecttitle">Terapeando</h2>
            <br />
            <div className="projectp">
              Online therapy app to connect patients and healthcare
              professionals health.
              <br />
              <br />
              <ul className="projectul">
                <li>Google login and simple login.</li>
                <li>Payment gateway integration.</li>
                <li>Reservation system.</li>
                <li>Blog.</li>
                <li>Google Maps API.</li>
                <li>Filter by specialties.</li>
                <li>Chatbot.</li>
                <li>Admin Panel.</li>
              </ul>
              <br />
              <h3>Tech stack:</h3>
              Javascript, React, Redux, HTML, CSS, Chakra UI, Node.js,
              TypeScript, Express y MongoDB
            </div>
            <button className="projectbtn">
              <a
                href="https://terapeando.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btnanchor"
              >
                Project
              </a>
            </button>
          </div>
        </div>

        <div className="projects" data-aos="fade-down-right">
          <div>
            <img src={img} className="projectimg" alt="img not found" />
          </div>
          <div className="project">
            <h2 className="projecttitle">Countries App</h2>
            <br />
            <div className="projectp">
              SPA (Single Page Application) about countries, where you can:
              <br />
              <br />
              <ul className="projectul">
                <li>Search countries by name.</li>
                <li>See in detail each country.</li>
                <li>Filter by continent.</li>
                <li>Create turistic activities.</li>
                <li>Filter by activities.</li>
                <li>Order alphabetically.</li>
                <li>Order by population.</li>
              </ul>
              <br />
              <h3>Tech stack:</h3>
              Javascript, React, Redux, HTML, CSS, Node.js, Express, Sequelize
              and PostgreSQL
            </div>
            <button className="projectbtn">
              <a
                href="https://countries-pi-esteban.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btnanchor"
              >
                Project
              </a>
            </button>
          </div>
        </div>

        <div className="projects" data-aos="slide-right">
          <div>
            <img src={moviesapp} className="projectimg" alt="img not found" />
          </div>
          <div className="project">
            <h2 className="projecttitle">Movies App</h2>
            <br />
            <div className="projectp">
              App about movies, using an external API where you can:
              <br />
              <br />
              <ul className="projectul">
                <li>Search movies by title.</li>
                <li>See details of movies.</li>
                <li>Save and delete from favourites.</li>
              </ul>
              <br />
              <h3>Tech stack:</h3>
              Javascript, React, Redux, HTML, CSS
            </div>
            <button className="projectbtn">
              <a
                href="https://movies-el-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btnanchor"
              >
                Project
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
