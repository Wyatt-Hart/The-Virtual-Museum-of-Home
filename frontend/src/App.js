import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'


function App() {

  const [testVar, setTestVar] = useState('Nothin yet')

  useEffect(() => {
    fetch('/api/exhibits')
      .then((res) => res.text())
      .then((data) => setTestVar(data))
  }, [])

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
        <h1>
          {testVar}
        </h1>
      </header>
    </div>
  );
}

export default App;
