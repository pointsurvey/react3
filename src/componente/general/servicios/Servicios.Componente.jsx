import React from 'react'

import { ServiciosGeneral } from './ServiciosGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpleos } from '../../Contenido/SliderEmpleos'
import { SliderEmpresa } from '../../Contenido/SliderEmpresa'
import { SliderTopografo } from '../../Contenido/SliderTopografo'
import { SliderAlquiler } from '../../Contenido/SliderAlquiler'
import { SliderVenta } from '../../Contenido/SliderVenta'
import { SliderCursos } from '../../Contenido/SliderCursos'

export const ServiciosComponente = () => {
  return (
    <>
    <div className="cuerpo">
        <ServiciosGeneral/>
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderEmpleos />
        <SliderEmpresa />
        <SliderTopografo />
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderAlquiler />
        <SliderVenta />
        <SliderCursos />
      </div>
    </>
  )
}
