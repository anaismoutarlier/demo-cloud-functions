import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

function App() {
  const [text, setText] = useState("hello world !")

  const getMessage = async () => {
    const data = await fetch('/.netlify/functions/hello')
    const json = await data.json()
    
    const { message } = json
    setText(message)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { text }
        <button onClick={ getMessage }>CLICK</button>
      </header>
    </div>
  );
}

export default App;
