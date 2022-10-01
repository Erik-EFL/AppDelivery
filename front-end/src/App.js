import React from 'react';
import './App.css';
import AppRoutes from './Routes/Routes';
// import { GenericContainer } from './components/index';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <GenericContainer userRole="customer" /> */}
    </div>
  );
}

export default App;
