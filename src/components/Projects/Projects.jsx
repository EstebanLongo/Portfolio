import React from "react";
import "./proyects.css";
import img from "../../assets/countriesApp.JPG";
import moviesapp from "../../assets/moviesapp.PNG";
import terapeando from "../../assets/terapeandoApp.PNG";

export default function Projects() {
  return (
    <div className="projectscontainer" id="projects">
      <h1 className="projectstitle">Mis proyectos</h1>

      <div className="projectscont">
        <div className="projects">
          <img src={img} className="countriesappimg" />
          <h2 className="projecttitle">Countries App</h2>
          <div className="projectp">
            SPA (Single Page Application) sobre países, en la cual se podrán
            visualizar los mismos traídos desde una API, con toda su
            información. <br /><br />
            <h3>Funcionalidades:</h3>
            <ul className="projectul">
              <li>Buscar paises por nombre</li>
              <li>Ver en detalle cada pais</li>
              <li>Filtro por continente</li>
              <li>Crear actividades turisticas</li>
              <li>Filtro por actividades</li>
              <li>Orden alfabetico</li>
              <li>Orden por población</li>
            </ul>
            <br />
            <h3>Tecnologias utilizadas:</h3>
            Javascript, React, Redux, HTML, CSS, Node.js, Express, Sequelize y
            PostgreSQL
          </div>
          <button className="projectbtn">
            <a
              href="https://countries-pi-esteban.vercel.app/"
              target="_blank"
              className="btnanchor"
            >
              Ver Proyecto
            </a>
          </button>
        </div>

        <div className="projects">
          <img src={terapeando} className="countriesappimg" />
          <h2 className="projecttitle">Terapeando</h2>
          <div className="projectp">
            App de terapia online para conectar pacientes y profesionales de la
            salud. <br /><br />
            <h3>Funcionalidades:</h3>
            <ul className="projectul">
              <li>Login simple y con Google</li>
              <li>Integración de pasarela de pagos</li>
              <li>Sistema de reservas</li>
              <li>Blog</li>
              <li>Google Maps API</li>
              <li>Filtro por especialidades</li>
              <li>Chatbot</li>
              <li>Panel de administrador</li>
            </ul>
            <br />
            <h3>Tecnologias utilizadas:</h3>
            Javascript, React, Redux, HTML, CSS, Chakra UI, Node.js, TypeScript,
            Express y MongoDB
          </div>
          <button className="projectbtn">
            <a
              href="https://terapeando.vercel.app/"
              target="_blank"
              className="btnanchor"
            >
              Ver Proyecto
            </a>
          </button>
        </div>

        <div className="projects">
          <img src={moviesapp} className="countriesappimg" />
          <h2 className="projecttitle">Movies App</h2>
          <div className="projectp">
            App sobre peliculas, utilizando una API externa en la cual se podrán visualizar las peliculas, con toda su información.
          <br /><br />
            <h3>Funcionalidades:</h3>
            <ul className="projectul">
              <li>Buscar peliculas por titulo</li>
              <li>Ver detalle de las peliculas</li>
              <li>Guardar y eliminar de favoritos</li>
            </ul>
          <br />
          <h3>Tecnologias utilizadas:</h3>
          Javascript, React, Redux, HTML, CSS
          </div>
          <button className="projectbtn">
            <a
              href="https://movies-el-app.vercel.app/"
              target="_blank"
              className="btnanchor"
            >
              Ver Proyecto
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
