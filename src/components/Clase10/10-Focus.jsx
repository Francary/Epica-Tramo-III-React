import { useRef } from "react"

const Focus =()=>{
    const inputRef = useRef(null)
    const handleClick = () =>{
        inputRef.current.focus()
    }

    return(
        <>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick} className="btn btn-primary m-5"> Focus  </button>
        </>
    )
}

export {Focus}