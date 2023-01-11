import logo from './logo.svg';
import './App.css';
import Create from './components/create';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="main">
          <h2 className="main-header">React Tv Operações CRUD</h2>
        </div>

        <div>
          <Create/>
        </div>
      </header>
    </div>
  );
}

export default App;
