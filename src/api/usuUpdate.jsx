import axios from "axios";
export const updateUsudata = async (usuario) => {
  console.log("updateUsudata usuario => ", usuario);
  const data = await axios.put("http://localhost:3001/Profile", usuario);
  return data;
};
