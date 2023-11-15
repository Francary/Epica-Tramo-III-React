import { useEffect, useState } from "react"


const Efectos = () => {
const [counter , setCounter] = useState(0)
const [counter2 , setCounter2] = useState(0)

useEffect(() =>{
    
console.log("efecto")
},[counter2])

    return (
    <>
    <section>  
        Click: {counter}
        <button className="btn btn-primary m-2" onClick={()=> setCounter(counter + 1)}> Incrementar </button>
    </section>
    <section>  
        Click: {counter2}
        <button className="btn btn-primary m-2" onClick={()=> setCounter2(counter2 + 1)}> Incrementar </button>
    </section>
    </>
    )
}

export{Efectos}