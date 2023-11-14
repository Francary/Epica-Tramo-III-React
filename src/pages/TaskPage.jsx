import { TaskItem } from "../components/TaskItem.jsx"

const taskList =[
    {
        id:1,
        title: "Tarea 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, dignissimos!",
        done: true
    },
    {
        id:2,
        title: "Tarea 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima.",
        done: false
    },
    {
        id:3,
        title: "Tarea 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, assumenda.",
        done: false
    },
]

const TaskPage = () => {
    return (
        <div className="row">
            {
                taskList.map((task) =>{ 
                    return (
                        <TaskItem key={task.id} title={task.title} description={task.description} done={task.done} ></TaskItem>
                        )         
            })         
        }
        </div>
    )}        
        

    



export {TaskPage}