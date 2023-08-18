import React from 'react'

import { ProfesionalGeneral } from './ProfesionalGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpleos } from '../../Contenido/SliderEmpleos'
import { SliderEmpresa } from '../../Contenido/SliderEmpresa'
import { SliderServicios } from '../../Contenido/SliderServicios'
import { SliderAlquiler } from '../../Contenido/SliderAlquiler'
import { SliderVenta } from '../../Contenido/SliderVenta'
import { SliderCursos } from '../../Contenido/SliderCursos'

export const ProfesionalComponente = () => {
  return (
    <>
    <div className="cuerpo">
        <ProfesionalGeneral/>
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderEmpleos />
        <SliderEmpresa />
        <SliderServicios/>
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
