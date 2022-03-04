import React from "react";
import "./BotonOperacion.css";

const BotonOperacion = ({ operator, onPress }) => {
  return (
    <div>
      <span className="boton-operacion" onClick={() => onPress(operator)}>
        {operator}
      </span>
    </div>
  );
};

export default BotonOperacion;
