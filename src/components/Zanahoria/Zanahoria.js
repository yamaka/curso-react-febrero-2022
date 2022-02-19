//importacion de los paquetes como por ejemplo react
import react from 'react';
import "./Zanahoria.css";
/*hay 2 tipos de componentes generalmente
    1. sin estado
    2. con estado
*/
//1.componente sin estado es una funcion que retorna html directamente con jsx


//crear el componente funcional con estado o sin estado
 const Zanahoria = () =>{
    //logica de pintado, manejo de eventos, form , etc

    //render
    return <div>
                <h1 className='zanahoria'>ZANAHORIA</h1>
            </div>
}

export default Zanahoria;


