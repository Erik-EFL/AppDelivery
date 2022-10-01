import React from 'react';

import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';

import Checkout from '../pages/Checkout';
import Marketplace from '../pages/marketplace';
import OrderDetails from '../pages/OrderDetails/index';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Navigate to="/login" replace /> }
        />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/login" element={ <SignIn /> } />
        <Route
          path="/customer/products"
          element={ <Marketplace /> }
        />
        <Route
          path="/customer/checkout"
          element={ <Checkout userRole="customer" /> }
        />
        <Route
          path="/customer/orders"
          element={ <OrderDetails userRole="customer" /> }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
