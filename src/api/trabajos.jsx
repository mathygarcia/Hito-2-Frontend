import axios from "axios";
import {config} from './axiosConfig';
export const listTrabajos = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Jobs`, config);
    return res;
  } catch (error) {
    console.log("listTrabajosError", error);
    throw new Error("no hay trabajos");
  }
};
