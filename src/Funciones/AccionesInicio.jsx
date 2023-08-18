//botno menu on
//------------------------------------------------
export const BotonMenuOn = () => {

    let todo1 = document.querySelector(".todo");
    todo1.style.width = "calc(100% - 160px)";
    todo1.style.left = "160px";

    let menu1 = document.querySelector(".menu");
    let btnMenuOn1 = document.querySelector(".botonMenuOn");
    let btnMenuOff1 = document.querySelector(".botonMenuOff");
    let logoMenu = document.querySelector(".logoMenuPrincipal");
    let logoMenuh1 = document.querySelector(".logoMenuPrincipalh1");
    let forma1 = document.querySelector('.forma1');
    let forma2 = document.querySelector('.forma2');
    let forma3 = document.querySelector('.forma3');
    let forma4 = document.querySelector('.forma4');
    menu1.style.width = "160px";
    btnMenuOn1.style.display = "block";
    btnMenuOff1.style.display = "none";
    logoMenu.classList.add('active');
    logoMenuh1.classList.add('active');
    forma1.classList.add('active');
    forma2.classList.add('active');
    forma3.classList.add('active');
    forma4.classList.add('active');

    let configuracion = document.querySelector(".configuracion");
    let btnConfOn1 = document.querySelector(".botonConfOn");
    let btnConfOff1 = document.querySelector(".botonConfOff");
    let contenidoFiltro = document.querySelector(".contenidoFiltro");
    configuracion.style.width = "0px";
    configuracion.style.rigth = "0px";
    btnConfOn1.style.display = "none";
    btnConfOff1.style.display = "block";
    contenidoFiltro.style.display = "none";

    let rs = document.querySelector(".redesSociales");
    let btnRsOn = document.querySelector(".botonRedesOn");
    let btnRsOff = document.querySelector(".botonRedesOff");
    let contenidoRedes = document.querySelector(".contenidoRedes");
    rs.style.width = "0px";
    btnRsOn.style.display = "none";
    btnRsOff.style.display = "block";
    contenidoRedes.style.display = "none";
}

//botno menu off
//------------------------------------------------
export const BotonMenuOff = () => {
    let todo = document.querySelector(".todo");
    todo.style.width = "calc(100% - 50px)";
    todo.style.left = "50px";

    let menu = document.querySelector(".menu");
    let btnMenuOn = document.querySelector(".botonMenuOn");
    let btnMenuOff = document.querySelector(".botonMenuOff");
    let logoMenu = document.querySelector(".logoMenuPrincipal");
    let logoMenuh1 = document.querySelector(".logoMenuPrincipalh1");
    let forma1 = document.querySelector('.forma1');
    let forma2 = document.querySelector('.forma2');
    let forma3 = document.querySelector('.forma3');
    let forma4 = document.querySelector('.forma4');
    menu.style.width = "50px";
    btnMenuOn.style.display = "none";
    btnMenuOff.style.display = "block";
    logoMenu.classList.remove('active');
    logoMenuh1.classList.remove('active');
    forma1.classList.remove('active');
    forma2.classList.remove('active');
    forma3.classList.remove('active');
    forma4.classList.remove('active');
};

//botno conf off
//------------------------------------------------
export const BotonConfOff = () => {
    let todo1 = document.querySelector(".todo");
    todo1.style.width = "calc(100% - 210px)";
    todo1.style.left = "50px";

    let menu = document.querySelector(".menu");
    let btnMenuOn = document.querySelector(".botonMenuOn");
    let btnMenuOff = document.querySelector(".botonMenuOff");
    let logoMenu = document.querySelector(".logoMenuPrincipal");
    let logoMenuh1 = document.querySelector(".logoMenuPrincipalh1");
    let forma1 = document.querySelector('.forma1');
    let forma2 = document.querySelector('.forma2');
    let forma3 = document.querySelector('.forma3');
    let forma4 = document.querySelector('.forma4');
    menu.style.width = "50px";
    btnMenuOn.style.display = "none";
    btnMenuOff.style.display = "block";
    logoMenu.classList.remove('active');
    logoMenuh1.classList.remove('active');
    forma1.classList.remove('active');
    forma2.classList.remove('active');
    forma3.classList.remove('active');
    forma4.classList.remove('active');

    let configuracion = document.querySelector(".configuracion");
    let btnConfOn1 = document.querySelector(".botonConfOn");
    let btnConfOff1 = document.querySelector(".botonConfOff");
    let contenidoFiltro = document.querySelector(".contenidoFiltro");
    configuracion.style.width = "160px";
    btnConfOn1.style.display = "block";
    btnConfOff1.style.display = "none";
    contenidoFiltro.style.display = "block";

    let rs = document.querySelector(".redesSociales");
    let btnRsOn = document.querySelector(".botonRedesOn");
    let btnRsOff = document.querySelector(".botonRedesOff");
    let contenidoRedes = document.querySelector(".contenidoRedes");
    btnRsOn.style.display = "none";
    btnRsOff.style.display = "block";
    rs.style.width = "0px";
    contenidoRedes.style.display = "none";
};

