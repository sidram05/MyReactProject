import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name = "Sid" age = "28"/>                  
        <Person name = "Ram" age = "29">My Hobbies: Tennis </Person>
        <Person name = "Ragul" age = "30"/>
      </div>
    );
    // This above return gets complied to the below JS hence we use JSX
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React'));
  }
}

export default App;
