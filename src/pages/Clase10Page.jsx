
import { Contador10 } from "../components/Clase10/10-Contador.jsx"
import { Focus } from "../components/Clase10/10-Focus.jsx"
import { Live } from "../components/Clase10/10-Live-CicloDeVida.jsx"
import { Rendimiento } from "../components/Clase10/10-Rendimiento.jsx"
import { Timer } from "../components/Clase10/10-Timer.jsx"

const Clase10Page = () =>{


    return (
        <>
        <Contador10/>
        <Timer/>
        <br/>
        <Focus/>
        <br/>
        <Rendimiento/>
        <br/>
        <Live/>
        </>
    )
}

export {Clase10Page}