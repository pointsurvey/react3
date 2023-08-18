import { UsuarioForm1B } from "./FormUsuaFuncion";

//abrir modal imagen
export const AbrirModalImagen = () => {
    let mi1 = document.querySelector(".modalCambioImagen");
    mi1.style.display = "flex";
    UsuarioForm1B();
};
//abrir modal imagen
export const AbrirModalImagenPais = () => {
    let mi1 = document.querySelector(".modalCambioImagen");
    mi1.style.display = "flex";
};
//cerrar modal imagen
export const CerrarModalImagen = () => {
    let mi1 = document.querySelector(".modalCambioImagen");
    let mensajeImagen = document.querySelector(".mensajeImagen");
    mi1.style.display = "none";
    document.getElementById("file").value = "";
    mensajeImagen.innerHTML = "";
};