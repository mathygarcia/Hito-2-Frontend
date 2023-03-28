export const typeUsu = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tipo-usuarios`);
    const data = await res.json();
    return data;
}
