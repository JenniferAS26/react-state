import React from 'react';
import { UseState } from './UseState.js'; // No Falla realmente
import { ClassState } from './ClassState.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
    </div>
  );
}

export default App;
