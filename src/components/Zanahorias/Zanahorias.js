import React from 'react'
import Zanahoria from '../Zanahoria/Zanahoria'
function Zanahorias(props) {
    console.log("Za/nahorias props", props);
    const imprimir = () => {
        const arr = new Array(props.cantidad);
        arr.fill(0);
        return arr.map(() => <Zanahoria/>)
    }
    //tarea encontrar otra forma de pintar las n zanahorias
  return (
    <div>
        <h2>Zanahorias</h2>
        {imprimir()}
        
    </div>
  )
}

export default Zanahorias