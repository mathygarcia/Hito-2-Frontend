import axios from "axios";
export const registerUser = async (usuario) => {
  console.log("usuario => ", usuario);
  const data = await axios.post("http://localhost:3001/Register", usuario);
  return data;
};