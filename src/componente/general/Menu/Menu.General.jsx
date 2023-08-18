import React from 'react';
import { NavLink } from 'react-router-dom';

import { BotonConfiguracion, BotonGeneral } from '../../../Funciones/PermisosPaginas';

export const MenuGeneral = () => {
    return (
        <>
            <div className="grupo1">
                <div className="forma1">
                    <ul>
                        <li>
                            <NavLink to="/" className="navLink" onClick={BotonGeneral}><i className='icon-home'></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="/empleo" className="navLink">E</NavLink>
                        </li>
                        <li>
                            <NavLink to="/empresa" className="navLink"><i className='icon-office'></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="/profesional" className="navLink"><i className='icon-user'></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="/alquiler" className="navLink">A</NavLink>
                        </li>
                        <li>
                            <NavLink to="/venta" className="navLink">V</NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicio" className="navLink">S</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cursos" className="navLink">C</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className="navLink"><i className='icon-address-book'></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className="navLink"><i className='icon-location2'></i></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="forma2">
                    <ul>
                        <li>
                            <NavLink to="/" className="navLink" onClick={BotonGeneral}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/empleo" className="navLink">Empleos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/empresa" className="navLink">Empresas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profesional" className="navLink">Profesional</NavLink>
                        </li>
                        <li>
                            <NavLink to="/alquiler" className="navLink">Alquiler</NavLink>
                        </li>
                        <li>
                            <NavLink to="/venta" className="navLink">Venta</NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicio" className="navLink">Servicios</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cursos" className="navLink">Cursos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className="navLink">Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className="navLink">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grupo2">
                <div className="forma3">
                    <ul>
                        <li>
                            <a><i className='icon-clubs'></i></a>
                        </li>
                        <li>
                            <a><i className='icon-terminal'></i></a>
                        </li>
                        <li>
                            <NavLink to="/config" className="navLink" onClick={BotonConfiguracion}><i className='icon-cog'></i></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="forma4">
                    <ul>
                        <li>
                            <a>Club</a>
                        </li>
                        <li>
                            <a>Mas Paginas</a>
                        </li>
                        <li>
                            <NavLink to="/config" className="navLink" onClick={BotonConfiguracion}>Configurar</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
