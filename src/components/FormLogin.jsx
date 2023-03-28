import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import { loggin } from "../api/loggin";
import ContextOrigin from "../Context/Context";

const { Context } = ContextOrigin;
const FormLogin = () => {
  const { setUsuarios } = useContext(Context);
  const [user, setUsuario] = useState({ email: "", pass: "" });
  const navigate = useNavigate();
  const [err, setErr] = useState({
    ok: false,
    error: false,
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("handleSubmint", user);
      if (user.email === "" || user.pass === "") {
        setErr({
          ok: false,
          error: true,
        });
        return;
      }
      console.log("usuario =>", user);
      setLoading(true);
      const { status, data } = await loggin(user);
      const { usuario, token } = data;
      setUsuarios({ ...usuario, token });
      console.log("navigate");
      navigate("/Profile");
      if (status === 200) {
        navigate("/Profile");
        setErr({
          ok: true,
          error: false,
        });
        localStorage.setItem('token', token);
      } else {
        setErr({
          error: true,
          ok: false,
        });
      }
      setLoading(false);
      return;
    } catch (error) {
      console.log("handleSubmiterror", error);
      setErr({ ok: false, error: true });
      setLoading(false);
    }
  };
  return (
    <div className="contenedor-login vh-100 pt-5">
      {loading && <Alert variant="info">Cargando...</Alert>}
      {!loading && err.ok && <Alert variant="success">acceso exitoso.</Alert>}
      {!loading && err.error && (
        <Alert variant="danger">datos incorrectos</Alert>
      )}
      <Form
        className="form-form-login w-50 mx-auto border p-3 rounded text-white"
        onSubmit={handleSubmit}
      >
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
              setUsuario({ ...user, email: target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formularioContraseña">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="pass"
            type="password"
            placeholder="Password"
            onChange={({ target }) =>
              setUsuario({ ...user, pass: target.value })
            }
          />
        </Form.Group>
        <Button variant="secondary me-3" disabled={loading} type="submit">
          iniciar sesion
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
