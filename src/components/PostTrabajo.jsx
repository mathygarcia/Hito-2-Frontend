import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
//import { useNavigate } from "react-router-dom";
import ContextOrigin from "../Context/Context";
import { postTrabajo } from "../api/publicarTrabajo";

const { Context } = ContextOrigin;

const PostTrabajo = () => {
  const { usuarios } = useContext(Context);
  const [trabajo, setTrabajo] = useState({});

  const PublicarJob = async () => {
    try {
      const {id} = usuarios;
      const res = await postTrabajo({...trabajo, usuarios_id:id});
      console.log("res", res)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contenedor-post-job vh-100 pt-5">
      <Form className="form-form-post w-50 mx-auto border p-3 rounded text-white ">
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>sueldo</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setTrabajo({ ...trabajo, sueldo: target.value })
            }
            type="number"
            placeholder="sueldo"
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
