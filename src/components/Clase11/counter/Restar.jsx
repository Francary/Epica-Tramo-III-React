import {  useConter } from "../../../providers/CounterProvider.jsx";

const Restar = () => {
  const {restar} = useConter()
    return (
    <>
    <button  className="btn btn-danger m-5" onClick={restar} > Restar </button>
    </>
    )
  };

  export {Restar}