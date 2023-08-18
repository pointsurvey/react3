import React from 'react'
import { SliderEmpresa } from "../Contenido/SliderEmpresa";
import { SliderAlquiler } from './SliderAlquiler';
import { SliderCursos } from './SliderCursos';
import { SliderEmpleos } from './SliderEmpleos';
import { SliderServicios } from './SliderServicios';
import { SliderTopografo } from './SliderTopografo';
import { SliderVenta } from './SliderVenta';
import { Publicidad1 } from '../publicidad/Publicidad1';

export const ContenidoInicioComponente = () => {
  return (
    <>
      <div className="cuerpo">
        <SliderEmpleos />
        <SliderServicios />
        <SliderEmpresa />
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderTopografo />
        <SliderAlquiler />
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderVenta />
        <SliderCursos />
      </div>
    </>
  )
}
