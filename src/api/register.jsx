const mockRegister = [
  {
    nombre: "",
    apellido: "",
    contacto: "",
    edad: "",
    sexo: "",
    email: "",
    contraseña: "",
  },
];

export const registerUser = async () => {
  /* const res = await fetch('http://localhost:3000/register');
      const data = await res.jeson(); */
  return mockRegister;
};
