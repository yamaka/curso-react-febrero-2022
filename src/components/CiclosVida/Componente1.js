import React, { Component } from 'react'

export default class Componente1 extends Component {

    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
    }

    //primer ciclo de vida de un componente
    componentDidMount(){
        //ideal para hacer llamadas al servidor
        console.log("componentDidMount Componente1")
    }
   

    getSnapshotBeforeUpdate(prevProps, prevState){
        if(prevState.contador == 4){
            return 1
        }
        return null;
    }


    //se ejecuta cuando se actualiza el estado o los estados del componente
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate Comonente1");
        if(snapshot !== null){
            alert("cuidado vas a llegar a 5")
            this.setState({
                contador: 0
            }, ()=>{
                this.props.cambiarComponete();
            });
        }
    }

    //el ultimo ciclo de vida
    componentWillUnmount(){
        //ideal para limpiar intervalos etc
        console.log("componentWillUnmount Componente1")
    }

  
    incrementar = () =>{
        const {contador} = this.state;
        this.setState({
            contador: contador + 1
        })
    }
  render() {
      const {contador} = this.state
    return (
      <div>Componente1!!!
            <div>contador: {contador}</div>
          <button onClick={() => this.incrementar()}>incrementar contador</button>
      </div>

    )
  }
}
