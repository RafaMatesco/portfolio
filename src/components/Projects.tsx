import React, { useRef, useEffect } from "react";
import quadro_avisos from "../assets/quadro-avisos.png";
import health_calculator from "../assets/health-calculator.png";
import pokemondle from "../assets/pokemondle.png";

function useInView(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }else{
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

const Projects: React.FC = () => {
  const [ref1, visible1] = useInView();
  const [ref2, visible2] = useInView();
  const [ref3, visible3] = useInView();
  return (
    <div className="projects mb-5" id="projects">
      <h1 className="title neon-glow">
        <i className="bi bi-folder"></i> Projetos
      </h1>
      <div className="main-timeline text-white px-0">
        <div ref={ref1} className={`timeline left${visible1 ? " visible" : ""}`}>
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
        <div ref={ref2} className={`timeline right${visible2 ? " visible" : ""}`}>
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
        <div ref={ref3} className={`timeline left${visible3 ? " visible" : ""}`}>
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

      <div className="projects-container"></div>
    </div>
  );
};

export default Projects;
