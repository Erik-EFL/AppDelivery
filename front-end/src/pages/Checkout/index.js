import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  GenericButton,
  GenericInput,
  GenericSelect,
  Navbar, ScrollContainer, TableBar,
  TableInfo,
} from '../../components/index';
import {
  clearCart,
  removeCheckoutItem,
  updatePrice,
} from '../../redux/actions/userActions';
import { orderCreate } from '../../services/api';
import * as Styles from './style';

function Checkout() {
  const sellers = [
    { id: 1, name: 'Fulana Pereira' },
    { id: 2, name: 'Erikão Lima' },
    { id: 3, name: 'Bodnar do Backend' },
  ];

  const [seller, setSeller] = useState(sellers[0]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState(0);

  const loginReducer = useSelector((state) => state.userAuthReducer);
  const { totalPrices, cart } = useSelector((state) => state.shoppingCartReducer);
  const { role, id } = loginReducer.user;
  const page = 'Finalizar Pedido';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteFromCart = (itemId) => {
    dispatch(removeCheckoutItem(itemId));
    dispatch(updatePrice());
  };

  const setCurrentSeller = (currentSeller) => {
    const response = sellers.find((item) => item.name === currentSeller);
    setSeller(response);
  };

  const orderSubmit = async (e) => {
    e.preventDefault();
    const data = {
      sellerId: seller.id,
      userId: id,
      products: cart.map((item) => ({
        productId: item.id,
        quantity: item.qty,
      })),
      totalPrice: totalPrices,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
    };
    await orderCreate(data).then((response) => {
      const saleId = response.data.id;
      navigate(`/orders/${saleId}`);
      localStorage.removeItem('cart');
      dispatch(clearCart());
    }).catch((err) => {
      console.log(err.response.data);
    });
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
              && cart.map((item, index) => (
                <TableInfo
                  key={ index }
                  productId={ index }
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
              dataTestid="customer_checkout__element-order-total-price"
            >
              {/*  */}
            </GenericButton>
          </div>
        </section>
        <header><h1>Detalhes e Endereço para Entrega</h1></header>
        <Styles.CheckoutInputs>
          <Styles.Box direction="row">
            <GenericSelect
              name="P. Vendedora Responsável"
              domId="customer_checkout__select-seller"
              value={ seller.name }
              onChange={ (e) => setCurrentSeller(e.target.value) }
              data={ sellers }
            />
            <GenericInput
              name="Endereço"
              placeholder="Seu endereço aqui"
              domId="customer_checkout__input-address"
              value={ address }
              onChange={ (e) => setAddress(e.target.value) }
            />
            <GenericInput
              name="Número"
              placeholder="Número da residencia"
              domId="customer_checkout__input-address-number"
              value={ addressNumber }
              onChange={ (e) => setAddressNumber(e.target.value) }
            />
          </Styles.Box>
          <Styles.Box style={ { display: 'flex', alignItems: 'center' } }>
            <GenericButton
              onClick={ (e) => orderSubmit(e) }
              dataTestid="customer_checkout__button-submit-order"
              readLine="FINALIZAR PEDIDO"
            />
          </Styles.Box>
        </Styles.CheckoutInputs>
      </Styles.CheckoutContainer>
    </>
  );
}

export default Checkout;