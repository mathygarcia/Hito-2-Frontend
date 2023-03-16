import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";

import ContextOrigin from "../Context/Context";
const { Context } = ContextOrigin;

const Perfil = () => {
  const { setUsuarios, usuarios, session } = useContext(Context);

  const [usuario, setUsuario] = useState({});

  const updateUser = () => {
    const { user_id } = session;
    const userFoundIndex = usuarios.findIndex((u) => u.user_id === user_id);
    usuarios[userFoundIndex] = usuario;
    setUsuarios([...usuarios]);
    alert("Datos actualizados con éxito");
  };
  return (
    <div className="contenedor-info-perfil vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-primary text-white ">
        <div>
          <h4>mas info sobre el usuario</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Avatar URL</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUsuario({ ...usuario, imagen: target.value })
            }
            type="text"
            placeholder="imagen de usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contacto</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUsuario({ ...usuario, contacto: target.value })
            }
            type="text"
            placeholder="contacto"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Links</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUsuario({ ...usuario, links: target.value })
            }
            type="text"
            placeholder="Links"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUsuario({ ...usuario, descripcion: target.value })
            }
            type="text"
            placeholder="descripcion"
          />
        </Form.Group>

        <Button variant="secondary me-3" onClick={updateUser}>
          guardar
        </Button>
      </Form>
    </div>
  );
};

export default Perfil;
