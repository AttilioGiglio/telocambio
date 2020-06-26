import React from 'react';
import { Link } from "react-router-dom";
import './Header.sass';
function Header(props) {
  return (
    // <UserProvider>
      <div className="Header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="navbar-brand" to="/">
             <Link to='/'><img src="/img/logo.png" alt="logo"/></Link> 
              <span>DASHBOARD</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
            

              <div className="nav-item dropdown my-md-0 is-dark">
                  <div className="nav-link dropdown-toggle"  id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MENU</div>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <Link className="dropdown-item" to='/admin/list'>Productos Ofreces</Link>
                    <Link className="dropdown-item" to='/admin/create'>Crear Producto</Link>
                    {/* <Link className="dropdown-item" to="/admin/config">Configuración</Link> */}
                    
                  </div>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/publicaciones">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quienes-somos">Quienes somos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contáctanos</Link>
                </li>
              </ul>
           
            </div>
          </div>
        </nav>
      </div>
    // </UserProvider>
  );
}

export default Header;