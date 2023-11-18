import { useCounter } from "../../hooks/Clase12/useCounter.js"


const Counter = () => {

const {counter,sumar,restar, reset} = useCounter()

    return (
        <>
        <p>Contador: {counter}</p>
        <button  className="btn btn-outline-primary m-5" onClick={sumar}> Sumar </button>
        <button  className="btn btn-outline-danger m-5" onClick={restar} > Restar </button>
        <button  className="btn btn-outline-warning m-5" onClick={reset} > Reset </button>
        </>
    )
}

export {Counter}