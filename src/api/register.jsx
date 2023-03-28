import axios from "axios";
import {config} from './axiosConfig';
export const registerUser = async (usuario) => {
  console.log("usuario => ", usuario);
  const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Register`, usuario, config);
  return data;
};