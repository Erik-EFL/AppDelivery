import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Products from '../pages/products';

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
        <Route path="customer/products" element={ <Products /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/login" element={ <SignIn /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
