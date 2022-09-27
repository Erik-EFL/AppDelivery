import PropTypes from 'prop-types';
import React from 'react';
import SimpleButton from '../GenericButton';
import InputGeneric from '../GenericInputs';
import GenericSelect from '../GenericSelect';
import TableBar from '../GenericTable/TableContainer';
import * as Styles from './styles';
import InfoBar from './subComponents/BarContainer';

const selectedPage = (role, page) => {
  if (role === 'costumer' && page === 'Detalhes do Pedido') {
    return (
      <main>
        <InfoBar pageName={ page } userRole={ role } />
        <TableBar pageName={ page } userRole={ role } />
      </main>
    );
  }
  if (role === 'vendedor' && page === 'Detalhes do Pedido') {
    return (
      <main>
        <InfoBar pageName={ page } userRole={ role } />
        <TableBar pageName={ page } userRole={ role } />
      </main>
    );
  }
  if (page === 'Finalizar Pedido') {
    return (
      <Styles.FinishOrderContainer>
        <section className="UpperTable">
          <TableBar pageName={ page } userRole={ role } />
        </section>
        <header><h1>Detalhes e Endereço para Entrega</h1></header>
        <Styles.ContainerInputs>
          <Styles.Box direction="row">
            <GenericSelect size="md" name="P. Vendedora Responsável" />
            <InputGeneric size="md" name="Endereço" placeholder="Seu endereço aqui" />
            <InputGeneric size="md" name="Número" placeholder="Número da residencia" />
          </Styles.Box>
          <Styles.Box style={ { display: 'flex', alignItems: 'center' } }>
            <SimpleButton readLine="FINALIZAR PEDIDO" />
          </Styles.Box>
        </Styles.ContainerInputs>
      </Styles.FinishOrderContainer>
    );
  }
};

function GenericContainer({ userType, pageName }) {
  return (
    <Styles.Container>
      <header><h1>{`${pageName}`}</h1></header>
      {selectedPage(userType, pageName)}
    </Styles.Container>
  );
}

GenericContainer.propTypes = {
  userType: PropTypes.string,
  pageName: PropTypes.string,
}.isRequired;

export default GenericContainer;
