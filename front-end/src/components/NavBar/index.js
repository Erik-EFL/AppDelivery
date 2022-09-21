import React from 'react';
import * as Styles from './styles';

const userRole = 'customer';

const renderPerUserRole = (role) => {
  if (role === 'customer') {
    return (
      <Styles.Box direction="row">
        <Styles.SimpleButton variant="simple">
          PRODUTOS
        </Styles.SimpleButton>
        <Styles.SimpleButton variant="simple">
          MEUS PEDIDOS
        </Styles.SimpleButton>
      </Styles.Box>
    );
  }
  if (role === 'administrator') {
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

function Navbar() {
  return (
    <Styles.NavBarContainer>
      <Styles.Box direction="row">
        {renderPerUserRole(userRole)}
      </Styles.Box>
      <Styles.Box direction="row">
        <Styles.UsernameTextContainer>
          <Styles.UsernameText>
            Nome de Usuário
          </Styles.UsernameText>
        </Styles.UsernameTextContainer>
        <Styles.SimpleButton variant="logout">
          Sair
        </Styles.SimpleButton>
      </Styles.Box>
    </Styles.NavBarContainer>
  );
}

export default Navbar;
