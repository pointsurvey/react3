import React from 'react';
import { NavLink } from 'react-router-dom';

import { BotonGeneral } from '../../../Funciones/PermisosPaginas';
/* import { ImagenGlobal } from '../../../helpers/Global'; */

export const PiePagina = () => {
    return (
        <>
            <footer className="footerPaginas">
                <div className="footerVisita">
                    <div className="fVisitaTitulo">Visitas a la Página</div>
                    <div className="fVisita">
                        <div className="visita1 animate__animated animate__jello">1</div>
                        <div className="separador1">'</div>
                        <div className="visita1 animate__animated animate__jello">0</div>
                        <div className="visita1 animate__animated animate__jello">0</div>
                        <div className="visita1 animate__animated animate__jello">0</div>
                        <div className="separador2">,</div>
                        <div className="visita1 animate__animated animate__jello">0</div>
                        <div className="visita1 animate__animated animate__jello">0</div>
                        <div className="visita1 animate__animated animate__jello">1</div>
                    </div>
                </div>
                <div className="footerAccesos">
                    <NavLink to="/" onClick={BotonGeneral}>
                        {/* <img src={ImagenGlobal.logoDark} alt="Logo Point Survey srl" className="animate__animated animate__flash" /> */}
                    </NavLink>
                    <div className="fAcceso1">Toda la experiencia aplicada a tus proyectos...
                    </div>
                </div>
                <div className="footerOtros">
                    <div className="fOtros1"><a href=""> Políticas de Privacidad</a></div>
                    <div className="fOtros1"><a href=""> Políticas de Contrato</a></div>
                    <div className="fOtros1"><a href=""> Preguntas frecuentes</a></div>
                </div>
                <div className="footerLinks">
                    <div className="fLink1">Links</div>
                    <div className="fLinkGrup">
                        <div className="fLink2 icon-facebook"></div>
                        <div className="fLink2 icon-messenger"></div>
                        <div className="fLink2 icon-whatsapp"></div>
                        <div className="fLink2 icon-instagram"></div>
                        <div className="fLink2 icon-youtube"></div>
                        <div className="fLink2 icon-linkedin"></div>
                        <div className="fLink2 icon-twitter"></div>
                        <div className="fLink2 icon-mail"></div>
                    </div>
                </div>
                <div className="footerDerecho">
                    <h1>Todos los derechos reservados © 2022
                        <span>PointSurvey s.r.l.</span>
                    </h1>
                </div>
                <div className="footerPublicidad">
                    <div className="fPublicidad2">Otras de mis páginas web... visitalas!!!</div>
                    <div className="fPublicidadGrup">
                        <div className="fPublicidad">
                            <img src="../../assets/img/topo/otros/point-survey.jpg" alt="" />
                        </div>
                        <div className="fPublicidad">
                            <img src="../../assets/img/topo/otros/melaminax.jpg" alt="" />
                        </div>
                        <div className="fPublicidad">
                            <img src="../../assets/img/topo/otros/veny.jpg" alt="" />
                        </div>
                        <div className="fPublicidad">
                            <img src="../../assets/img/topo/otros/frenos.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}


