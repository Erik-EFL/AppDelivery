import React from 'react';
import { useSelector } from 'react-redux';
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

function GenericContainer() {
  const { role } = useSelector((state) => state.userAuthReducer);
  const pageName = 'Detalhes do Pedido';
  return (
    <>
      <Navbar />
      <Styles.Container>
        <header><h1>{`${pageName}`}</h1></header>
        {selectedPage(role, pageName)}
      </Styles.Container>
    </>
  );
}

export default GenericContainer;
