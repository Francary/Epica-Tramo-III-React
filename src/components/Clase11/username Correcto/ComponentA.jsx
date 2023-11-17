import {  useUsername } from "../../../providers/UsernameProvider.jsx"
import { ComponentB } from "./ComponentB.jsx"


const ComponentA = () => {

const username = useUsername()
   
    return(
        <>
        <h1>username heredado de forma Correcta</h1>
        <p>Componente A: {username} </p>
        <ComponentB username={username}/>
        </>
    )
}

export {ComponentA}