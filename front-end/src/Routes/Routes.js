import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Marketplace from '../pages/marketplace';

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
        <Route path="/login" element={ <SignIn /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route
          path="/customer/products"
          element={ <Marketplace userRole="customer" /> }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
