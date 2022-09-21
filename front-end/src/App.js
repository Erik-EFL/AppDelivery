import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import StatusButton from './components/StatusButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StatusButton status="ENTREGUE" />
      <StatusButton status="PREPARANDO" />
      <StatusButton status="PENDENTE" />
    </div>
  );
}

export default App;
