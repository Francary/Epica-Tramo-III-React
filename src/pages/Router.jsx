import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage.jsx"
import { ProfilePage } from "./ProfilePage.jsx"
import { TaskPage } from "./TaskPage.jsx"
import { TaskByIdPage } from "./TaskByIdPage.jsx"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/task" element={<TaskPage/>}/>
            <Route path="/task/:taskId" element={<TaskByIdPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>

    )
}

export {Router}