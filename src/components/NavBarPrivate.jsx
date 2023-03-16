import { Navbar /* , Container */, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBarPrivate = () => {
  return (
    <>
      <Navbar className="nav-contenedor" variant="dark">
        <div className="contenedor-about-navprivate">
          <NavLink to="/" className="ms-3">
            <Button className="boton-about" variant="danger">
              About
            </Button>
          </NavLink>
          <NavLink to="/Profile" className="ms-3">
            <img
              className="logo-navprivate"
              src="https://i.postimg.cc/Wb2YyDKf/android-chrome-192x192.png"
              alt="logo-navbarprivate"
            />
          </NavLink>
        </div>

        <div className="contenedor-rutas-navprivate">
          <NavLink to="/Jobs" className="NLC">
            Trabajos
          </NavLink>
          <NavLink to="/PostJob" className="NLC">
            Publicar trabajo
          </NavLink>
          <NavLink to="/JobsRequested" className="NLC">
            trabajos solicitados
          </NavLink>
        </div>
      </Navbar>
    </>
  );
};

export default NavBarPrivate;
