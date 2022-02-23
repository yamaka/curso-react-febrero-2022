import React from 'react'
import Zanahoria from '../Zanahoria/Zanahoria'

function Zanahorias({cantidad, titulo}) { // destructuracion implicita de las props
//function Zanahorias(props) { 
    //const {cantidad, titulo} = props; // destructuracion explicita
    const arr = new Array(cantidad);
    arr.fill(0);

    //forma1
    /* const imprimir = () => {
        const arr = new Array(props.cantidad);
        arr.fill(0);
        return arr.map(() => <Zanahoria/>) // en cada iteracion esta pintando el componente zanahoria
    } */
    //tarea encontrar otra forma de pintar las n zanahorias
  return (
    <div>
        <h2>{titulo}</h2>
       {arr.map(() => <Zanahoria/>)}
        
    </div>
  )
}

export default Zanahorias