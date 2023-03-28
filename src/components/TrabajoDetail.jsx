import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ContextOrigin from "../Context/Context";
import { takeJobEP } from "../api/takejobs";

const { Context } = ContextOrigin;

const TrabajoDetail = () => {
  const { solicitados, setSolicitados, requestedId } = useContext(Context);
  const navigate = useNavigate();
  const SolicitudJob = () => {
    try {
      takeJobEP(requestedId);
      setSolicitados([...solicitados, requestedId]);
    navigate("/JobsRequested");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contenedor-detalle vh-100 pt-5 p-4">
      <h1>detalle trabajo</h1>
      <Card className="card-detalle" key={requestedId.id}>
        <Card.Body>
          <Card.Title className="titulo fw-bold mt-2">{requestedId.titulo}</Card.Title>
          <Card.Text className="descripcion fw-bold mt-5">{requestedId.descripcion}</Card.Text>
          <Card.Text className=" contacto fw-bold mt-5">{requestedId.contacto}</Card.Text>
          <Card.Text className="email fw-bold mt-5">{requestedId.email}</Card.Text>
          <Button variant="secondary mt-4" onClick={SolicitudJob}>
            Solicitar trabajo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrabajoDetail;
