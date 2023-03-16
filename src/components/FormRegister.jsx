import { Form, Col, Row, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextOrigin from "../Context/Context";
const { Context } = ContextOrigin;

const FormRegister = () => {
  const { usuarios, setUsuarios } = useContext(Context);
  const [usuario, setUsuario] = useState({});
  const navigate = useNavigate();
  const addUser = () => {
    setUsuarios([...usuarios, usuario]);
    alert("Usuario Creado con éxito, intente iniciar sesión");
    navigate("/login");
  };
  return (
    <div className="contenedor-register vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-primary text-white ">
        <div>
          <h4>Registrar usuario</h4>
          <hr />
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Ingrese su nombre"
              onChange={({ target }) =>
                setUsuario({ ...usuario, nombre: target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="apellido"
              type="text"
              placeholder="Ingrese su apellido"
              onChange={({ target }) =>
                setUsuario({ ...usuario, apellido: target.value })
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formContacto">
            <Form.Label>Contacto</Form.Label>
            <Form.Control
              name="contacto"
              type="text"
              placeholder="Contacto"
              onChange={({ target }) =>
                setUsuario({ ...usuario, contacto: target.value })
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formEdad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              name="edad"
              type="text"
              placeholder="Edad"
              onChange={({ target }) =>
                setUsuario({ ...usuario, edad: target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formSexo">
            <Form.Label>Sexo</Form.Label>
            <Form.Control
              name="sexo"
              type="text"
              placeholder="Sexo"
              onChange={({ target }) =>
                setUsuario({ ...usuario, sexo: target.value })
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Ingrese Email"
              onChange={({ target }) =>
                setUsuario({ ...usuario, email: target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="contraseña"
              type="password"
              placeholder="Ingrese Contraseña"
              onChange={({ target }) =>
                setUsuario({ ...usuario, contraseña: target.value })
              }
            />
          </Form.Group>
        </Row>
        <Button variant="secondary mt-3" onClick={addUser} /* type="submit" */>
          registrarse
        </Button>
      </Form>
    </div>
  );
};

export default FormRegister;
