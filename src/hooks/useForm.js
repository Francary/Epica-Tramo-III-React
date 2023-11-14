import { useState } from "react"

const useForm = (valorInicial) => {

    const [form , setForm] = useState(valorInicial)


    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })}
    return { form , handleChange}    
}

export {useForm}