import { useContext, useEffect, useState } from "react";
import ContextOrigin from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { Button, Card, Alert } from "react-bootstrap";
import { listTrabajos } from "../api/trabajos";

const { Context } = ContextOrigin;

const Trabajos = () => {
  const navigate = useNavigate();
  const { trabajos, setTrabajos, setRequestedId } = useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getTrabajos() {
      setLoading(true);
      const trabajosdb = await listTrabajos();
      const { data, status } = trabajosdb;
      if (status === 200) {
        console.log("trabajodb =>", data);
        setTrabajos([...data]);
      }
      setLoading(false);
    }
    getTrabajos();
  }, []);

  return (
    <div className="contenedor-jobs pt-5 p-4">
      <h1>Trabajos</h1>
      {loading && <Alert variant="info">Cargando...</Alert>}
      {!trabajos.length && (
          <Alert variant="success">no hay trabajos disponibles.</Alert>
        )}
      <div className="trabajos">
        {trabajos.map((trabajo) => {
          return (
            <Card className="card-trabajo" key={trabajo.id}>
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