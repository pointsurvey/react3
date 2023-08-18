import { UbicacionComponente } from "../componente/admin/Ubicacion.Componente";

//pais
export const PaisAdmin = () => {
    CerrarEditarDepa();
    CerrarEditarPais();
    CerrarEditarProv();
    LimpiarInputPais();
    let en1 = document.querySelector(".EnlasePais");
    let en2 = document.querySelector(".EnlaseDepa");
    let en3 = document.querySelector(".EnlaseProv");
    let el1 = document.querySelector(".ElementoPais");
    let el2 = document.querySelector(".ElementoDepa");
    let el3 = document.querySelector(".ElementoProv");

    en1.classList.add('enlaseAdminActivo');
    en2.classList.remove('enlaseAdminActivo');
    en3.classList.remove('enlaseAdminActivo');
    el1.style.display = "block";
    el2.style.display = "none";
    el3.style.display = "none";
};
//departamento
export const DepaAdmin = () => {
    CerrarEditarDepa();
    CerrarEditarPais();
    CerrarEditarProv();
    LimpiarInputPais();
    let en1 = document.querySelector(".EnlasePais");
    let en2 = document.querySelector(".EnlaseDepa");
    let en3 = document.querySelector(".EnlaseProv");
    let el1 = document.querySelector(".ElementoPais");
    let el2 = document.querySelector(".ElementoDepa");
    let el3 = document.querySelector(".ElementoProv");

    en1.classList.remove('enlaseAdminActivo');
    en2.classList.add('enlaseAdminActivo');
    en3.classList.remove('enlaseAdminActivo');
    el1.style.display = "none";
    el2.style.display = "block";
    el3.style.display = "none";
};
//provincia
export const ProvAdmin = () => {
    CerrarEditarDepa();
    CerrarEditarPais();
    CerrarEditarProv();
    LimpiarInputPais();
    let en1 = document.querySelector(".EnlasePais");
    let en2 = document.querySelector(".EnlaseDepa");
    let en3 = document.querySelector(".EnlaseProv");
    let el1 = document.querySelector(".ElementoPais");
    let el2 = document.querySelector(".ElementoDepa");
    let el3 = document.querySelector(".ElementoProv");

    en1.classList.remove('enlaseAdminActivo');
    en2.classList.remove('enlaseAdminActivo');
    en3.classList.add('enlaseAdminActivo');
    el1.style.display = "none";
    el2.style.display = "none";
    el3.style.display = "block";
};

//abrir editar pais
export const AbrirEditarPais = () => {
    CerrarEditarDepa();
    CerrarEditarProv();
    let ed1 = document.querySelector(".editarPais");
    let ed2 = document.querySelector(".generalPais");

    ed1.style.display = "block";
    ed2.style.display = "none";
}

//cerrar editar pais
export const CerrarEditarPais = () => {
    let ed1 = document.querySelector(".editarPais");
    let ed2 = document.querySelector(".generalPais");

    ed1.style.display = "none";
    ed2.style.display = "block";
}

//abrir editar depa
export const AbrirEditarDepa = () => {    
    CerrarEditarProv();
    CerrarEditarPais();
    let ed1 = document.querySelector(".editarDepa");
    let ed2 = document.querySelector(".generalDepa");

    ed1.style.display = "block";
    ed2.style.display = "none";
}

//cerrar editar depa
export const CerrarEditarDepa = () => {
    let ed1 = document.querySelector(".editarDepa");
    let ed2 = document.querySelector(".generalDepa");

    ed1.style.display = "none";
    ed2.style.display = "block";
}

//abrir editar prov
export const AbrirEditarProv = () => {
    CerrarEditarDepa();
    CerrarEditarPais();
    let ed1 = document.querySelector(".editarProv");
    let ed2 = document.querySelector(".generalProv");

    ed1.style.display = "block";
    ed2.style.display = "none";
}

//cerrar editar prov
export const CerrarEditarProv = () => {
    let ed1 = document.querySelector(".editarProv");
    let ed2 = document.querySelector(".generalProv");

    ed1.style.display = "none";
    ed2.style.display = "block";
}

//limpiar input
export const LimpiarInputPais = () => {
    let ee1 = document.getElementsByClassName("agregarTexto");
    for(let i = 0; i< ee1.length; i++){
        ee1[i].value = "";
    }
}

