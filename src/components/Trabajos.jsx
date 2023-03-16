import { useContext } from "react";
import ContextOrigin from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
const { Context } = ContextOrigin;
const Trabajos = () => {
  const navigate = useNavigate();
  const { trabajos, setRequestedId } = useContext(Context);
  return (
    <div className="contenedor-jobs vh-100 pt-5 p-4">
      <h1>Trabajos</h1>
      <div className="trabajos">
        {trabajos.map((trabajo) => {
          return (
            <Card className="card-trabajo" key={trabajo.titulo}>
              <Card.Body>
                <Card.Title>{trabajo.titulo}</Card.Title>
                <Card.Text className="fw-bold">{trabajo.descripcion}</Card.Text>
                <Button
                  onClick={() =>
                    navigate(`/WorkDetail/${trabajo.titulo}`) ||
                    setRequestedId(trabajo)
                  }
                  variant="secondary"
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Trabajos;