import React from 'react';
import './App.css';
import {
  GenericContainer,
} from './components';
import AppRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <GenericContainer
        pageName="Detalhes do Pedido"
        userType="vendedor"
      />
      <AppRoutes />
    </div>
  );
}

export default App;
