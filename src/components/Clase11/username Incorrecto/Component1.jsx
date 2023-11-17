import { useState } from "react"
import { Component2 } from "./Component2.jsx"

const Component1 = () => {
    const [username, setUsername] = useState("Francary")
    return(
        <>
        <h1>username heredado de forma Incorrecta</h1>
        <p>Componente 1: {username} </p>
        <Component2 username={username}/>
        </>
    )
}

export {Component1}