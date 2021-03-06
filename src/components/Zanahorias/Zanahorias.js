import React from 'react'
import Zanahoria from '../Zanahoria/Zanahoria'

function Zanahorias({cantidad, titulo}) { // destructuracion implicita de las props
//function Zanahorias(props) { 
    //const {cantidad, titulo} = props; // destructuracion explicita
    const array = new Array(cantidad);
    array.fill(0);

    //forma1
    /* const imprimir = () => {
        const arr = new Array(props.cantidad);
        arr.fill(0);
        return arr.map(() => <Zanahoria/>) // en cada iteracion esta pintando el componente zanahoria
    } */
    //tarea encontrar otra forma de pintar las n zanahorias
    //esta pintando al final de este array
    //[0,0,0] array
    // 0,1,2 indices
    //con sus indidces
    
  return (
    <div>
        <h2>{titulo}</h2>
       {array.map((el, index) => <Zanahoria key={index}/>)}
        
    </div>
  )
}

export default Zanahorias