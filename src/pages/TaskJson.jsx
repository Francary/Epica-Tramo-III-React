import { TaskItem } from "../components/Clase08/TaskItem.jsx"
import { useState , useEffect } from "react"


const TaskJson = () => {
    const [taskList2 , setTaskList2] =useState([])

    useEffect (() =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/`)
        .then((res) => res.json())
        .then((data) => {
            setTaskList2(data)
        }) 


    })
    return (
        <div className="row">
            {
                taskList2.map((task) =>{ 
                    return (
                        <TaskItem key={task.id} title={task.title} description={task.id} done={task.completed} ></TaskItem>
                        )         
            })         
        }
        </div>
    )}      

export {TaskJson}