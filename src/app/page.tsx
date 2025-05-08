import quadro_avisos from "../assets/quadro-avisos.png";
import health_calculator from "../assets/health-calculator.png";
import pokemondle from "../assets/pokemondle.png";

export default function Home() {
  return (
    <div className="content">
      <div className="profile">
        <div className="profile_image">
          <img src="https://media1.tenor.com/m/rEd35Rfq3m4AAAAd/cat-work-in-progress.gif" alt="" />
          <br />
          <span>*Esse não sou eu</span>
        </div>
        <div className="profile_text">
          <span>Meu nome é</span>
          <h1>Rafael Matesco</h1>
          <div>
            <div>
              Fullstack dev <div className="vr"></div> Técnico de informática
            </div>
          </div>
        </div>
      </div>

      <div className="about-me pt-5">
        <div className="esquerda">
          <div className="curriculo">
            <h1>Formação</h1>
            <div className="items-container">
              <div className="items-category px-5 py-4">
                <h5>Análise e desenvolvimento de sistemas (cursando)</h5>
                <span>Fatec - Prof. Jessen Vidal</span>
                <span>01/2025 ➡️ 12/2027</span>
              </div>

              <div className="items-category px-5 py-4">
                <h5>Técnico em informática (Finalizado)</h5>
                <span>Colégios UNIVAP (unidade centro)</span>
                <span>01/2021 ➡️ 12/2023</span>
              </div>
            </div>
          </div>
          <div className="skills">
            <h1>Habilidades</h1>
            <div className="items-container">
              <div className="items-category px-5 py-4">
                <h3>Linguagens</h3>
                <div className="items-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS3" title="CSS3" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" title="C#" />
                </div>
              </div>

              <div className="items-category px-5 py-4">
                <h3>🛠️ Frameworks & Libraries</h3>
                <div className="items-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
                </div>
              </div>

              <div className="items-category px-5 py-4">
                <h3>⚙️ Ferramentas</h3>
                <div className="items-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" title="VSCode" />
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" title="GitHub" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" title="Bash" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" title="Android" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" title="Windows" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="direita">
          <div className="projects">
            <h1>Projetos</h1>
            <div className="items-container">
              <a href="https://github.com/RafaMatesco/TCC-UNIVAP-2023" target="_blank" className="project-category px-5 py-4">
                <h3 className="project-category-1">Quadro de avisos</h3>
                <img className="project-category-3 project-image" src={quadro_avisos.src} alt="Project image" />
                <span className="project-category-2">Meu primeiro TCC. O sistema serve para facilitar a comunicação básica entre escola como instituição e seus alunos.</span>
              </a>
              <a href="https://github.com/RafaMatesco/Feira-tecnica-2022" target="_blank" className="project-category px-5 py-4">
                <h3 className="project-category-1">Health Calculator</h3>
                <img className="project-category-3 project-image" src={health_calculator.src} alt="Project image" />
                <span className="project-category-2">
                  Meu primeiro projeto somente usando HTML e CSS. baseado em alguns dados coletados o sistema calcula diversas informações (perc. gordura corporal, IMC, massa magra, densidade óssea)
                </span>
              </a>
              <a href="https://github.com/RafaMatesco/pokemondle" target="_blank" className="project-category px-5 py-4">
                <h3 className="project-category-1">Pokemondle</h3>
                <img className="project-category-3 project-image" src={pokemondle.src} alt="Project image" />
                <span className="project-category-2">Jogo de adivinhar um pokémon usando dicas dadas a cada erro. Ainda em desenvolvimento</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
