import axios from "axios";
export const detailJob = async (id) => {
  try {
    console.log("detailJob", id)
    const res = await axios.get("http://localhost:3001/WorkDetail", {
      params: {
        id
      }
    });
    return res;
  } catch (error) {
    console.log("detailJobError", error);
    throw new Error("no hay detalle de trabajo");
  }
};
