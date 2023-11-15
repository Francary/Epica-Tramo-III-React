import { useState, useEffect } from "react";

const Live = () => {
  // cuando se crea el componente.
  const [live, setLive] = useState("se monta");

  useEffect(() => {
    // cuando se actualiza el componente.
    setLive("se actualiza");

    // cuando se desmonta el componente.
    return () => {
      setLive("se desmonta");
    };
  }, []);

  return <div>Hola: {live}</div>;
};
export {Live};