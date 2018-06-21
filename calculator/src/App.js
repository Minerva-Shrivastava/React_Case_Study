import React, { Component } from 'react';
import Calculator from './Components/calculator';
import ButtonGrid from './Components/buttonGrid';
import Header from './Components/header';

class App extends Component {
    render() {
    return (
      <div className="App">
        <Header/>
        <Calculator/>
      </div>
    );
  }
}

export default App;
