import React from "react";
import { NavLink } from "react-router-dom";
/* import useAuth from "../../../hooks/useAuth"; */
import { UsuarioNoRegistradoFiltro } from "./UsuarioNoRegistradoFiltro";
import { UsuarioRegistradoFiltro } from "./UsuarioRegistradoFiltro";

export const FiltroComponente = () => {

    /* const { usuarioAuth } = useAuth(); */

    return (
        <>
            <div className="contenidoFiltro">

                {/* condicion para ingresar a esta pagina */}
                {/* {!usuarioAuth._id ?
                    <UsuarioNoRegistradoFiltro />
                    : <UsuarioRegistradoFiltro />} */}

                <div className="aparienciaFiltro">
                    <div className="btnCambio">
                        <button className="cambio" id="cambio">
                            <span>
                                <i className="icon-moon-o"></i>
                            </span>
                            <span>
                                <i className="icon-sun-o"></i>
                            </span>
                        </button>
                        <h3 className="cambioTextoDark" id="cambioTextoDark">Modo Dark</h3>
                        <h3 className="cambioTextoLigth" id="cambioTextoLigth">Modo Ligth</h3>
                    </div>
                </div>
            </div>
        </>
    );
};


{/* <li>
    <NavLink to="/crear" className={({ isActive }) => isActive ? "active" : ""}>Crear</NavLink>
</li> */}