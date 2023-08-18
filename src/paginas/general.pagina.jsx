import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import { BotonMenuOn, BotonMenuOff, BotonConfOff, BotonConfOn, BotonRsOn, BotonRsOff, TodoOff } from "../Funciones/AccionesInicio";

import { MenuComponent } from '../componente/general/Menu/Menu.Component';
import { CabeceraComponente } from '../componente/general/cabecera/Cabecera.Componente';
import { PiePagina } from '../componente/general/PiePagina/PiePagina';
import { FiltroComponente } from '../componente/general/filtros/Filtro.componente';
import { RedesComponente } from '../componente/general/redes/Redes.Componente';

const GeneralPagina = () => {
    return (
        <>
            <div className="contenidoGeneral">
                <div className="menu">
                    <MenuComponent />
                </div>

                <div className="todo" onClick={TodoOff}>
                    <div className="cabecera">
                        <CabeceraComponente />
                    </div>

                    <Outlet />

                    <div className="piePagina">
                        <PiePagina />
                    </div>
                </div>

                <div className="configuracion">
                    <FiltroComponente />
                </div>
            </div>
            <div className="botonesGeneral">
                <div className="otros"></div>
                <div className="redesSociales">
                    <RedesComponente />
                </div>
                <div className="botonMenuOn" onClick={BotonMenuOff}></div>
                <div className="botonMenuOff" onClick={BotonMenuOn}></div>
                <div className="botonConfOn" onClick={BotonConfOn}></div>
                <div className="botonConfOff" onClick={BotonConfOff}></div>
                <div className="botonRedesOn" onClick={BotonRsOn}></div>
                <div className="botonRedesOff" onClick={BotonRsOff}></div>
            </div>
        </>
    )
}

export default GeneralPagina