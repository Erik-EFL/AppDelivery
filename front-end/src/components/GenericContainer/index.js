import PropTypes from 'prop-types';
import React from 'react';
import TableBar from '../GenericTable/TableContainer';
import Navbar from '../NavBar';
import * as Styles from './styles';
import InfoBar from './subComponents/BarContainer';

const selectedPage = (role, page) => {
  if (role === 'customer') {
    return (
      <main>
        <InfoBar pageName={ page } userRole={ role } />
        <TableBar pageName={ page } userRole={ role } />
      </main>
    );
  }
  if (role === 'seller') {
    return (
      <main>
        <InfoBar pageName={ page } userRole={ role } />
        <TableBar pageName={ page } userRole={ role } />
      </main>
    );
  }
};

function GenericContainer({ userRole }) {
  const pageName = 'Detalhes do Pedido';
  return (
    <>
      <Navbar role={ userRole } />
      <Styles.Container>
        <header><h1>{`${pageName}`}</h1></header>
        {selectedPage(userRole, pageName)}
      </Styles.Container>
    </>
  );
}

GenericContainer.propTypes = {
  userRole: PropTypes.string,
}.isRequired;

export default GenericContainer;
