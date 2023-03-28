import axios from "axios";
import {config} from './axiosConfig';
export const takeJobEP = async (usuarios_id, id) => {
  console.log("takeJobEP => usuaario id ,", usuarios_id, ' trabajo_id ', id);
  const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/takeJob`, {usuarios_id, id}, config);
  return data;
};
