import React from 'react'

import { EmpleoGeneral } from './EmpleoGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpresa } from '../../Contenido/SliderEmpresa'
import { SliderTopografo } from '../../Contenido/SliderTopografo'
import { SliderServicios } from '../../Contenido/SliderServicios'
import { SliderAlquiler } from '../../Contenido/SliderAlquiler'
import { SliderVenta } from '../../Contenido/SliderVenta'
import { SliderCursos } from '../../Contenido/SliderCursos'

export const EmpleoComponente = () => {
  return (
    <>
      <div className="cuerpo">
        <EmpleoGeneral />
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderEmpresa />
        <SliderTopografo />
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
