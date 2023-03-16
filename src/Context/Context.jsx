import { createContext, useState /* , useEffect */ } from "react";
const Context = createContext(null);

function Provider({ children }) {
  const [solicitados, setSolicitados] = useState([
    {
      titulo: "desarrollador backend",
      descripcion: "se necesita de senior en node.js",
      contacto: "912645678",
      email: "garc.math@gmail.com",
    },
  ]);
  const [requestedId, setRequestedId] = useState([]);
  const [usuarios, setUsuarios] = useState([
    /* {
      nombre: "",
      apellido: "",
      edad: "",
      sexo: "",
      email: "",
      contacto: "",
      contraseña: "",
      descripcion: "",
      links: "",
      imagen: "",
    }, */
  ]); //crear json de usuarios
  const [session, setSession] = useState(null);
  const [trabajos, setTrabajos] = useState([
    {
      titulo: "desarrollador frontend",
      descripcion: "se necesita de senior en react.js",
      contacto: "912985678",
      email: "math.garc@gmail.com",
    },
  ]);
  /* useEffect(() => {
    if (solicitado != false) {
      setSolicitados([...solicitados, solicitado]);
    }
  }, [solicitado]); */

  /* const eliminarFavorito = () => {
    setFavoritos([]);
    for (let imagen of imagenes) {
      imagen.liked = false;
    }
  }; */

  const state = {
    usuarios,
    setUsuarios,
    session,
    setSession,
    trabajos,
    setTrabajos,
    solicitados,
    setSolicitados,
    requestedId,
    setRequestedId,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };
