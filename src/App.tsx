import logo from './logo.svg';
import Pokemon from './features/pokemon/Pokemon';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pokemon />
        <Counter />
        <div>learn</div>
      </header>
    </div>
  );
}

export default App;
