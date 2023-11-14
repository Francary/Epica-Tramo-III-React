import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage.jsx"
import { ProfilePage } from "./ProfilePage.jsx"
import { TaskPage } from "./TaskPage.jsx"
import { TaskByIdPage } from "./TaskByIdPage.jsx"
import { Form } from "../components/Form.jsx"
import { Counter } from "../components/Counter.jsx"
import { Form2 } from "../components/Form2.jsx"
import { Efectos } from "../components/Efectos.jsx"
import { CicloDeVida } from "../components/CicloDeVida.jsx"
import { Counter2 } from "../components/Counter2.jsx"
import { TaskJson } from "./TaskJson.jsx"
import { Form3 } from "../components/Form3.jsx"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/task" element={<TaskPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/login" element={<Form/>}/>
            <Route path="/login2" element={<Form2/>}/>
            <Route path="/login3" element={<Form3/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/counter2" element={<Counter2/>}/>
            <Route path="/efectos" element={<Efectos/>}/>
            <Route path="/ciclo-de-vida" element={<CicloDeVida/>}/>
            <Route path="/task2" element={<TaskJson/>}/>
            <Route path="/task2/:taskId" element={<TaskByIdPage/>}/>

        </Routes>

    )
}

export {Router}