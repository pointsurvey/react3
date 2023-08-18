import React from 'react'

import { CursosGeneral } from './CursosGeneral'
import { Publicidad1 } from '../../publicidad/Publicidad1'
import { SliderEmpleos } from '../../Contenido/SliderEmpleos'
import { SliderEmpresa } from '../../Contenido/SliderEmpresa'
import { SliderTopografo } from '../../Contenido/SliderTopografo'
import { SliderServicios } from '../../Contenido/SliderServicios'
import { SliderAlquiler } from '../../Contenido/SliderAlquiler'
import { SliderVenta } from '../../Contenido/SliderVenta'

export const CursosComponente = () => {
    return (
        <>
            <div className="cuerpo">
                <CursosGeneral />
            </div>

            <Publicidad1 />

            <div className="cuerpo">
                <SliderEmpleos />
                <SliderEmpresa />
                <SliderTopografo />
            </div>

            <Publicidad1 />

            <div className="cuerpo">
                <SliderServicios />
                <SliderAlquiler />
                <SliderVenta />
            </div>
        </>
    )
}
