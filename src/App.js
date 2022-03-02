import logo from './logo.svg';
import './App.css';
import Zanahorias from './components/Zanahorias/Zanahorias';
import Lechuga from './components/Lechuga/Lechuga';
import Calculadora from './components/Calculadora/Calculadora';
import CiclosVida from './components/CiclosVida/CiclosVida';
import CalculadoraHooks from './hooks/Calculadora/Calculadora'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* componentes sin estado  */}
      {/* <h1>Componentes sin estado  funcionales</h1>
      <h2>Verduleria</h2>
      <Zanahorias titulo={"zanahorias super economicas"} cantidad={3} />  */}
        {/* hacer lo mismo con lechugas */}
      {/* componentes con estado */}
      {/* <h1>componentes con estado como clase</h1> 
      <Calculadora/> */}
      {/* <CiclosVida/> */}
      <CalculadoraHooks/>
    </div>
  );
}

export default App;
