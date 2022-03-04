import React from "react";
import "./BotonOperacion.css";

const BotonOperacion = ({ operator, onPress }) => {
  return (
    <div>
      <button className="boton-operacion" onClick={() => onPress(operator)}>
        {operator}
      </button>
    </div>
  );
};

export default BotonOperacion;
