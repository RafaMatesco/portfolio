import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me mb-3" id="about-me">
      <h1 className="title neon-glow">Sobre mim</h1>
      <p className="px-5">
        <span>Atualmente sigo minha paixão pela área de TI e sou desenvolvedor full-stack. </span>
        <span>Sou mais de exatas, então fui naturalmente atraído para a área de programação. </span>
        <span>Nela eu descobri o Web dev, onde eu prefiro o back-end, mas eu ainda assim gosto bastante do front-end.</span>
      </p>
      <p className="px-5">
        <span>Sou técnico formado em informática na UNIVAP, </span>
        <span>o que me possibilitou desde o ensino médio o desenvolvimento da minha lógica de programação e o aprendizado de várias ferramentas, linguagens e sistemas. </span>
        <span>Esse curso também me possibilitou a obtenção de diversas experiências na área de desenvolvimento, </span>
        <span>como processos seletivos, contratação para estágio, e produção de diversos projetos ao longo dos anos letivos, incluindo meu TCC.</span>
      </p>
      <p className="px-5">
        <span>A programação me fez perceber o quão bom e necessário é aprender, e graças a isso estou cursando Análise e desenvolvimento de sistemas na FATEC.</span>
      </p>
    </div>
  );
};

export default AboutMe;
