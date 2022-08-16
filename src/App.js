/*import logo from './logo.svg';
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
      </header>
    </div>
  );
}

export default App; */
import React, { Component } from "react"; 
import ReactDOM from "react-dom"; 

class App extends Component{
  constructor(){
    super(); 
    this.state = { data: [] }; 
  }

  async componentDidMount(){
    const response = await fetch ('https://api.coinmarketcap.com/v1/ticker/?limit=10'); 
    const json = await response.json(); 
    this.setState({ data: json})
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

