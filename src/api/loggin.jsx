import axios from "axios";
export const loggin = async (user) => {
  try {
    console.log("usuario => ", user);
  const data = await axios.post("https://hito-3-backend.vercel.app/Login", user);
  console.log("data =>", data)
  return data;
  } catch (error) {
    console.log("loginError", error)
    throw new Error("usuario no registrado");
  }
};
