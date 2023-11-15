import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useTask = () => {
    const {taskId} = useParams()
    const [task , setTask] = useState([])

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
        .then((res) => res.json())
        .then((data) => {
            setTask(data)
        })
    },[taskId])
    return{task}
}

export{useTask}