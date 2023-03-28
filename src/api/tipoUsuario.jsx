export const typeUsu = async () => {
    const res = await fetch('http://localhost:3001/tipo-usuarios');
    const data = await res.json();
    return data;
}
