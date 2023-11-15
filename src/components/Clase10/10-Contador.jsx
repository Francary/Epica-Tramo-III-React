import { useRef } from "react"


// El useRef no se puede mostrar en el DOM

const Contador10 = () =>{
    const counter = useRef(0)
    const handleClick = () =>{
        console.log(counter.current++)
    }

 
    return (
        <>
            <button onClick={handleClick} className="btn btn-primary m-5"> {counter.current++}  </button>
        </>
    )

}
export {Contador10}