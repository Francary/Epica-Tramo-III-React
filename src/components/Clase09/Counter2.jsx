import { useConuter } from "../../hooks/Clase09/useCountes.js"

const Counter2 = ( ) =>{
    let valorIncial = 0
    const {contador ,incrementar,decrementar,resetear} = useConuter(valorIncial)
    const {contador: contador2 ,incrementar: incrementar2 ,decrementar: decrementar2 ,resetear:resetear2} = useConuter(valorIncial)
    
 
    return (
        <>
            <h1> Contador 2</h1>
            <p>Contador: {contador}</p>
            <button className="btn btn-primary m-1" onClick={incrementar} >Incrementar</button>
            <button className="btn btn-danger m-1" onClick={decrementar}>Decrementar</button>
            <button className="btn btn-warning m-1" onClick={resetear} >Resetear</button>

            <p>Contador: {contador2}</p>
            <button className="btn btn-primary m-1" onClick={incrementar2} >Incrementar</button>
            <button className="btn btn-danger m-1" onClick={decrementar2}>Decrementar</button>
            <button className="btn btn-warning m-1" onClick={resetear2} >Resetear</button>

            <p>Suma : { contador + contador2 }</p>
        </>
    )
}

export{Counter2}