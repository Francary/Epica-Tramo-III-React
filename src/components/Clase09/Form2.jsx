import { useState } from "react"

const Form2 = () => {

    const [form , setForm] = useState({
        email:"",
        password:"",
    })


    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })}

    const handleSubmit = async (e) => {
            console.log("Bienvenido")
            e.preventDefault()
        }

    return (
        <>
        <form onSubmit={handleSubmit} className="col-sm-3 text-bg-warning m-auto p-5 rounded-5" action="">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address 2</label>
                <input type="email" name="email" className="form-control"  placeholder="name@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password 2</label>
                <input type="password" name="password" className="form-control"  placeholder="password" value={form.password} onChange={handleChange}  />
            </div>

            <button className="btn btn-primary btn-sm">Login 2</button>

        </form>
        </>
    )
}

export {Form2}