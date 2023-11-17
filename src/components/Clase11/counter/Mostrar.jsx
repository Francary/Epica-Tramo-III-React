import {  useConter } from "../../../providers/CounterProvider.jsx";

const Mostrar = () => {
  const { counter} = useConter()
 
  return (
    <>
    <button  className="btn btn-warning m-5"> Mostrar: {counter} </button>
    </>
    )
  };

  export {Mostrar}