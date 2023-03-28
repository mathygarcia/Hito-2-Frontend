import { Form, Col, Row, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContextOrigin from "../Context/Context";
import { registerUser } from "../api/register";
import { typeUsu } from "../api/tipoUsuario";
const { Context } = ContextOrigin;

const FormRegister = () => {
  const { setUsuarios } = useContext(Context);
  const [usuario, setUsuario] = useState({});
  const [tipoUsuarios, setTipoUsuario] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getTipoUsuarios() {
      const tipoUsuarios = await typeUsu();
      setLoading(false);
      setTipoUsuario(tipoUsuarios);
    }
    getTipoUsuarios();
  }, []);
  const addUser = () => {
    try {
      setUsuarios([usuario]);
      registerUser(usuario);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const renderForm = () => {
    return (
      <div className="contenedor-register vh-100 pt-5">
        <Form
          className="form-form w-50 mx-auto border p-3 rounded text-white"
        >
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
            <Form.Group className="container-check ml-3 mt-3">
              {tipoUsuarios.length &&
                tipoUsuarios.map((tipousuario) => (
                  <Form.Check
                    key={tipousuario.id}
                    reverse
                    name="{tipousuario.type}"
                    label={tipousuario.type}
                    value={tipousuario.id}
                    type="radio"
                    id="reverse-radio"
                    onChange={({ target }) => {
                      console.log("target", target.value);
                      setUsuario({ ...usuario, id_type_user: target.value });
                    }}
                  />
                ))}
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
                name="pass"
                type="password"
                placeholder="Ingrese Contraseña"
                onChange={({ target }) =>
                  setUsuario({ ...usuario, pass: target.value })
                }
              />
            </Form.Group>
          </Row>
          <Button variant="secondary mt-3" onClick={addUser} type="submit">
            registrarse
          </Button>
        </Form>
      </div>
    );
  };
  return !loading && renderForm();
};

export default FormRegister;