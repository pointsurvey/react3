import React from 'react'
import { NavLink } from 'react-router-dom'

export const SliderServicios = () => {
    return (
        <>
            <div className="slider">
                <div className="tituloSlider">
                    <h1 className="tituloSliderh1">Lista de Servicios (8 de 145) </h1>
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
                                    <img src="./src/assets/img/topo/servi1.jpg" alt="" />
                                    <h5>Servicios Electricos</h5>
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
                                    <img src="./src/assets/img/topo/servi2.jpg" alt="" />
                                    <h5>Servicios de albañileria</h5>
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
                                    <img src="./src/assets/img/topo/servi3.jpg" alt="" />
                                    <h5>torres grua</h5>
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
                                    <img src="./src/assets/img/topo/servi4.jpg" alt="" />
                                    <h5>Supervision de obras</h5>
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
                                    <img src="./src/assets/img/topo/servi5.jpg" alt="" />
                                    <h5>drywall</h5>
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
                                    <img src="./src/assets/img/topo/servi6.jpg" alt="" />
                                    <h5>Acabados interiores</h5>
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
                                    <img src="./src/assets/img/topo/servi7.jpg" alt="" />
                                    <h5>estudios de suelos</h5>
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
                                    <img src="./src/assets/img/topo/servi8.jpg" alt="" />
                                    <h5>tarrajeo y pintura</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="enlaseSlider">
                    <NavLink to="/servicio" className='boton1'>Ver Mas</NavLink>
                </div>
            </div>
        </>
    )
}
