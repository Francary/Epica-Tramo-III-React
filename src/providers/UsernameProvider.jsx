import {  createContext, useContext, useState } from "react";

const UsernameContext = createContext ()

const UsernameProvider = ({children}) =>{
    const [username, setUsername] = useState("Francary Molina")
    return(
        <UsernameContext.Provider value={username} >
            {children}
        </UsernameContext.Provider>
    )
}

const useUsername = () => useContext(UsernameContext)

export {UsernameContext, UsernameProvider, useUsername}