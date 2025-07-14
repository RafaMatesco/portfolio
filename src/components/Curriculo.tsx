import React from "react";

const Curriculo: React.FC = () => {
  return (
    <div className="curriculo mb-3" id="curriculo">
      <h1 className="title neon-glow">
        <i className="bi bi-mortarboard"></i> Formação
      </h1>
      <div className="curriculo-container">
        <div className="curriculo-category px-5 mb-3">
          <h5 className="title">Análise e desenvolvimento de sistemas ⏳</h5>
          <div className="px-5">
            <div>Fatec - Prof. Jessen Vidal</div>
            <div>01/2025 ➡️ 12/2027</div>
          </div>
        </div>

        <div className="curriculo-category px-5 mb-3">
          <h5 className="title">Técnico em informática ✅</h5>
          <div className="px-5">
            <div>Colégios UNIVAP (unidade centro)</div>
            <div>01/2021 ➡️ 12/2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculo;
