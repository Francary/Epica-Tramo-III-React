import { Navbar } from "./components/Clase08/Navbar.jsx"
import { Router } from "./pages/Router.jsx"
import React from "react"

const App = () => {

    return( 
        <React.Fragment>
            <Navbar/>
            <Router />
        </React.Fragment>

         )    
}

export {App}