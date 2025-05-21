import React from "react";
import quadro_avisos from "../assets/quadro-avisos.png";
import health_calculator from "../assets/health-calculator.png";
import pokemondle from "../assets/pokemondle.png";
const Projects: React.FC = () => {
  return (
    <div className="projects mb-5" id="projects">
      <h1 className="title neon-glow">
        Projetos <i className="bi bi-folder"></i>
      </h1>
      <div className="main-timeline text-white px-0">
        <div className="timeline left">
          <div className="card gradient-custom-left">
            <a href="https://github.com/RafaMatesco/TCC-UNIVAP-2023" target="_blank" className="card-body px-4 py-4">
              <h4>Quadro de avisos</h4>
              <p className="mx-5">Meu primeiro TCC. O sistema serve para facilitar a comunicação básica entre escola como instituição e seus alunos.</p>
              <img className="projects-image mb-3 mx-5" src={quadro_avisos.src} alt="Quadro de avisos" />
              <div className="skills-icons mx-5 my-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="react logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="nodejs logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" alt="typescript logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo" />
              </div>
            </a>
          </div>
        </div>
        <div className="timeline right">
          <div className="card gradient-custom-right">
            <a href="https://github.com/RafaMatesco/Feira-tecnica-2022" target="_blank" className="card-body px-4 py-4">
              <h4>Health Calculator</h4>
              <p className="mx-5">
                Meu primeiro projeto somente usando HTML e CSS. baseado em alguns dados coletados o sistema calcula diversas informações (perc. gordura corporal, IMC, massa magra, densidade óssea).
              </p>
              <img className="projects-image mx-5 mb-3" src={health_calculator.src} alt="Quadro de avisos" />
              <div className="skills-icons mx-5 my-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo" />
              </div>
            </a>
          </div>
        </div>
        <div className="timeline left">
          <div className="card gradient-custom-left">
            <a href="https://github.com/RafaMatesco/pokemondle" target="_blank" className="card-body px-4 py-4">
              <h4>Pokemondle</h4>
              <p className="mx-5">Jogo de adivinhar um pokémon usando dicas dadas a cada erro. Ainda em desenvolvimento.</p>
              <img className="projects-image mx-5 mb-3" src={pokemondle.src} alt="Quadro de avisos" />
              <div className="skills-icons mx-5 my-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="react logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" alt="typescript logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="projects-container">
      </div>
    </div>
  );
};

export default Projects;
