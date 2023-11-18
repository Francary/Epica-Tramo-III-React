import { useRef } from "react"
import { useTasks } from "../../hooks/Clase12/useTasks.js"



const Tasks = ( ) => {
    const {tasks , createTask , deleteTask, completedTask} = useTasks()
    const formRef = useRef(null)

    return(  
    <>   
        <form 
            ref={formRef}
            onSubmit={(e)=>{
            e.preventDefault()
            const formData = new FormData(e.target);
            const title = formData.get("title");
            createTask(title)
           formRef.current.reset()
        }}>

            <input type="text" placeholder="My task title" name="title"/>
            <button className="btn btn-primary" type="submit"> Crear</button>
        </form>
        
        <hr/>
        {tasks.map((task) =>{
            
    return(
        <div key={task.id} className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <button onClick={() => completedTask(task.id)}  className={`btn ${task.completed? "btn-primary" : "btn-danger"} `}> {task.completed? "Terminado" : "Pendiente"} </button> 
                </div>
                    <button onClick={() => deleteTask(task.id)} className="btn btn-warning">Eliminar</button>
            </div>
        </div>
        )
    })}

    </>
  )
}

export {Tasks}




