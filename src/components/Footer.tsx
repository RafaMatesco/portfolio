import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
          <svg className="bi" width="30" height="24" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">Feito por Rafael Matesco</span>
      </div>

      <ul className="nav col-md-4 justify-content-end pe-4 list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#" aria-label="Instagram">
            <i className="bi bi-instagram fs-2"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
