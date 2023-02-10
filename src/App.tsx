import Pokemon from './features/pokemon/Pokemon';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokemon />
        <Counter />
      </header>
    </div>
  );
}

export default App;
