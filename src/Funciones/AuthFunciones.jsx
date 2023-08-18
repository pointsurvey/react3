//registro
export const Registro = () => {
    let reg = document.querySelector(".registro");
    let log = document.querySelector(".login");

    reg.style.zIndex = "200";
    log.style.zIndex = "100";
    reg.style.margin = "50px 0 0 50px";
    log.style.margin = "0 50px 50px 0";
};
//login
export const Login = () => {
    let reg = document.querySelector(".registro");
    let log = document.querySelector(".login");

    reg.style.zIndex = "100";
    log.style.zIndex = "200";
    log.style.margin = "50px 0 0 50px";
    reg.style.margin = "0 50px 50px 0";
};