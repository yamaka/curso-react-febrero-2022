import logo from './logo.svg';
import './App.css';
import Zanahorias from './components/Zanahorias/Zanahorias';
import Lechuga from './components/Lechuga/Lechuga';

function App() {
  return (
    <div>
      <h1>Verduleria</h1>
      <Zanahorias cantidad={10}/> 
      {/* hacer lo mismo con lechugas */}
    </div>
  );
}

export default App;
