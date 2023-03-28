import axios from "axios";
import {config} from './axiosConfig';
export const postTrabajo = async (trabajo) => {
  console.log("trabajo => ", trabajo);
  const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/PostJob`, trabajo, config);
  return data;
};
