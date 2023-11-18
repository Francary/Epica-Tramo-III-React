import { useState, useEffect } from "react"
const CicloDeVida = () => {

    const [counter , setCounter] = useState(0)
    
    
    useEffect(() =>{
        
    console.log("Se ejcuta cuando cambia el estado")
        return () =>{
            console.log("Se ejcuta cuando se destruye")
        }
    },[counter])
    
        return (
        <>
        <section> 
            <h1>Ciclos de Vida</h1> 
            Click: {counter}
            <button className="btn btn-primary" onClick={()=> setCounter(counter + 1)}> Incrementar </button>
        </section>
        </>
        )
}

export{CicloDeVida}