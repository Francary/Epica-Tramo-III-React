import { createContext, useContext, useState } from "react";

const CounterContex = createContext()

const CounterProvider = ( {children} ) => {
    const [counter , setCounter] = useState(0)
    const sumar = () => setCounter(counter + 1)
    const restar = () => setCounter(counter - 1)
    
    return (
        <CounterContex.Provider value={{counter,sumar,restar}}>
            {children}
        </CounterContex.Provider>
    )

}

const useConter = () => useContext(CounterContex)

export {CounterContex , CounterProvider, useConter}