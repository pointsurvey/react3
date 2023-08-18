import React from 'react'

import { EmpresaGeneral } from './EmpresaGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpleos } from '../../Contenido/SliderEmpleos'
import { SliderTopografo } from '../../Contenido/SliderTopografo'
import { SliderServicios } from '../../Contenido/SliderServicios'
import { SliderAlquiler } from '../../Contenido/SliderAlquiler'
import { SliderVenta } from '../../Contenido/SliderVenta'
import { SliderCursos } from '../../Contenido/SliderCursos'

export const EmpresaComponente = () => {
  return (
    <>
    <div className="cuerpo">
        <EmpresaGeneral />
      </div>

      <Publicidad1 />

      <div className="cuerpo">
        <SliderEmpleos />
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
