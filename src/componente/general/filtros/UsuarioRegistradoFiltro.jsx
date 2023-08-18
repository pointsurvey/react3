import React from 'react';
import { NavLink } from "react-router-dom";
/* import useAuth from '../../../hooks/useAuth'; */

import { BotonConfiguracion, BotonAdministracion } from '../../../Funciones/PermisosPaginas';
/* import { Global, ImagenGlobal } from '../../../helpers/Global'; */

export const UsuarioRegistradoFiltro = () => {

    /* const { usuarioAuth } = useAuth(); */

    return (
        <>
            <div className="usuarioFiltro">
                <div className="opcionUsuarioFiltro1">
                    <div className="logo">

                        {/* {usuarioAuth.imagen != "default.png" && <img src={Global.url + "usuario/avatar/" + usuarioAuth.imagen} alt="" />} */}

                        {/* {usuarioAuth.imagen == "default.png" && <img src={ImagenGlobal.avatar} alt="" />} */}

                        {/* <h2 className="nombreUsuario">{usuarioAuth.apodo}</h2>
                        <p>{usuarioAuth.bio}</p> */}
                        <br />
                    </div>
                    <div className="accesos">
                        <NavLink to="/config" className="boton1" onClick={BotonConfiguracion}>Configurar</NavLink>
                        <NavLink to="/cerrar_sesion" className="boton1">Cerrar Sesion</NavLink>
                        <NavLink to="/cerrar_sesion" className="botonP">Publicar</NavLink>
                    </div>
                </div>

            </div>
            <div className="menuFiltro">
                <div className="accesos">
                    <a className="boton2">Skin</a>
                    <a className="boton2">Estadisticas</a>
                    <a className="boton2">Eventos</a>
                    {/* {usuarioAuth.role = "adm" &&
                        <NavLink to="/admin" className="boton2" onClick={BotonAdministracion}>Administrador</NavLink>} */}
                </div>
            </div>
        </>
    )
}
