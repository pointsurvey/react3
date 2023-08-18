import React from 'react';
import { NavLink } from 'react-router-dom';

export const EnConstruccion = () => {
    return (
        <>
            <div className="enConstruccion">
                <img src="./src/assets/img/logos/enConstruccionTopo.png" alt="" />
                <h1>Página en Construcción</h1>
                <br />
                <h2>Pronto habran novedades... por el momento sigue navegando en nuestro contenido</h2>
                <br />
                <NavLink to="/" className="boton3">Ir al Inicio</NavLink>
            </div>
        </>
    )
}


