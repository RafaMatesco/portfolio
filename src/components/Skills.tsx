import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="skills mb-5" id="skills">
      <h1 className="title neon-glow">
        Habilidades <i className="bi bi-tools"></i>
      </h1>
      <div className="skills-container px-5">
        <div className="skills-item p-4">
          <h5 className="title">Linguagens</h5>
          <div className="skills-icons">
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

        <div className="skills-item p-4">
          <h5 className="title">Frameworks & Libraries</h5>
          <div className="skills-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
          </div>
        </div>

        <div className="skills-item p-4">
          <h5 className="title">Ferramentas</h5>
          <div className="skills-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" title="VSCode" />
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" title="GitHub" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" title="Bash" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" title="Android" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" title="Windows" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
