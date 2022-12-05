import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="boutonss">
          <button class="mybtonplus"> + 1 </button>
          <button class="mybtonmoins"> - 1 </button>
        </div>
      </header>
    </div>
  );
}

export default App;
