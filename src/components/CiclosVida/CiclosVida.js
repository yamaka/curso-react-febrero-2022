import React, { Component } from 'react'
import Componente1 from './Componente1'
import Componente2 from './Componente2'

export default class CiclosVida extends Component {
    constructor(props){
        super(props)
        this.state = {
            componente: 1
        }
    }
    //primer ciclo de vida de un componente
    componentDidMount(){
        //ideal para hacer llamadas al servidor
    }
    cambiarComponete = () =>{
        const {componente} = this.state;
        if(componente == 1){
            this.setState({
                componente: 2
            })
        }else{
            this.setState({
                componente: 1
            })
        }  
    }

  render() {
      const {componente} = this.state;
    return (
      <div><br />
      <br />
      <br />
      <br /><br /><br /><br /><br />
      <h1>Ciclos de vida de un componente</h1>
        {componente == 1 ?  <Componente1 cambiarComponete={this.cambiarComponete}/> : <Componente2 cambiarComponete={this.cambiarComponete}/>}
        <br /><br /><br />
        <button onClick={()=> this.cambiarComponete()}> cambiar</button>
    </div>
      
    )
  }
}
