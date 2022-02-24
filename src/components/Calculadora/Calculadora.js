
//1.- primero las importaciones
import React, {Component} from "react";
import "./Calculadora.css"

//2.- definimos el componente como clase
class Calculadora extends Component{
    constructor(props){
        super(props);
        //aqui definimos el estado o los estados del compon
        this.state = {
            operando1 : "",
            operando2 : "",
            resultado : 0
        }
    }

    operar = (tipoOperacion) => {
        const {operando1, operando2} = this.state; // destructurando
        let resultadoOperacion = 0;
        switch(tipoOperacion){
            case '+': 
            resultadoOperacion = parseInt(operando1) + parseInt(operando2);
            break;
            case '-':
            resultadoOperacion = parseInt(operando1) - parseInt(operando2);
            break;
            case '*':
            resultadoOperacion = parseInt(operando1) * parseInt(operando2);
            break;
            case '/':
            resultadoOperacion = parseInt(operando1) / parseInt(operando2);
            break;
        }
        this.setState({resultado: resultadoOperacion})
    }

    
    render(){ // funcion simpre implementarlo en un componente como clase!!!
        const {operando1, operando2, resultado} = this.state; // usando destructuracion

        //siempre retornar un pedazo de interfaz
        return <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h2>Calculadora!!!!</h2>{/* centrar este titulo con flexbox */}
                <div>
                    <div>
                        <input 
                            className="input" 
                            type="number" 
                            value={operando1} 
                            onChange={(e) => this.setState({operando1: e.target.value})}
                        />
                        <input 
                            className="input" 
                            type="number" 
                            value={operando2} 
                            onChange={(e) => this.setState({operando2: e.target.value})}
                        />
                    </div>
                    <div className="buttons-container">
                        <button className="button" onClick={() => this.operar('+')}>+</button>
                        <button className="button" onClick={() => this.operar('-')}>-</button>
                        <button className="button" onClick={() => this.operar('*')}>*</button>
                        <button className="button" onClick={() => this.operar('/')}>/</button>
                    </div>
                    <div className="title-xl">
                        resultado:
                    </div>
                    <div className="result">
                        {resultado}
                    </div>
                </div>
            </div>
        
    }
}

//exportamos
export default Calculadora;
