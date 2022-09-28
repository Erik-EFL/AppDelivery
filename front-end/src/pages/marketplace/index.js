import React, { useEffect, useState } from 'react';
import { GenericProductCard, Navbar } from '../../components';
import * as Styles from './styles';
import { getAllProducts } from '../../services/api';
import SimpleButton from '../../components/GenericButton';

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const renderCards = (productArray) => productArray.map((prod) => (
    <GenericProductCard
      name={ prod.name }
      img={ prod.urlImage }
      price={ prod.price }
      description={ prod.name }
      key={ prod.id }
      domId={ prod.id }
    />
  ));

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
          hgt="4"
          readLine="Ver Carrinho: R$ 28,00"
          bold
          fs="lg"
          dataTestid="customer_products__checkout-bottom-value"
        />
      </Styles.CartButtonContainer>
    </Styles.Container>
  );
}

export default Marketplace;
