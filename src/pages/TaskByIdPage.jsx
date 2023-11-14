import { TaskItem } from "../components/TaskItem.jsx"
import { useTask } from "../hooks/useTask.js"

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