import React, { Component } from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Redux Example</h1>
        </div>
        
        <BooksContainer />
      </div>
    );
  }
}

export default App;
