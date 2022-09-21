import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter description="Latinha de cerveja" />
    </div>
  );
}

export default App;
