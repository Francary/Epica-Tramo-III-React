import { useState } from "react"

const TaskItem = ({title, description,done}) => {

    const [isCompleted , setCompleted ] = useState(done)

    return (
            <div className="col-sm-3 mb-3 mb-sm-0">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <button onClick={()=> setCompleted(!isCompleted)} className={`btn ${isCompleted? "btn-primary" : "btn-danger"} `}> {isCompleted ? "Terminado" : "Pendiente"} </button> 
                    </div>
                </div>
            </div>
        
    )
}

export{TaskItem}

