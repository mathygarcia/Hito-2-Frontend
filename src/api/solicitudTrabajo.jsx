import axios from "axios";
export const requestJob = async (id) => {
  try {
    console.log("requestJob =>", id);
    const res = await axios.get(`http://localhost:3001/JobsRequested/${id}`);
    return res;
  } catch (error) {
    console.log("requestJobError", error);
    throw new Error("no se pudo ordenar solicitud");
  }
};
