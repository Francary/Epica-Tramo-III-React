import { useState } from "react"

const Counter = ( ) =>{
    let valorIncial = 0
    const [contador , setContador] = useState(valorIncial)
 
    const incrementar = () =>{
        setContador(contador + 1)
    }
    const decrementar = () =>{
        setContador(contador - 1)
    }
    const resetear = () =>{
        setContador(valorIncial)
    }

    // Practicando para ver como se comporta cada vez que haga un click
    // if(contador>0) {
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${contador}`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //  }
    

    return (
        <>
            <h1> Contador 1</h1>
            <p>Contador: {contador}</p>
            <button className="btn btn-primary m-1" onClick={incrementar} >Incrementar</button>
            <button className="btn btn-danger m-1" onClick={decrementar}>Decrementar</button>
            <button className="btn btn-warning m-1" onClick={resetear} >Resetear</button>
        </>
    )
}

export{Counter}