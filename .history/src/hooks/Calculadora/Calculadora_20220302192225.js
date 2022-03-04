//componentes como funcionales con estado
import React, { useState } from "react";
import Input from "../components/Input/Input";
import BotonNumerico from "../components/BotonNumerico/BotonNumerico";
import BotonOperacion from "../components/BotonOperacion/BotonOperacion";
import BotonIgual from "../components/BotonIgual/BotonIgual";
import BotonRefrescar from "../components/BotonRefrescar/BotonRefrescar";

import "./Calculadora.css";

const Calculadora = () => {
  const [display, setDisplay] = useState("0");
  const [operandoA, setOperandoA] = useState(0);
  const [operandoB, setOperandoB] = useState(0);
  const [operacion, setOperacion] = useState("+");

  //   se puede tambien con objetos
  //   const [calculadora, setCalculadora] = useState({
  //     display: "0",
  //     operandoA: 0,
  //     operandoB: 0,
  //     operacion: "+",
  //   });

  //   setCalculadora({ ...calculadora, ...{ display: "0" } });

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
      case "-":
        setDisplay((parseInt(operandoA) - parseInt(operandoB)).toString());
      case "*":
        setDisplay((parseInt(operandoA) * parseInt(operandoB)).toString());
      case "/":
        setDisplay((parseInt(operandoA) / parseInt(operandoB)).toString());
    }
  };

  const onPressRefresh = () => {
    setDisplay("0");
    setOperandoA(0);
    setOperandoB(0);
    setOperacion("+");
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="calculadora-container">
        <Input value={display} />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BotonNumerico value="9" onPress={onPressNumerico} />
              <BotonNumerico value="8" onPress={onPressNumerico} />
              <BotonNumerico value="7" onPress={onPressNumerico} />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BotonNumerico value="6" onPress={onPressNumerico} />
              <BotonNumerico value="5" onPress={onPressNumerico} />
              <BotonNumerico value="4" onPress={onPressNumerico} />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BotonNumerico value="3" onPress={onPressNumerico} />
              <BotonNumerico value="2" onPress={onPressNumerico} />
              <BotonNumerico value="1" onPress={onPressNumerico} />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BotonRefrescar value="C" onPress={onPressRefresh} />
              <BotonNumerico value="0" onPress={onPressNumerico} />
              <BotonIgual onPress={calcular} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
