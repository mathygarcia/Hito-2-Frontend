export const typeUsu = async () => {
    const res = await fetch('http://localhost:3001/tipo-usuarios');
    const data = await res.json();
    return data;
}
/* import axios from "axios";
export const typeUsu = async () => {
  try {
    const res = await axios.get("http://localhost:3001/tipo-usuarios");
    return res;
  } catch (error) {
    console.log("typeUsuError", error);
    throw new Error("no hay tipos");
  }
}; */