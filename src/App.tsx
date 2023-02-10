import Pokemon from './features/pokemon/Pokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
