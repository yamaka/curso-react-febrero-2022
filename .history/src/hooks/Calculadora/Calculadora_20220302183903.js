//componentes como funcionales con estado
import React, { useState } from "react";
import Input from "../components/Input/Input";
import BotonNumerico from "../components/BotonNumerico/BotonNumerico";
import BotonOperacion from "../components/BotonOperacion/BotonOperacion";
import BotonIgual from "../components/BotonIgual/BotonIgual";

import "./Calculadora.css";

const Calculadora = () => {
  const [display, setDisplay] = useState("0");
  const [operandoA, setOperandoA] = useState(0);
  const [operandoB, setOperandoB] = useState(0);
  const [operacion, setOperacion] = useState("+");

  const onPressNumerico = (numero) => {
    if (operandoA == 0) {
      setOperandoA(numero);
      setDisplay(numero);
    } else {
      setOperandoB(numero);
      setDisplay(display + numero);
    }
  };

  const onPressOperacion = (operacion) => {
    setOperacion(operacion);
    setDisplay(display + operacion);
  };

  const calcular = () => {
    switch (operacion) {
      case "+":
        setDisplay((parseInt(operandoA) + parseInt(operandoB)).toString());
    }
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="calculadora-container">
        <Input value={display} />
        <br />
        <hr />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <div style={{ diplay: "flex", flex: 1, flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "row", width: "480px" }}
            >
              <BotonNumerico value="9" onPress={onPressNumerico} />
              <BotonNumerico value="8" onPress={onPressNumerico} />
              <BotonNumerico value="7" onPress={onPressNumerico} />
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "480px" }}
            >
              <BotonNumerico value="6" onPress={onPressNumerico} />
              <BotonNumerico value="5" onPress={onPressNumerico} />
              <BotonNumerico value="4" onPress={onPressNumerico} />
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "480px" }}
            >
              <BotonNumerico value="3" onPress={onPressNumerico} />
              <BotonNumerico value="2" onPress={onPressNumerico} />
              <BotonNumerico value="1" onPress={onPressNumerico} />

              {/* <div>
                <BotonNumerico value="0" onPress={onPressNumerico} />
                <BotonIgual onPress={calcular} />
              </div> */}
            </div>
          </div>
          <div
            style={{ diplay: "flex", flexDirection: "column", width: "30%" }}
          >
            <BotonOperacion operator="+" onPress={onPressOperacion} />
            <BotonOperacion operator="-" onPress={onPressOperacion} />
            <BotonOperacion operator="*" onPress={onPressOperacion} />
            <BotonOperacion operator="/" onPress={onPressOperacion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
