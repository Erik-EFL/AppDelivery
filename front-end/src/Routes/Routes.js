import React from 'react';

import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';

import Checkout from '../pages/Checkout';
import Marketplace from '../pages/marketplace';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import OrderDetails from '../pages/OrderDetails';
import Admin from '../pages/admin';

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
        <Route path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
