const TaskItem = ({title, description,done}) => {

    return (
            <div class="col-sm-3 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <a href="#" class={`btn ${done? "btn-primary" : "btn-danger"} `}>{done ? "Terminado" : "Pendiente"}</a>
                    </div>
                </div>
            </div>
        
    )
}

export{TaskItem}

