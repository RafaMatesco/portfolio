import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="skills mb-3" id="skills">
      <h1 className="title neon-glow">
        <i className="bi bi-tools"></i> Habilidades
      </h1>
      <div className="skills-container px-5">
        <div className="skills-item p-4 mb-3">
          <h5 className="title">Linguagens</h5>
          <div className="skills-icons my-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="50" alt="python logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" alt="typescript logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" alt="javascript logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="50" alt="php logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="50" alt="java logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="50" alt="cplusplus logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="50" alt="csharp logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo" />
          </div>
        </div>

        <div className="skills-item p-4 mb-3">
          <h5 className="title">Frameworks & ferramentas</h5>
          <div className="skills-icons my-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" alt="mysql logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="nodejs logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="react logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height="50" alt="flask logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50" alt="bootstrap logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="50" alt="mongodb logo" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="50" alt="vscode logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="50" alt="github logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" height="50" alt="bash logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
