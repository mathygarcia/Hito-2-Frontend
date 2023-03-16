import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextOrigin from "../Context/Context";

const { Context } = ContextOrigin;

const PostTrabajo = () => {
  const { trabajos, setTrabajos } = useContext(Context);
  const [trabajo, setTrabajo] = useState({});
  const navigate = useNavigate();

  const PublicarJob = () => {
    setTrabajos([...trabajos, trabajo]);
    alert("Trabajo publicado con exito.");
    navigate("/Jobs");
  };
  return (
    <div className="contenedor-post-job vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-primary text-white ">
        <div>
          <h4>Informacion sobre el trabajado</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setTrabajo({ ...trabajo, titulo: target.value })
            }
            type="text"
            placeholder="titulo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contacto</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setTrabajo({ ...trabajo, contacto: target.value })
            }
            type="text"
            placeholder="contacto"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setTrabajo({ ...trabajo, email: target.value })
            }
            type="text"
            placeholder="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setTrabajo({ ...trabajo, descripcion: target.value })
            }
            type="text"
            placeholder="descripcion"
          />
        </Form.Group>
        <Button variant="secondary me-3" onClick={PublicarJob}>
          Publicar
        </Button>
      </Form>
    </div>
  );
};

export default PostTrabajo;
