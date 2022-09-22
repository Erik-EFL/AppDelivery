import React from 'react';
import './App.css';
import SimpleButton from './components/GenericButton/index';
import GenericTextInput from './components/GenericInputs/index';
import GenericSelect from './components/GenericSelect';
import Counter from './components/Counter';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StatusButton status="ENTREGUE" />
      <StatusButton status="PREPARANDO" />
      <StatusButton status="PENDENTE" />
      <SimpleButton readLine="Primário" variant="" />
      <SimpleButton readLine="Secundário" variant="primary" />
      <SimpleButton readLine="Terciário" variant="secondary" />
      <GenericTextInput name="test" placeholder="Sou o text" />
      <GenericSelect name="test" />
      <Counter description="Latinha de cerveja" />
    </div>
  );
}

export default App;
