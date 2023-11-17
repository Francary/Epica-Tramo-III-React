import { Component4 } from "./Component4.jsx"

const Component3 = ({username}) => {
    return(
        <>
        <p>Componente 3</p>
        <Component4 username={username}/>
        </>
    )
}

export {Component3}