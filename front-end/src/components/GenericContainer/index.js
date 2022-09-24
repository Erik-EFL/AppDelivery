import PropTypes from 'prop-types';
import React from 'react';
import TableBar from '../GenericTable/TableContainer';
import * as Styles from './styles';
import InfoBar from './subComponents/BarContainer';

const selectedPage = (page, role) => {
  if (page === 'Detalhes do Pedido' && role === 'comprador') {
    return (
      <main>
        <InfoBar pageName="" userRole="" date="" orderId="" />
        <TableBar pageName="" userRole="" />
      </main>
    );
  }
  if (page === 'Detalhes do Pedido' && role === 'vendedor') {
    return (
      <main>
        <InfoBar pageName="" userRole="" date="" orderId="" />
        <TableBar pageName="" userRole="" />
      </main>
    );
  }
  if (page === 'Finalizar Pedido') {
    return (
      <Styles.Container>
        <header>Detalhes e Endereço para Entrega</header>
        <main>
          <TableBar pageName={ page } userRole={ role } />
        </main>
      </Styles.Container>
    );
  }
};

function GenericContainer({ pageName, userType }) {
  return (
    <Styles.Container>
      <header>
        <h1>{`${pageName}`}</h1>
      </header>
      {selectedPage(pageName, userType)}
    </Styles.Container>
  );
}

GenericContainer.propTypes = {
  pageName: PropTypes.string,
  userType: PropTypes.string,
}.isRequired;

export default GenericContainer;
