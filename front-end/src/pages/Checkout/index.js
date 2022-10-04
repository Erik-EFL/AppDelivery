import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  GenericButton,
  GenericInput,
  GenericSelect,
  Navbar,
  TableBar,
  TableInfo,
  ScrollContainer,
} from '../../components/index';
import { removeCheckoutItem, updatePrice } from '../../redux/actions/userActions';
import * as Styles from './style';

function Checkout() {
  const loginReducer = useSelector((state) => state.userAuthReducer);
  const { totalPrices, cart } = useSelector((state) => state.shoppingCartReducer);
  const { role } = loginReducer.user;
  const page = 'Finalizar Pedido';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteFromCart = (id) => {
    dispatch(removeCheckoutItem(id));
    dispatch(updatePrice());
  };

  useEffect(() => {
    if (cart.length === 0) navigate('/customer/products');
  }, [cart, navigate]);

  return (
    <>
      <Navbar />
      <Styles.CheckoutContainer>
        <header><h1>{`${page}`}</h1></header>
        <section className="upperTable">
          <TableBar pageName={ page } userRole={ role } />
          <ScrollContainer>
            {cart?.length > 0
              && cart.map((item) => (
                <TableInfo
                  key={ item.id }
                  productId={ item.id }
                  productName={ item.name }
                  quantidade={ item.qty }
                  unitValue={ (+item.price).toFixed(2) }
                  totalValue={ (+item.price * item.qty).toFixed(2) }
                  onClick={ () => deleteFromCart(item.id) }
                  pageName="Finalizar Pedido"
                />
              ))}
          </ScrollContainer>
          <div className="button-container">
            <GenericButton
              wdt="20.25"
              hgt="4"
              readLine={ `Total: R$ ${totalPrices.replace('.', ',')}` }
              bold
              fs="lg"
              disabled={ totalPrices === '0,00' }
              data-testid="customer_order_details__element-order-total-price"
            >
              {/*  */}
            </GenericButton>
          </div>
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

export default Checkout;
