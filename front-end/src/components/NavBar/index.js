import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Styles from './styles';

function Navbar() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userAuthReducer);

  const logout = () => {
    localStorage.removeItem('user');
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
        {renderPerUserRole(user.role)}
      </Styles.Box>
      <Styles.Box direction="row">
        <Styles.UsernameTextContainer>
          <Styles.UsernameText
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {user.name}
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

export default Navbar;
