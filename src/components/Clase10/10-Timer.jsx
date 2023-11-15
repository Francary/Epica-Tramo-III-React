import { useState , useRef , useEffect} from "react"


const Timer = () => {
    const [conunter, setCounter] = useState(0)

    const timer = useRef(0)

          useEffect(() => {
            timer.current = setInterval( () =>{ 
                setCounter((conunter) => conunter+1)
            },1000)
        },[])

    const handelStar = () =>{     
            timer.current = setInterval( () =>{ 
                setCounter((conunter) => conunter+1)
            },1000)
    }

    const handleStop = () =>{
        clearInterval(timer.current)
        timer.conunter = 0
    }

    const handleReset = () =>{
        clearInterval(timer.current)
        timer.conunter = 0
        setCounter(0)
    }


    return (
        <>
        <p>Timer : {conunter}</p>
        <button onClick={handelStar} className="btn btn-primary m-1"> Iniciar  </button>
        <button onClick={handleStop} className="btn btn-primary m-1"> Detener  </button>
        <button onClick={handleReset} className="btn btn-primary m-1"> Reiniciar  </button>
        </>
    )
}

export {Timer}