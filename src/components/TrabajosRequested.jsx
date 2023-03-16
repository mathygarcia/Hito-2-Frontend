import { useContext } from "react";
import ContextOrigin from "../Context/Context";
import { Card } from "react-bootstrap";
const { Context } = ContextOrigin;

const TrabajosRequested = () => {
  const { solicitados } = useContext(Context);
  return (
    <div className="contenedor-solicitados vh-100 pt-5 p-4">
      <h1>Lista De Trabajos Solicitados</h1>
      <div className="JobsSolicitados">
        {solicitados.map((solicitado) => {
          return (
            <Card className="card-solicitada p-3 mt-3" key={solicitado.titulo}>
              <Card.Body className="cuerpo">
                <Card.Title className="titulo fw-bold">{solicitado.titulo}</Card.Title>
                <Card.Text className="email fw-bold">{solicitado.email}</Card.Text>
                <Card.Text className="contacto fw-bold">{solicitado.contacto}</Card.Text>
                
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TrabajosRequested;
