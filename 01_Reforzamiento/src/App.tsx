/* import { TiposBasicos } from "./typescripts/TiposBasicos"; */
/* import { ObjetosLiterales } from "./typescripts/ObjetosLiterales"; */
/* import { Funciones } from "./typescripts/Funciones"; */
/* import { Contador } from "./components/Contador"; */
/* import { ContadorHook } from "./components/ContadorHook"; */
/* import { Login } from "./components/Login"; */

import { Usuarios } from "./components/Usuarios";

const App = () => {
  return (
    <div className="mt-2">
      <h1>
        Introducción a TypeScript con ReactJS 
      </h1>
      <hr></hr>
    {/* <TiposBasicos/> */}
    {/* <ObjetosLiterales/> */}
    {/* <Funciones/> */}
    {/* <Contador/> */}
    {/* <ContadorHook/> */}
    {/* <Login/> */}
    <Usuarios/>
    </div>
  )
}
export default App;