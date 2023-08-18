import React from 'react'
import { NavLink } from 'react-router-dom'

export const SliderEmpleos = () => {
    return (
        <>
            <div className="slider">
                <div className="tituloSlider">
                    <h1 className="tituloSliderh1">Lista de Empleos (8 de 1878) </h1>
                    <hr />
                </div>
                <div className="cuerpoSlider">
                    <div className="contenidoSlider">
                        <div className="cajaGrande">
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Carretera</p>
                                    <p>Experiencia: 3 años</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Urgente</span>
                                </div>
                                <div className="box2">
                                    <h4>Topografo cadista</h4>
                                    <h5>INNOVANDUM</h5>
                                    <p>Perú</p>
                                    <p>Arequipa</p>
                                    <p>Paucarpata</p>
                                    <span>Hace 1 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Catac</p>
                                    <p>Experiencia: 2 años</p>
                                    <p><i className='icon-star'></i>3.6</p>
                                    <span>Importante</span>
                                </div>
                                <div className="box2">
                                    <h4>Topografo/a</h4>
                                    <h5>SEFEME</h5>
                                    <p>Perú</p>
                                    <p>Lima</p>
                                    <p>Puente Piedra</p>
                                    <span>Hace 1 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Dron</p>
                                    <p>Experiencia: 1 años</p>
                                    <p><i className='icon-star'></i>4.0</p>
                                    <span>Importante</span>
                                </div>
                                <div className="box2">
                                    <h4>Dibujante Cadista</h4>
                                    <h5>TD</h5>
                                    <p>Perú</p>
                                    <p>Piura</p>
                                    <p>Piura</p>
                                    <span>Hace 2 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Edificio</p>
                                    <p>Experiencia: 3 años</p>
                                    <p><i className='icon-star'></i>4.1</p>
                                    <span>Importante</span>
                                </div>
                                <div className="box2">
                                    <h4>Residente Obra</h4>
                                    <h5>CONVERSA</h5>
                                    <p>Perú</p>
                                    <p>Tacna</p>
                                    <p>Tacna</p>
                                    <span>Hace 2 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Carretera</p>
                                    <p>Experiencia: 3 años</p>
                                    <p><i className='icon-star'></i>4.2</p>
                                    <span>Urgente</span>
                                </div>
                                <div className="box2">
                                    <h4>Topografo cadista</h4>
                                    <h5>INNOVANDUM</h5>
                                    <p>Perú</p>
                                    <p>Arequipa</p>
                                    <p>Paucarpata</p>
                                    <span>Hace 1 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Catac</p>
                                    <p>Experiencia: 2 años</p>
                                    <p><i className='icon-star'></i>3.6</p>
                                    <span>Importante</span>
                                </div>
                                <div className="box2">
                                    <h4>Topografo/a</h4>
                                    <h5>SEFEME</h5>
                                    <p>Perú</p>
                                    <p>Lima</p>
                                    <p>Puente Piedra</p>
                                    <span>Hace 1 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Dron</p>
                                    <p>Experiencia: 1 años</p>
                                    <p><i className='icon-star'></i>4.0</p>
                                    <span>Importante</span>
                                </div>
                                <div className="box2">
                                    <h4>Dibujante Cadista</h4>
                                    <h5>TD</h5>
                                    <p>Perú</p>
                                    <p>Piura</p>
                                    <p>Piura</p>
                                    <span>Hace 2 dias</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <p>Proyecto: Edificio</p>
                                    <p>Experiencia: 3 años</p>
                                    <p><i className='icon-star'></i>4.1</p>
                                    <span>Importante</span>
                                </div>
                                <div className="box2">
                                    <h4>Residente Obra</h4>
                                    <h5>CONVERSA</h5>
                                    <p>Perú</p>
                                    <p>Tacna</p>
                                    <p>Tacna</p>
                                    <span>Hace 2 dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="enlaseSlider">
                    <NavLink to="/empleo" className='boton1'>Ver Mas</NavLink>
                </div>
            </div>
        </>
    )
}
