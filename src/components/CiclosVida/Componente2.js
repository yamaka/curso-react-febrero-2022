import React, { Component } from 'react'

export default class Componente2 extends Component {

    //primer ciclo de vida de un componente
    componentDidMount(){
        //ideal para hacer llamadas al servidor
        console.log("componentDidMount Componente2")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount Componente2")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate Comonente1");
        if(prevState.contador == 4){
            alert("cuidado vas a llegar a 5")
            this.setState({
                contador: 0
            }, ()=>{
                this.props.cambiarComponete();
            });
        }
    }

  render() {
    return (
      <div>Componente2!!! <div>tarea crear un contador y cuando llegue a 10 que vaya al componetne 1</div></div>
    )
  }
}
