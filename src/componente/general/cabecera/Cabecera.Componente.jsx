import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

import { BotonGeneral } from '../../../Funciones/PermisosPaginas';
/* import { Global, ImagenGlobal } from '../../../helpers/Global'; */

export const CabeceraComponente = () => {

    /* const token = localStorage.getItem("token_PointSurvey");
    const paisObtenidoId = localStorage.getItem("PaisUsuario_PointSurvey");

    //estado de perfil de pais
    const [paisObtenidox, setPaisObtenido] = useState();
    //estado confirmacion
    const [confirmado, setConfirmado] = useState(false); */

    /* useEffect(() => {
        PerfilUsuario();
    }, []); //se ejecutara la primera ves */

    /* ------------------------ */
    /* sacara datos de un pais */
   /*  const PerfilUsuario = async () => {
        //guardar usuario en el backend
        const solicitud4 = await fetch(
            Global.url + "pais/profile/" + paisObtenidoId,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: token,
                },
            }
        );
        const datos4 = await solicitud4.json();
        //crear un estado para listarlos
        if (datos4.pais && datos4.status == "success") {
            setConfirmado(true);
            setPaisObtenido(datos4.pais);
            console.log(datos4.pais)
        } else {
            console.log("error")
            console.log(datos4)

        }


    } */

    return (
        <>
            <div className="contenidoCabecera">
                <div className="logoCabecera">
                    <NavLink to="/" onClick={BotonGeneral}>
                        {/* <img src={ImagenGlobal.logoDark} alt="" className="animate__animated animate__flash" /> */}
                    </NavLink>
                </div>
                <div className="tituloCabecera">
                    {/* <p className="animate__animated animate__flip">La Web dedicada a la Topografía y la Construcción
                    </p> */}
                    <p>La Web dedicada a la Topografía y la Construcción</p>
                </div>
                
            </div>
        </>
    )
}

