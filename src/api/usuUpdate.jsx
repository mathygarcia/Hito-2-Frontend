import axios from "axios";
import {config} from './axiosConfig';
export const updateUsudata = async (usuario) => {
  console.log("updateUsudata usuario => ", usuario);
  const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/Profile`, usuario, config);
  return data;
};
