import React from 'react'
import { NavLink } from 'react-router-dom'

export const SliderTopografo = () => {
    return (
        <>
            <div className="slider">
                <div className="tituloSlider">
                    <h1 className="tituloSliderh1">Lista de Profesionales (8 de 752) </h1>
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
                                    <img src="./src/assets/img/topo/topog8.jpg" alt="" />
                                    <h5>Jonathan Ponce Magro</h5>
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
                                    <img src="./src/assets/img/topo/topog1.jpg" alt="" />
                                    <h5>Filber Huacho Marcas</h5>
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
                                    <img src="./src/assets/img/topo/topog2.jpg" alt="" />
                                    <h5>Maycol Fernandes</h5>
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
                                    <img src="./src/assets/img/topo/topog3.jpg" alt="" />
                                    <h5>Niko Chambergo Moreno</h5>
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
                                    <img src="./src/assets/img/topo/topog4.jpg" alt="" />
                                    <h5>Eliazar Huaranca Cori</h5>
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
                                    <img src="./src/assets/img/topo/topog5.jpg" alt="" />
                                    <h5>Raul llana quispe</h5>
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
                                    <img src="./src/assets/img/topo/topog6.jpg" alt="" />
                                    <h5>ge granados</h5>
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
                                    <img src="./src/assets/img/topo/topog7.jpg" alt="" />
                                    <h5>Diana morillo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="enlaseSlider">
                    <NavLink to="/profesional" className='boton1'>Ver Mas</NavLink>
                </div>
            </div>
        </>
    )
}
