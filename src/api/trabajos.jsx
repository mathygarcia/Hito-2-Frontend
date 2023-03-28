import axios from "axios";
export const listTrabajos = async () => {
  try {
    const res = await axios.get("http://localhost:3001/Jobs");
    return res;
  } catch (error) {
    console.log("listTrabajosError", error);
    throw new Error("no hay trabajos");
  }
};
