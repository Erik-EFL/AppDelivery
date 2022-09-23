import PropTypes from 'prop-types';
import React from 'react';
import TableBar from '../GenericTable/TableContainer';
import * as Styles from './styles';
import InfoBar from './subComponents/BarContainer';

const selectedPage = (page, role) => {
  if (page === '') {
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
          <TableBar pageName="" userRole="" />
        </main>
      </Styles.Container>
    );
  }
};

const testRole = '';
function GenericContainer({ pageName }) {
  return (
    <Styles.Container>
      <header>{`${pageName}`}</header>
      {selectedPage(pageName, testRole)}
    </Styles.Container>
  );
}

GenericContainer.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default GenericContainer;
