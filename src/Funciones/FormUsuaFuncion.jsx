//servicio 1
export const UsuarioForm1A = () => {
    /* ServicioForm2B();
    ServicioForm3B();
    ServicioForm4B(); */
    let serv1A = document.querySelector(".usuarioForm1A");
    let serv1B = document.querySelector(".usuarioForm1B");
    let serv1C = document.querySelector(".usuarioForm1C");
    let serv1D = document.querySelector(".usuarioForm1D");
    let serv1E = document.querySelector(".usuarioForm1E");
    let serv1F = document.querySelector(".usuarioForm1F");
    let serv1G = document.querySelector(".usuarioForm1G");

    serv1A.classList.add('Cambio');
    serv1B.style.height = "auto";
    serv1B.style.padding = "10px";
    serv1B.style.display = "flex";
    serv1C.style.display = "block";
    serv1D.style.display = "block";
    serv1E.style.display = "block";
    serv1F.style.display = "none";
    serv1G.style.color = "crimson";
};

//cerrar servicio 1
export const UsuarioForm1B = () => {
    let serv1A = document.querySelector(".usuarioForm1A");
    let serv1B = document.querySelector(".usuarioForm1B");
    let serv1C = document.querySelector(".usuarioForm1C");
    let serv1D = document.querySelector(".usuarioForm1D");
    let serv1E = document.querySelector(".usuarioForm1E");
    let serv1F = document.querySelector(".usuarioForm1F");
    let serv1G = document.querySelector(".usuarioForm1G");

    serv1A.classList.remove('Cambio');
    serv1B.style.height = "0px";
    serv1B.style.padding = "0px";
    serv1C.style.display = "none";
    serv1D.style.display = "none";
    serv1E.style.display = "none";
    serv1F.style.display = "block";
    serv1G.style.color = "#000";
};