import React from "react";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand user-select-none mx-5">Bem vindo ao meu porfólio!</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-4" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#" id="homeLink">
                <i className="bi bi-house" id="homeIcon"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
