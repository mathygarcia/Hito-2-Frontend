import axios from "axios";
export const loggin = async (user) => {
  try {
    console.log("usuario => ", user);
    const data = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/Login`,
      user
    );
    console.log("data =>", data);
    return data;
  } catch (error) {
    console.log("loginError", error);
    throw new Error("usuario no registrado");
  }
};
