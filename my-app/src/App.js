import logo from './logo.svg';
import './App.css';

function addOne() {
  window.alert("TODO : Call to backend to add one !!!");
}
function removeOne() {
  window.alert("TODO : Call to backend to remove one !!!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current count : <code>0</code>
        </p>
        <div class="boutonss">
          <button class="mybtonplus" onClick={addOne}> + 1 </button>
        </div>
      </header>
    </div>
  );
}

export default App;
