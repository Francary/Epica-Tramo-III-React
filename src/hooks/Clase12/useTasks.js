import { useReducer } from "react"
import { reducerTasks } from "../../reducers/Clase12/taskReducers.js"
import { tasksTypes } from "../../types/Clase12/tasksTypes.js"

const initialState = [
    {
        id:1,
        title: "Mi primer tarea 2",
        completed:false, 
    }
]
 
const useTasks = () => {

    const [tasks, dispatch] = useReducer(reducerTasks, initialState);

    const createTask = (title) => {
        dispatch({ 
            type: tasksTypes.CREATE,
            payload:{
                title,
            }
        })
    }

    const deleteTask = (taskId) =>{
        dispatch({ 
            type: tasksTypes.DELETE,
            payload:{
                taskId,
            }
        })
    }
    const completedTask = (taskId) => {
        dispatch({ type: tasksTypes.CHECK ,
            payload:{
                taskId,
            }});
      };
    

    return {tasks, createTask , deleteTask , completedTask}
}

export {useTasks}