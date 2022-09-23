import React from 'react';
import './App.css';

import {
  Counter,
  GenericButton,
  GenericContainer,
  GenericInput,
  GenericProductCard,
  GenericSelect,
  Navbar,
  ProductStatusCard,
  StatusButton,
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StatusButton status="ENTREGUE" />
      <StatusButton status="PREPARANDO" />
      <StatusButton status="PENDENTE" />
      <GenericButton readLine="Primário" variant="" bs="6" lt="26" />
      <GenericButton readLine="Secundário" variant="primary" bs="6" lt="26" />
      <GenericButton readLine="Terciário" variant="secondary" bs="6" lt="26" />
      <GenericInput name="test" placeholder="Sou o text" />
      <GenericSelect name="test" />
      <ProductStatusCard
        userRole="seller"
        address="Rua Vila Bela,  Bairro Gurupi, 670"
        price="00,00"
        date="DD/MM/AA"
        orderId="0001"
      />
      <Counter description="Latinha de cerveja" />
      <GenericProductCard
        description="test"
        price="2,20"
        name="Cerveja"
        img="https://www.imigrantesbebidas.com.br/bebida/images/products/full/222-cerveja-heineken-long-neck-330ml.jpg"
      />
      <GenericContainer
        pageName="Detalhes do Pedido"
        userType="vendedor"
      />
    </div>
  );
}

export default App;
