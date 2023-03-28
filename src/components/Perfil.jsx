import { Form, Button, Alert } from "react-bootstrap";
import { useContext, useState } from "react";
import { updateUsudata } from "../api/usuUpdate";
import ContextOrigin from "../Context/Context";

const { Context } = ContextOrigin;
const Perfil = () => {
  const { setUsuarios, usuarios } = useContext(Context);
  const [user, setUsuario] = useState(usuarios);
  const [err, setErr] = useState({
    ok: false,
    error: false,
  });
  const [loading, setLoading] = useState(false);
  async function updateUsuarioProfile() {
    setLoading(true);
    const resp = await updateUsudata(user);
    console.log("resp => ", resp);
    setLoading(false);
    return resp;
  }
  const updateUserData = () => {
    try {
      console.log("updateUserData =>", user);
      const resp = updateUsuarioProfile();
      if (resp.status === 200) {
        const data = resp.data;
        setUsuarios({ ...usuarios, data });
        setErr({
          ok: true,
          error: false,
        });
      } else {
        setErr({
          error: true,
          ok: false,
        });
      }
    } catch (error) {
      console.log("updateUserDataError", error);
      setErr({
        error: true,
        ok: false,
      });
    }
  };
  const handleInputChange = (e) => {
    setUsuario({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="contenedor-info-perfil vh-100 pt-5">
      {loading && <Alert variant="info">Cargando ...</Alert>}
      {!loading && err.error && (
        <Alert variant="success">datos actualizados con exito</Alert>
      )}
      {!loading && err.ok && (
        <Alert variant="danger">datos no actualizados</Alert>
      )}
      <Form className="form-form-perfil w-50 mx-auto border p-3 rounded text-white">
        <div>
          <h4>actualizar datos de usuario</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>actualizar email</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={user.email}
            name="email"
            type="email"
            placeholder="email usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>actualizar edad</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={user.edad}
            name="edad"
            type="number"
            placeholder="edad usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>actualizar contacto</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={user.contacto || ""}
            name="contacto"
            type="number"
            placeholder="contacto"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={user.descripcion || ""}
            name="descripcion"
            type="text"
            placeholder="descripcion"
          />
        </Form.Group>
        <Button
          disabled={loading}
          variant="secondary me-3"
          onClick={updateUserData}
        >
          guardar
        </Button>
      </Form>
    </div>
  );
};

export default Perfil;
