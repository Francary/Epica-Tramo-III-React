
import { Mostrar } from "../components/Clase11/counter/Mostrar.jsx"
import { Restar } from "../components/Clase11/counter/Restar.jsx"
import { Sumar } from "../components/Clase11/counter/Sumar.jsx"
import { ComponentA } from "../components/Clase11/username Correcto/ComponentA.jsx"
import { Component1 } from "../components/Clase11/username Incorrecto/Component1.jsx"
import { CounterProvider } from "../providers/CounterProvider.jsx"
import { UsernameProvider } from "../providers/UsernameProvider.jsx"



const Clase11Page = () =>{

    return (
        <>
           <UsernameProvider>
                <Component1/>
                <ComponentA/>
           </UsernameProvider>
           <CounterProvider>
        
                <Mostrar/>
                <Sumar/>
                <Restar/>
        
           </CounterProvider>

           
            
        </>
    )
}

export {Clase11Page}