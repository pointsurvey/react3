import React from 'react'
import { NavLink } from 'react-router-dom'

export const SliderAlquiler = () => {
    return (
        <>
            <div className="slider">
                <div className="tituloSlider">
                    <h1 className="tituloSliderh1">Lista de Alquiler (8 de 492) </h1>
                    <hr />
                </div>
                <div className="cuerpoSlider">
                    <div className="contenidoSlider">
                        <div className="cajaGrande">
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>Huancayo</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/leicats06.jpg" alt="" />
                                    <h5>Estacion Total Leica</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/gps-garmin.jpg" alt="" />
                                    <h5>Gps garmin</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/JALON.jpg" alt="" />
                                    <h5>jalon</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/prisma-leica.jpg" alt="" />
                                    <h5>Prisma leica</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/miniprisma-leica.jpg" alt="" />
                                    <h5>mini prisma leica</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/nivel-kern.jpg" alt="" />
                                    <h5>nivel kern</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/nivel-leica.jpg" alt="" />
                                    <h5>nivel leica</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <h3>Topografía en General</h3>
                                    <p>Perú</p>
                                    <p>lima</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Hace 1 dias</span>
                                </div>
                                <div className="box2">
                                    <img src="./src/assets/img/topo/radio-motorola.jpg" alt="" />
                                    <h5>radio motorola</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="enlaseSlider">
                    <NavLink to="/alquiler" className='boton1'>Ver Mas</NavLink>
                </div>
            </div>
        </>
    )
}
