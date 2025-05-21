import React from "react";
import quadro_avisos from "../assets/quadro-avisos.png";
import health_calculator from "../assets/health-calculator.png";
import pokemondle from "../assets/pokemondle.png";
import Timeline from "@/components/Timeline";

const Projects: React.FC = () => {
  return (
    <div className="projects mb-5" id="projects">
      <h1 className="title neon-glow">
        Projetos <i className="bi bi-folder"></i>
      </h1>
      <div className="projects-container">
        <a href="https://github.com/RafaMatesco/TCC-UNIVAP-2023" target="_blank" className="project-category px-5 py">
          <h5 className="project-category-1">Quadro de avisos</h5>
          <img className="project-category-3 project-image" src={quadro_avisos.src} alt="Project image" />
          <span className="project-category-2">Meu primeiro TCC. O sistema serve para facilitar a comunicação básica entre escola como instituição e seus alunos.</span>
        </a>
        <a href="https://github.com/RafaMatesco/Feira-tecnica-2022" target="_blank" className="project-category px-5 py">
          <h5 className="project-category-1">Health Calculator</h5>
          <img className="project-category-3 project-image" src={health_calculator.src} alt="Project image" />
          <span className="project-category-2">
            Meu primeiro projeto somente usando HTML e CSS. baseado em alguns dados coletados o sistema calcula diversas informações (perc. gordura corporal, IMC, massa magra, densidade óssea)
          </span>
        </a>
        <a href="https://github.com/RafaMatesco/pokemondle" target="_blank" className="project-category px-5 py">
          <h5 className="project-category-1">Pokemondle</h5>
          <img className="project-category-3 project-image" src={pokemondle.src} alt="Project image" />
          <span className="project-category-2">Jogo de adivinhar um pokémon usando dicas dadas a cada erro. Ainda em desenvolvimento</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
