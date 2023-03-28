import axios from "axios";
export const takeJobEP = async (usuario_id, id) => {
  console.log("takeJobEPIDs =>,", usuario_id, id);
  const data = await axios.post("http://localhost:3001/takeJob", usuario_id, id);
  return data;
};
