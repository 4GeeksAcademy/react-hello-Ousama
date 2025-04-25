import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  mb-3" style={{ backgroundColor: '#d8d8d8' }}> 
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.bmw.es/es/topics/mundo-bmw/m-gmbh/m-performance-automoviles.html"> <img src="src/img/logo-bmw-com-gray.svg" alt="BMW Logo" title="BMW"></img>BMW EL PLACER DE CONDUCIR</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#card">Opciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Footer</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;