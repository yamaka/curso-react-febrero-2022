import React from "react";
import "./BotonOperacion.css";

const BotonOperacion = ({ operator, onPress }) => {
  return (
    <div className="boton-operacion">
      <span onClick={() => onPress(operator)}>{operator}</span>
    </div>
  );
};

export default BotonOperacion;
