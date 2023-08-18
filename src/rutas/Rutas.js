import { Routes, Route, BrowserRouter } from "react-router-dom";

import GeneralPagina from "../paginas/general.pagina";
import { ContenidoInicioComponente } from "../componente/Contenido/ContenidoInicioComponente";
import { EmpleoComponente } from "../componente/general/Empleos/Empleo.Componente";
import { EmpresaComponente } from "../componente/general/Empresa/Empresa.Componente";
import { ProfesionalComponente } from "../componente/general/Profesional/Profesional.Componente";
import { VentaComponente } from "../componente/general/Venta/Venta.Componente";
import { AlquilerComponente } from "../componente/general/alquiler/Alquiler.Componente";
import { ServiciosComponente } from "../componente/general/servicios/Servicios.Componente";
import { ContactoComponente } from "../componente/Personal/Contacto.Componente";
import { NosotrosComponente } from "../componente/Personal/Nosotros.Componente";
import { CursosComponente } from "../componente/general/cursos/Cursos.Componente";

const Rutas = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<GeneralPagina />} >
                    <Route index element={<ContenidoInicioComponente />} />
                    <Route path="/empleo" element={<EmpleoComponente />} />
                    <Route path="/empresa" element={<EmpresaComponente />} />
                    <Route path="/profesional" element={<ProfesionalComponente />} />
                    <Route path="/alquiler" element={<AlquilerComponente />} />
                    <Route path="/venta" element={<VentaComponente />} />
                    <Route path="/servicio" element={<ServiciosComponente />} />
                    <Route path="/cursos" element={<CursosComponente />} />
                    <Route path="/contacto" element={<ContactoComponente />} />
                    <Route path="/nosotros" element={<NosotrosComponente />} />
                    {/* <Route path="/cerrar_Sesion" element={<CerrarSesion />} /> */}
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Rutas