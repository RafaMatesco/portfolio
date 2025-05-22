"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [ativo, setAtivo] = useState(false);

  const projectsClick = () => {
    const elemento = document.querySelector(".projects");
    if (elemento) {
      elemento.classList.add("com-sombra");
      setTimeout(() => {
        elemento.classList.remove("com-sombra");
      }, 1000);
    }
  };
  const profileClick = () => {
    const elemento = document.querySelector(".about-me");
    if (elemento) {
      elemento.classList.add("com-sombra");
      setTimeout(() => {
        elemento.classList.remove("com-sombra");
      }, 1000);
    }
  };
  const skillsClick = () => {
    const elemento = document.querySelector(".skills");
    if (elemento) {
      elemento.classList.add("com-sombra");
      setTimeout(() => {
        elemento.classList.remove("com-sombra");
      }, 1000);
    }
  };
  const curriculoClick = () => {
    const elemento = document.querySelector(".curriculo");
    if (elemento) {
      elemento.classList.add("com-sombra");
      setTimeout(() => {
        elemento.classList.remove("com-sombra");
      }, 1000);
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand user-select-none mx-5">Bem vindo ao meu portfólio!</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-4" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link mx-2" href="#" onClick={profileClick}>
                <i className="bi bi-person" id="homeIcon"></i>
              </a>
              <a className={`nav-link mx-2`} href="#curriculo" onClick={curriculoClick}>
                <i className="bi bi-mortarboard"></i>
              </a>
              <a className={`nav-link mx-2`} href="#skills" onClick={skillsClick}>
                <i className="bi bi-tools"></i>
              </a>
              <a className={`nav-link mx-2`} href="#projects" onClick={projectsClick}>
                <i className="bi bi-folder"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
