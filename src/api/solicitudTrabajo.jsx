import axios from "axios";
import {config} from './axiosConfig';
export const requestJob = async (id) => {
  try {
    console.log("requestJob =>", id);
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/JobsRequested/${id}`, config);
    return res;
  } catch (error) {
    console.log("requestJobError", error);
    throw new Error("no se pudo ordenar solicitud");
  }
};
