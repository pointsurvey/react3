import { SeguirConf } from "../componente/configuracion/seguir.conf";

//abrir me sige
export const AbrirMeSigue = () => {
    let s1 = document.querySelector(".meSigue");
    let s2 = document.querySelector(".yoSigo");    
    let s3 = document.querySelector(".suge");    
    let s4 = document.querySelector(".meSigueN");
    let s5 = document.querySelector(".yoSigoN");
    let s6 = document.querySelector(".sugeN");
    let ms1 = document.querySelector(".abrirMeSige");
    let ms2 = document.querySelector(".abrirYoSigo");
    let ms3 = document.querySelector(".abrirsuge");
    s1.classList.remove("tituloInactivo")
    s2.classList.add("tituloInactivo")
    s3.classList.add("tituloInactivo")
    s4.classList.remove("tituloInactivo")
    s5.classList.add("tituloInactivo")
    s6.classList.add("tituloInactivo")
    ms1.style.display = "flex";
    ms2.style.display = "none";
    ms3.style.display = "none";
};
//cabrir yo sigo
export const AbrirYoSigo = () => {
    let s1 = document.querySelector(".meSigue");
    let s2 = document.querySelector(".yoSigo");    
    let s3 = document.querySelector(".suge");    
    let s4 = document.querySelector(".meSigueN");
    let s5 = document.querySelector(".yoSigoN");
    let s6 = document.querySelector(".sugeN");
    let ms1 = document.querySelector(".abrirMeSige");
    let ms2 = document.querySelector(".abrirYoSigo");
    let ms3 = document.querySelector(".abrirsuge");
    s1.classList.add("tituloInactivo")
    s2.classList.remove("tituloInactivo")
    s3.classList.add("tituloInactivo")
    s4.classList.add("tituloInactivo")
    s5.classList.remove("tituloInactivo")
    s6.classList.add("tituloInactivo")
    ms1.style.display = "none";
    ms2.style.display = "flex";
    ms3.style.display = "none";
};
//cabrir sugerencia
export const AbrirSugerencia = () => {
    let s1 = document.querySelector(".meSigue");
    let s2 = document.querySelector(".yoSigo");    
    let s3 = document.querySelector(".suge");    
    let s4 = document.querySelector(".meSigueN");
    let s5 = document.querySelector(".yoSigoN");
    let s6 = document.querySelector(".sugeN");
    let ms1 = document.querySelector(".abrirMeSige");
    let ms2 = document.querySelector(".abrirYoSigo");
    let ms3 = document.querySelector(".abrirsuge");
    s1.classList.add("tituloInactivo")
    s2.classList.add("tituloInactivo")
    s3.classList.remove("tituloInactivo")
    s4.classList.add("tituloInactivo")
    s5.classList.add("tituloInactivo")
    s6.classList.remove("tituloInactivo")
    ms1.style.display = "none";
    ms2.style.display = "none";
    ms3.style.display = "flex";
};