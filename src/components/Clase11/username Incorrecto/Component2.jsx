import { Component3 } from "./Component3.jsx"

const Component2 = ({username}) => {
    return(
        <>
        <p>Componente 2</p>
        <Component3 username={username}/>
        </>
    )
}

export {Component2}