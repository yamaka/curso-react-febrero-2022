import React from "react";
import "./BotonOperacion.css";

const BotonOperacion = ({ operator, onPress }) => {
  return (
    <button className="boton-operacion" onClick={() => onPress(operator)}>
      {operator}
    </button>
  );
};

export default BotonOperacion;
