import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import GenericContainer from './components/GenericContainer';

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
      <GenericSelect name="test" />
      <Counter description="Latinha de cerveja" />
      <GenericProductCard description="test" price="2,20" name="Cerveja" img="https://www.imigrantesbebidas.com.br/bebida/images/products/full/222-cerveja-heineken-long-neck-330ml.jpg" /> */}
      <GenericContainer pageName="Detalhes do pedido" />
    </div>
  );
}

export default App;
