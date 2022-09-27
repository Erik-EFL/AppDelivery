import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Styles from './styles';

function Navbar({ role }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderPerUserRole = (userRole) => {
    if (userRole === 'customer') {
      return (
        <Styles.Box direction="row">
          <Styles.SimpleButton
            data-testid="customer_products__element-navbar-link-products"
            variant="simple"
          >
            PRODUTOS
          </Styles.SimpleButton>
          <Styles.SimpleButton
            variant="simple"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </Styles.SimpleButton>
        </Styles.Box>
      );
    }
    if (userRole === 'administrator') {
      return (
        <Styles.SimpleButton variant="simple">
          GERENCIAR USUÁRIOS
        </Styles.SimpleButton>
      );
    }
    return (
      <Styles.SimpleButton variant="simple">
        PEDIDOS
      </Styles.SimpleButton>
    );
  };

  return (
    <Styles.NavBarContainer>
      <Styles.Box direction="row">
        {renderPerUserRole(role)}
      </Styles.Box>
      <Styles.Box direction="row">
        <Styles.UsernameTextContainer>
          <Styles.UsernameText
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Nome de Usuário
          </Styles.UsernameText>
        </Styles.UsernameTextContainer>
        <Styles.SimpleButton
          variant="logout"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </Styles.SimpleButton>
      </Styles.Box>
    </Styles.NavBarContainer>
  );
}

Navbar.propTypes = {
  role: PropTypes.string,
}.isRequired;

export default Navbar;
