import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuGeneral } from './Menu.General';
/* import { MenuConfiguracion } from './Menu.Configuracion';
import { MenuAdmin } from './Menu.Admin';
import { ImagenGlobal } from '../../../helpers/Global';
import { MenuUsuario } from './Menu.Usuario'; */

export const MenuComponent = () => {

    /* const permisoPagina = localStorage.getItem("PaginaPermiso_PointSurvey"); */

    return (
        <>
            <div className="contenidoMenu">
                <div className="logoMenu">
                    <img /* src={ImagenGlobal.logo} */ alt="Logo Point Survey srl" className="logoMenuPrincipal animate__animated animate__flash" />
                    <h1 className='logoMenuPrincipalh1'>Ps</h1>
                </div>
                {/* {
                    permisoPagina == "general" ? <MenuGeneral/> :
                    permisoPagina == "configuracion" ? <MenuConfiguracion/> : 
                    permisoPagina == "administracion" ? <MenuAdmin/> :
                    permisoPagina == "usuario" ? <MenuUsuario/>
                    : ""
                } */}
                <MenuGeneral/>
            </div>
        </>
    )
}
