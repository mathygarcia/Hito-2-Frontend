import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import ContextOrigin from "../Context/Context";
const { Context } = ContextOrigin;

const FormLogin = () => {
  const { setSession, usuarios } = useContext(Context);

  const [usuario, setUsuario] = useState({});

  const navigate = useNavigate();
  const login = () => {
    const userExists =
      usuarios.some(
        (u) => u.email === usuario.email && u.contraseña === usuario.contraseña
      ) || true;
    if (userExists) {
      setSession(usuario);
      alert("Usuario identificado con éxito");
      navigate("/Profile");
    } else {
      alert("Email o contraseña incorrecta");
    }
  };
  return (
    <div className="contenedor-login vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-primary text-white ">
        <div>
          <h4>Iniciar Sesion</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="formularioEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={({ target }) =>
              setUsuario({ ...usuario, email: target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formularioContraseña">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="contraseña"
            type="password"
            placeholder="Password"
            onChange={({ target }) =>
              setUsuario({ ...usuario, contraseña: target.value })
            }
          />
        </Form.Group>

        <Button variant="secondary me-3" /* type="submit" */ onClick={login}>
          iniciar sesion
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
