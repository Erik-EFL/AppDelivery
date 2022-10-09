import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GenericProductCard, Navbar } from '../../components';
import SimpleButton from '../../components/GenericButton';
import {
  addItem,
  removeItem,
  updatePrice,
  updateQuantity,
  updateUnitPrice,
} from '../../redux/actions/userActions';
import { getAllProducts } from '../../services/api';
import { formatPrice } from '../../services/helper/utilidades';
import * as Styles from './styles';

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('products', products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, totalPrices } = useSelector((state) => state.shoppingCartReducer);

  const getProducts = async () => {
    try {
      setLoading(true);
      const result = await getAllProducts();
      setProducts(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    dispatch(addItem(item));
    dispatch(updatePrice());
    dispatch(updateUnitPrice());
  };

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
    dispatch(updatePrice());
    dispatch(updateUnitPrice());
  };

  const updateItem = (item) => {
    dispatch(updateQuantity(item));
    dispatch(updatePrice());
    dispatch(updateUnitPrice());
  };

  const renderCards = (productArray) => productArray.map((prod) => {
    const currentItem = cart.find((item) => item.id === prod.id);
    return (
      <GenericProductCard
        name={ prod.name }
        img={ prod.urlImage }
        price={ prod.price }
        description={ prod.name }
        key={ prod.id }
        domId={ prod.id }
        item={ prod }
        addToCart={ addToCart }
        value={ currentItem?.qty }
        removeFromCart={ removeFromCart }
        updateItem={ updateItem }
      />
    );
  });

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <h1>Carregando...</h1>
    );
  }

  return (
    <Styles.Container>
      <Navbar />
      <Styles.MarketContainer>
        { products?.length > 0 && renderCards(products) }
      </Styles.MarketContainer>
      <Styles.CartButtonContainer>
        <SimpleButton
          wdt="20.25"
          hgt="7"
          readLine="Ver Carrinho: "
          bold
          fs="xxl"
          disabled={ (totalPrices === '0.00') || (totalPrices === '0,00') }
          onClick={ () => navigate('/customer/checkout') }
          dataTestid="customer_products__button-cart"
        >
          <span data-testid="customer_products__checkout-bottom-value">
            {formatPrice(totalPrices)}
          </span>
        </SimpleButton>
      </Styles.CartButtonContainer>
    </Styles.Container>
  );
}

export default Marketplace;
