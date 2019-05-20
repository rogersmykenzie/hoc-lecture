import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Typing from './Typing';

function App() {
  return (
    <div className="App">
      <Person 
      name="Mykenzie"
      age={21}
      isTall={false}
      />
      <Typing />
    </div>
  );
}

export default App;
