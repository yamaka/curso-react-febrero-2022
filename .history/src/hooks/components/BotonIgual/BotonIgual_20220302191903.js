import React from "react";

const BotonIgual = ({ onPress }) => {
  return (
    <button className="boton-numerico" onClick={() => onPress()}>
      =
    </button>
  );
};

export default BotonIgual;
