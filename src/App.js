import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Board from './components/Board';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Game/>
        <Button/>
        <Board/>
      </header>
    </div>
  );
}

export default App;
