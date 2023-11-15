import { useState } from "react"

const useConuter =(valorIncial)=>{
    const [contador , setContador] = useState(valorIncial)
 
    const incrementar = () =>{setContador(contador + 1)}
    const decrementar = () =>{setContador(contador - 1)}
    const resetear = () =>{setContador(valorIncial)}

    return{contador ,incrementar,decrementar,resetear}
}


export{useConuter}