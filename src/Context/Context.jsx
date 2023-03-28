import { createContext, useState /* , useEffect */ } from "react";
const Context = createContext(null);

function Provider({ children }) {
  const [solicitados, setSolicitados] = useState([]);
  const [requestedId, setRequestedId] = useState([]);
  const [usuarios, setUsuarios] = useState({});
  const [session, setSession] = useState(null);
  const [trabajos, setTrabajos] = useState([]);

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
  return <Context.Provider value={state}>{children}</Context.Provider>
}
export default { Provider, Context };