import { useState } from "react"

const Form = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = (e) => {
        console.log("Bienvenido")
        e.preventDefault()
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="col-sm-3 text-bg-secondary m-auto p-5 rounded-5" action="">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control"  placeholder="name@example.com" value={email} onChange = {(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control"  placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>

            <button className="btn btn-primary btn-sm">Login</button>

        </form>
        </>
    )
}

export {Form}