//botno conf on
//------------------------------------------------
export const BotonConfOn = () => {
    let todo = document.querySelector(".todo");
    todo.style.width = "calc(100% - 50px)";
    todo.style.left = "50px";

    let configuracion = document.querySelector(".configuracion");
    let btnConfOn1 = document.querySelector(".botonConfOn");
    let btnConfOff1 = document.querySelector(".botonConfOff");
    let contenidoFiltro = document.querySelector(".contenidoFiltro");
    configuracion.style.width = "0px";
    btnConfOn1.style.display = "none";
    btnConfOff1.style.display = "block";
    contenidoFiltro.style.display = "none";
};

//botno redes sociales on
//------------------------------------------------
export const BotonRsOn = () => {
    let rs = document.querySelector(".redesSociales");
    let btnRsOn = document.querySelector(".botonRedesOn");
    let btnRsOff = document.querySelector(".botonRedesOff");
    let contenidoRedes = document.querySelector(".contenidoRedes");
    rs.style.width = "0px";
    btnRsOn.style.display = "none";
    btnRsOff.style.display = "block";
    contenidoRedes.style.display = "none";
};
//botno redes sociales off
//------------------------------------------------
export const BotonRsOff = () => {
    let todo = document.querySelector(".todo");
    todo.style.width = "calc(100% - 50px)";
    todo.style.left = "50px";

    let menu1 = document.querySelector(".menu");
    let btnMenuOn1 = document.querySelector(".botonMenuOn");
    let btnMenuOff1 = document.querySelector(".botonMenuOff");
    let logoMenu = document.querySelector(".logoMenuPrincipal");
    let logoMenuh1 = document.querySelector(".logoMenuPrincipalh1");
    let forma1 = document.querySelector('.forma1');
    let forma2 = document.querySelector('.forma2');
    let forma3 = document.querySelector('.forma3');
    let forma4 = document.querySelector('.forma4');
    menu1.style.width = "50px";
    btnMenuOn1.style.display = "none";
    btnMenuOff1.style.display = "block";
    logoMenu.classList.remove('active');
    logoMenuh1.classList.remove('active');
    forma1.classList.remove('active');
    forma2.classList.remove('active');
    forma3.classList.remove('active');
    forma4.classList.remove('active');

    let configuracion = document.querySelector(".configuracion");
    let btnConfOn1 = document.querySelector(".botonConfOn");
    let btnConfOff1 = document.querySelector(".botonConfOff");
    let contenidoFiltro = document.querySelector(".contenidoFiltro");
    configuracion.style.width = "0px";
    btnConfOn1.style.display = "none";
    btnConfOff1.style.display = "block";
    contenidoFiltro.style.display = "none";

    let rs = document.querySelector(".redesSociales");
    let btnRsOn = document.querySelector(".botonRedesOn");
    let btnRsOff = document.querySelector(".botonRedesOff");
    let contenidoRedes = document.querySelector(".contenidoRedes");
    rs.style.width = "150px";
    btnRsOn.style.display = "block";
    btnRsOff.style.display = "none";
    contenidoRedes.style.display = "flex";
};
//to do off
//------------------------------------------------
export const TodoOff = () => {
    let todo = document.querySelector(".todo");
    todo.style.width = "calc(100% - 50px)";
    todo.style.left = "50px";

    let menu = document.querySelector(".menu");
    let btnMenuOn = document.querySelector(".botonMenuOn");
    let btnMenuOff = document.querySelector(".botonMenuOff");
    let logoMenu = document.querySelector(".logoMenuPrincipal");
    let logoMenuh1 = document.querySelector(".logoMenuPrincipalh1");
    let forma1 = document.querySelector('.forma1');
    let forma2 = document.querySelector('.forma2');
    let forma3 = document.querySelector('.forma3');
    let forma4 = document.querySelector('.forma4');
    menu.style.width = "50px";
    btnMenuOn.style.display = "none";
    btnMenuOff.style.display = "block";
    logoMenu.classList.remove('active');
    logoMenuh1.classList.remove('active');
    forma1.classList.remove('active');
    forma2.classList.remove('active');
    forma3.classList.remove('active');
    forma4.classList.remove('active');

    let configuracion = document.querySelector(".configuracion");
    let btnConfOn1 = document.querySelector(".botonConfOn");
    let btnConfOff1 = document.querySelector(".botonConfOff");
    let contenidoFiltro = document.querySelector(".contenidoFiltro");
    configuracion.style.width = "0px";
    btnConfOn1.style.display = "none";
    btnConfOff1.style.display = "block";
    contenidoFiltro.style.display = "none";

    let rs = document.querySelector(".redesSociales");
    let btnRsOn = document.querySelector(".botonRedesOn");
    let btnRsOff = document.querySelector(".botonRedesOff");
    let contenidoRedes = document.querySelector(".contenidoRedes");
    rs.style.width = "0px";
    btnRsOn.style.display = "none";
    btnRsOff.style.display = "block";
    contenidoRedes.style.display = "none";
};