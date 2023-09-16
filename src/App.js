import logo from './logo.svg';
import './App.css';
import client from './components/mqtt';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    client.on("message", function (topic, message) {
      console.log(topic, message);
    })
    
    // client.publish('srec/lighton', JSON.stringify({ isOn: false }))
  }, [])
 function handleOn(e){
  client.publish('srec/lighton', JSON.stringify({ isOn: 'true' }))
  }
  function handleOff(e){
    client.publish('srec/lighton', JSON.stringify({ isOn: 'false' }))
    }
  return (
    <div className="App">
      <button onClick={handleOn} >click here</button>
      <button onClick={handleOff} >click here turn off </button>
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
      </header>
    </div>
  );
}

export default App;
