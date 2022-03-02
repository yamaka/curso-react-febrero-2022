import React from 'react'
import './Input.css'
//tarea que los numeros introduciodps vayan a la derecha

const Input = ({value}) => {
  return (
    <div className='input-container'><span>{value}</span></div>
  )
}

export default Input