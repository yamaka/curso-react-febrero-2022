import React from "react";

function BotonRefrescar({ value, on }) {
  return (
    <button className="boton-numerico" onClick={() => onPress(value)}>
      {value}
    </button>
  );
}

export default BotonRefrescar;
