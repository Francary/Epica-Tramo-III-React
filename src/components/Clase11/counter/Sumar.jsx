import {  useConter } from "../../../providers/CounterProvider.jsx";

const Sumar = () => {
  const {sumar} = useConter()
    return (
    <>
    <button  className="btn btn-primary m-5" onClick={sumar}> Sumar </button>
    </>
    )
  };

  export {Sumar}