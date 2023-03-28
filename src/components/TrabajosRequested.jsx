import { useContext, useState, useEffect } from "react";
import ContextOrigin from "../Context/Context";
import { Card, Alert} from "react-bootstrap";
import { requestJob } from "../api/solicitudTrabajo";

const { Context } = ContextOrigin;
const TrabajosRequested = () => {
  const { setSolicitados, solicitados, usuarios } =
    useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getSolicitudes() {
      setLoading(true);
      const solicitudesDb = await requestJob(usuarios.id);
      console.log("solicitudesDb", solicitudesDb);
      const { status, data } = solicitudesDb;
      if (status === 200) {
        console.log("solicitados =>", data);
        setSolicitados([...data]);
      }
      setLoading(false);
    }
    getSolicitudes();
  }, []);
  try {
    requestJob(usuarios.id);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="contenedor-solicitados pt-5 p-4">
      <h1>Lista De Trabajos Solicitados</h1>
      {loading && <Alert variant="info">Cargando...</Alert>}
      {!solicitados.length && (
        <Alert variant="success">no hay trabajos solicitados.</Alert>
      )}
      <div className="JobsSolicitados">
        {solicitados.map((solicitado) => {
          return (
            <Card className="card-solicitada p-3 mt-3" key={solicitado.titulo}>
              <Card.Body className="cuerpo">
                <Card.Title className="titulo fw-bold">
                  {solicitado.titulo}
                </Card.Title>
                <Card.Text className="email fw-bold">
                  {solicitado.email}
                </Card.Text>
                <Card.Text className="contacto fw-bold">
                  {solicitado.contacto}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TrabajosRequested;
