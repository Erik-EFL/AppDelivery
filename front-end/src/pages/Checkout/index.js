import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GenericButton, GenericInput, GenericSelect, Navbar, TableBar
} from '../../components/index';
import * as Styles from './style';

function Checkout({ userRole }) {
  const loginReducer = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  console.log(loginReducer.name);

  /*   const orderSubmit = () => {

  }; */

  useEffect(() => {
    dispatch();
  });

  const page = 'Finalizar Pedido';
  return (
    <>
      <Navbar role={ userRole } />
      <Styles.CheckoutContainer>
        <header><h1>{`${page}`}</h1></header>
        <section className="UpperTable">
          <TableBar pageName={ page } userRole={ userRole } />
        </section>
        <header><h1>Detalhes e Endereço para Entrega</h1></header>
        <Styles.CheckoutInputs>
          <Styles.Box direction="row">
            <GenericSelect size="md" name="P. Vendedora Responsável" />
            <GenericInput size="md" name="Endereço" placeholder="Seu endereço aqui" />
            <GenericInput size="md" name="Número" placeholder="Número da residencia" />
          </Styles.Box>
          <Styles.Box style={ { display: 'flex', alignItems: 'center' } }>
            <GenericButton readLine="FINALIZAR PEDIDO" />
          </Styles.Box>
        </Styles.CheckoutInputs>
      </Styles.CheckoutContainer>
    </>
  );
}

Checkout.propTypes = {
  userRole: PropTypes.string,
}.isRequired;

export default Checkout;
