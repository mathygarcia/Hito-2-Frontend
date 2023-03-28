import axios from "axios";
import {config} from './axiosConfig';
export const detailJob = async (id) => {
  try {
    console.log("detailJob", id)
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/WorkDetail`, {
      params: {
        id
      }
    }, config);
    return res;
  } catch (error) {
    console.log("detailJobError", error);
    throw new Error("no hay detalle de trabajo");
  }
};
