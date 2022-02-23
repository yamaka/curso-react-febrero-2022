
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

    suma = () => {
        const {operando1, operando2} = this.state;
        const res = parseInt(operando1) + parseInt(operando2);
        this.setState({resultado: res})
    }

    render(){
        const {operando1, operando2, resultado} = this.state;
        return <div>
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
                        <button className="button" onClick={() => this.suma()}>+</button>
                        <button className="button">-</button>
                        <button className="button">*</button>
                        <button className="button">/</button>
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
