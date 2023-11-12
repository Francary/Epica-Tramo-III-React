import { useParams } from "react-router-dom"

const TaskByIdPage = () => {

    const {taskId} = useParams()
    return (<div>El id es: {taskId}</div>)
}


export {TaskByIdPage}