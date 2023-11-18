import { useReducer } from "react"
import { reducerCounter } from "../../reducers/Clase12/counterReducers.js"
import { typesCounter } from "../../types/Clase12/typesCounter.js"

const useCounter = () => {
    const [counter , dispatch ] = useReducer( reducerCounter , 0)
    const sumar = () => dispatch({type:typesCounter.SUMAR})
    const restar = () => dispatch({type:typesCounter.RESTAR})
    const reset = () => dispatch({type:typesCounter.RESET})
    
    return{ counter , sumar , restar , reset}
}

export {useCounter}