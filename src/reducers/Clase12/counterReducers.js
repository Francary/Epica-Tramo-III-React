import { typesCounter } from "../../types/Clase12/typesCounter.js"

const reducerCounter = (state , action) => {
    if(action.type ===typesCounter.SUMAR){
        return (state + 1)
    }
    if(action.type ===typesCounter.RESTAR){
        return (state - 1)
    }
    if(action.type ===typesCounter.RESET){
        return (0)
    }  
}

export {reducerCounter}