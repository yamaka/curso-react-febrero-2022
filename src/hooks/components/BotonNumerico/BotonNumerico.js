import React from 'react'
import './BotonNumerico.css';
const BotonNumerico = ({value, onPress}) => {
  return (
    <button className='boton-numerico' onClick={()=>onPress(value)}>{value}</button>
  )
}

export default BotonNumerico