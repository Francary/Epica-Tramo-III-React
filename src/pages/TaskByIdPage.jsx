import { TaskItem } from "../components/Clase08/TaskItem.jsx"
import { useTask } from "../hooks/Clase09/useTask.js"

const TaskByIdPage = () => {

    const {task} =  useTask()
    return (      
        <>
            <div className="row">
                <TaskItem key={task.id} title={task.title} description={task.id} done={task.completed} ></TaskItem>    
            </div>
        </>
    )
    
}


export {TaskByIdPage}