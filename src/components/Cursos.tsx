import React from "react";

const Cursos: React.FC = () => {
  return (
    <div className="cursos mb-5" id="cursos">
      <h1 className="title neon-glow">
        <i className="bi bi-book"></i> Cursos e certificações
      </h1>
      <div className="cursos-container">
        <div className="cursos-category px-5 mb-3">
          <h5 className="title">
            Intercâmbio estudantil - Seattle, EUA{" "}
            <a target="_blank" href="https://drive.google.com/file/d/1mQOK8nOJWIoX3j24y5rHYudmZRUkVvKK/view?usp=sharing">
              (ver documento)
            </a>
          </h5>
          <div className="px-5">
            <div>Curso completo de inglês americano, com certificado, na Kaplan internacional de Seattle - Washington. Atualmente sou classificado com proeficiência na língua inglesa.</div>
          </div>
        </div>

        <div className="cursos-category px-5 mb-3">
          <h5 className="title">
            Introdução à Análise de Dados com Excel{" "}
            <a target="_blank" href="http://www.wagnerscj.com.br/cti30/certificados/a31184a53da211829f4d9d77bb790093.pdf">
              (ver documento)
            </a>
          </h5>
          <div className="px-5">
            <div>Curso completo de introdução análise de dados com excel ministrado pelo Professor Wagner dos Santos, com certificado.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
