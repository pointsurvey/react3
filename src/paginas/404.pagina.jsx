import React from 'react';
import { NavLink } from 'react-router-dom';
import { CabeceraComponente } from '../componente/general/cabecera/Cabecera.Componente'
import { PiePagina } from '../componente/general/PiePagina/PiePagina'

import { BotonGeneral } from '../Funciones/PermisosPaginas';

export const Pagina404 = () => {
  return (
    <>
    <CabeceraComponente/>

    <div className="Error404">
        <h2>Error 404</h2>
        <h1>No se encontro la pagina solicitada.</h1>
        <br />
        <NavLink to="/" className="boton3" onClick={BotonGeneral}>Ir al Inicio</NavLink>
    </div>
    
    <PiePagina/>
    </>
  )
}
