import axios from "axios";
export const postTrabajo = async (trabajo) => {
  console.log("trabajo => ", trabajo);
  const data = await axios.post("http://localhost:3001/PostJob", trabajo);
  return data;
};
