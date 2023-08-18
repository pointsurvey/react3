import React from 'react'

import { AlquilerGeneral } from './AlquilerGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpleos } from '../../Contenido/SliderEmpleos'
import { SliderEmpresa } from '../../Contenido/SliderEmpresa'
import { SliderServicios } from '../../Contenido/SliderServicios'
import { SliderTopografo } from '../../Contenido/SliderTopografo'
import { SliderVenta } from '../../Contenido/SliderVenta'
import { SliderCursos } from '../../Contenido/SliderCursos'

export const AlquilerComponente = () => {
  return (
    <>
    <div className="cuerpo">
        <AlquilerGeneral />
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderEmpleos />
        <SliderEmpresa />
        <SliderServicios/>
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderTopografo />
        <SliderVenta />
        <SliderCursos />
      </div>
    </>
  )
}
