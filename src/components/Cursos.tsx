import React from "react";

const Cursos: React.FC = () => {
  return (
    <div className="cursos mb-5" id="cursos">
      <h1 className="title neon-glow">
        <i className="bi bi-mortarboard"></i> Cursos e certificações
      </h1>
      <div className="cursos-container">
        <div className="cursos-category px-5 mb-3">
          <h5 className="title">Intercâmbio estudantil - Seattle, EUA</h5>
          <div className="px-5">
            <div>Curso completo de inglês americano, com certificado, na Kaplan internacional de Seattle - Washington. Atualmente sou classificado com proeficiência na língua inglesa.</div>
          </div>
        </div>

        <div className="cursos-category px-5 mb-3">
          <h5 className="title">Introdução à Análise de Dados com Excel</h5>
          <div className="px-5">
            <div>Curso completo de introdução análise de dados com excel ministrado pelo Professor Wagner dos Santos, com certificado.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
