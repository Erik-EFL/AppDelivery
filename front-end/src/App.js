import React from 'react';
import './App.css';
import SimpleButton from './components/GenericButton/index';
import GenericTextInput from './components/GenericInputs/index';
import GenericSelect from './components/GenericSelect';
import Navbar from './components/NavBar';
import StatusButton from './components/StatusButton';

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
    </div>
  );
}

export default App;
