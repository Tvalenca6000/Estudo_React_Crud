import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <h2 className="main-header">React Tv Operações CRUD</h2>

          <Routes>
            <Route path ='/create' element={<Create/>} />
            <Route path ='/read' element={<Read/>} />
            <Route path ='/update' element={<Update/>} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;
