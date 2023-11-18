import { tasksTypes } from "../../types/Clase12/tasksTypes.js"

const reducerTasks = ( state, action) => {

    if( action.type === tasksTypes.CREATE) {
        
        const{title} = action.payload
        if(!title) return state
        return [ 
            ...state, {
                id: Date.now(),
                completed: true,
                title: title,
            }
        ]
    }

    if(action.type === tasksTypes.DELETE){
        const {taskId} = action.payload
        return state.filter( (task) => task.id !== taskId )
    }

    if (action.type === tasksTypes.CHECK) {
        const {taskId} = action.payload
        return state.map((task) =>
              task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          );           
      }

    return state
}


export {reducerTasks}