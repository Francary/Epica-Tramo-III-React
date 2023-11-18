import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage.jsx"
import { TaskPage } from "../components/Clase08/08-Task.jsx"
import { TaskByIdPage } from "./TaskByIdPage.jsx"
import { Form } from "../components/Clase09/Form.jsx"
import { Counter } from "../components/Clase09/Counter.jsx"
import { Form2 } from "../components/Clase09/Form2.jsx"
import { Efectos } from "../components/Clase09/Efectos.jsx"
import { CicloDeVida } from "../components/Clase09/CicloDeVida.jsx"
import { Counter2 } from "../components/Clase09/Counter2.jsx"
import { TaskJson } from "./TaskJson.jsx"
import { Form3 } from "../components/Clase09/Form3.jsx"
import { Clase10Page } from "./Clase10Page.jsx"
import { Clase11Page } from "./Clase11Page.jsx"
import { Clase12Page } from "./Clase12Page.jsx"
import { Clase08Page } from "./Clase08Page.jsx"
import { Clase09Page } from "./Clase08Page copy.jsx"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/clase08" element={<Clase08Page/>}/>
            <Route path="/clase09" element={<Clase09Page/>}/>
            <Route path="/login" element={<Form/>}/>
            <Route path="/login2" element={<Form2/>}/>
            <Route path="/login3" element={<Form3/>}/>      
            <Route path="/task2" element={<TaskJson/>}/>
            <Route path="/task2/:taskId" element={<TaskByIdPage/>}/>
            <Route path="/clase10" element={<Clase10Page/>}/>
            <Route path="/clase11" element={<Clase11Page/>}/>
            <Route path="/clase12" element={<Clase12Page/>}/>

        </Routes>

    )
}

export {Router}