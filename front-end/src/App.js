import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import GenericProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*       <StatusButton status="ENTREGUE" />
      <StatusButton status="PREPARANDO" />
      <StatusButton status="PENDENTE" />
      <SimpleButton readLine="Primário" variant="" />
      <SimpleButton readLine="Secundário" variant="primary" />
      <SimpleButton readLine="Terciário" variant="secondary" />
      <GenericTextInput name="test" placeholder="Sou o text" />
      <GenericSelect name="test" /> */}
      <GenericProductCard />
    </div>
  );
}

export default App;
