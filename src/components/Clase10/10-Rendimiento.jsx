import { useEffect, useState, useCallback } from "react"

const Counter = ({counter , increment}) =>{

    useEffect (() => {
        console.log("hola me renderizo")
    },[increment])

    return(
        <button onClick={increment} className="btn btn-primary m-5"> {counter}  </button>
    )

}


const Rendimiento = () => {
    const[counter, setCounter] = useState(0)
    const incremento = useCallback(() => {
        setCounter((prev) => prev + 1)
    },[])

    return (
       <Counter counter={counter} increment={incremento} /> 
    )
}

export {Rendimiento}