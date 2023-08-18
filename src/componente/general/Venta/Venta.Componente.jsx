import React from 'react'

import { VentaGeneral } from './VentaGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpleos } from '../../Contenido/SliderEmpleos'
import { SliderEmpresa } from '../../Contenido/SliderEmpresa'
import { SliderServicios } from '../../Contenido/SliderServicios'
import { SliderTopografo } from '../../Contenido/SliderTopografo'
import { SliderAlquiler } from '../../Contenido/SliderAlquiler'
import { SliderCursos } from '../../Contenido/SliderCursos'

export const VentaComponente = () => {
    return (
        <>
            <div className="cuerpo">
                <VentaGeneral/>
            </div>

            <Publicidad1 />

            <div className="cuerpo">
                <SliderEmpleos />
                <SliderEmpresa/>
                <SliderServicios />
            </div>

            <Publicidad1 />

            <div className="cuerpo">
                <SliderTopografo />
                <SliderAlquiler />
                <SliderCursos />
            </div>
        </>
    )
}
