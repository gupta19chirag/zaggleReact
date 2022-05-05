import logo from './logo.svg';
import './App.css';
import React from 'react';
 //class develope ke.
class App extends React.Component {
  constructor(props){
    super();
     this.state = {Frequency:100,Name:''};
//we need to bind every function that is defined.So after creating setVal function I have done this.
     this.setval = this.setval.bind(this);
     this.handle1 = this.handle1.bind(this);
  }
 
  handle1(e){
   this.setState({Name:e.target.value});
    
  }
  //This function is changing the value when the button defined is pressed.
  setval(){
    this.setState({Frequency:500});
 
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Welcome to React JS 1   mr {this.props.name}
          Frequency {this.state.Frequency}
          Name state{this.state.Name}
        </p>
      <input value ={this.state.Name} type="text" placeholder ="Enter name" onChange ={this.handle1}></input>
        <button onClick ={this.setval}>Click me</button>
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
  )};
}
 
export default App;