import { Navbar /* , Container */ } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBarPublic = () => {
  return (
    <>
      <Navbar className="nav-contenedor" variant="dark">
        <div className="contenedor-logo-navpublic">
          <NavLink to="/" className="ms-3">
            <img
              className="logo-navpublic"
              src="https://i.postimg.cc/Wb2YyDKf/android-chrome-192x192.png"
              alt="logo-navbarpublic"
            />
          </NavLink>
        </div>
        <div className="contenedor-rutas-navpublic">
          <NavLink className="NLC" to="/Register">
            Registrarse
          </NavLink>
          <NavLink className="NLC" to="/Login">
            Iniciar Sesion
          </NavLink>
        </div>
      </Navbar>
    </>
  );
};

export default NavBarPublic;
