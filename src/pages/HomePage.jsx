import {Button} from "../components/Clase08/Button.jsx"
import { Container } from "../components/Clase08/Container.jsx"
import { Counter } from "../components/Clase09/Counter.jsx"
import { Test } from "../components/Clase08/Test.jsx"

const HomePage = () => {
    return (  
        <>
            <h1>Hola Mundo ----</h1>
            <Button  texto="Click msj Alert" variante="red" onClick={()=> alert("Click en React")}/>
            <Button  texto="Boton B" variante="green"/>
            <Button  oculto/>
            <Button> Probrando con Children</Button>
            <Container>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veritatis pariatur quo commodi provident beatae quam autem vitae consequuntur. Repellendus debitis aspernatur odit distinctio deserunt commodi facilis voluptatem alias fugiat!
                </p>
            </Container>
            <Test/>     

            <Counter/>
        </>
    )
}


export {HomePage}