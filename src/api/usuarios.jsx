const mockUsuarios = [
  {
    email: "",
    contraseña: "",
  },
];

export const usuarios = async () => {
  /* const urlServer = "http://localhost:3000";
  const endpoint = "/usuarios";
  const res = await fetch(urlServer + endpoint);
  //const res = await fetch("/ususarios");
  const data = await res.jeson(); */
  return mockUsuarios;
};
