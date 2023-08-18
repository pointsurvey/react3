import React from 'react'
import { NavLink } from 'react-router-dom'

export const SliderEmpresa = () => {
    return (
        <>
            <div className="slider">
                <div className="tituloSlider">
                    <h1 className="tituloSliderh1">Lista de Empresas (8 de 485) </h1>
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
                                    <img src="./src/assets/img/logos/point_survey.jpg" alt="" />
                                    <h5>Point Survey srl</h5>
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
                                    <img src="./src/assets/img/topo/topo1.png" alt="" />
                                    <h5>GEO TOP</h5>
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
                                    <img src="./src/assets/img/topo/topo2.png" alt="" />
                                    <h5>topsa</h5>
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
                                    <img src="./src/assets/img/topo/topo3.png" alt="" />
                                    <h5>topox</h5>
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
                                    <img src="./src/assets/img/topo/topo4.jpg" alt="" />
                                    <h5>surveyor</h5>
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
                                    <img src="./src/assets/img/topo/topo5.png" alt="" />
                                    <h5>ltg</h5>
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
                                    <img src="./src/assets/img/topo/topo6.jpg" alt="" />
                                    <h5>l&a</h5>
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
                                    <img src="./src/assets/img/topo/topo7.png" alt="" />
                                    <h5>t</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="enlaseSlider">
                    <NavLink to="/empresa" className='boton1'>Ver Mas</NavLink>
                </div>
            </div>
        </>
    )
}
