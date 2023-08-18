import React from 'react';
import { NavLink } from "react-router-dom";

export const UsuarioNoRegistradoFiltro = () => {
    return (
        <>
            <div className="usuarioFiltro">
                <div className="opcionUsuarioFiltro2">
                    <div className="accesos">
                        <NavLink to="/auth" className="boton1">Iniciar Sesion</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
