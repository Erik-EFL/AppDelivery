import PropTypes from 'prop-types';
import Counter from '../Counter/index';
import * as Styles from './styles';

function GenericProductCard(
  {
    img,
    price,
    description,
    name,
    domId,
    addToCart,
    removeFromCart,
    item,
    value,
    updateItem,
  },
) {
  return (
    <Styles.ProductCard>
      <p id="price">
        R$
        {' '}
        <span data-testid={ `customer_products__element-card-price-${domId}` }>
          {price.replace('.', ',')}
        </span>
      </p>
      <Styles.BoxImage>
        <img
          src={ img }
          alt={ ` imagem de ${name}` }
          data-testid={ `customer_products__img-card-bg-image-${domId}` }
        />
      </Styles.BoxImage>
      <Styles.Box>
        <Counter
          description={ description }
          addToCart={ addToCart }
          removeFromCart={ removeFromCart }
          updateItem={ updateItem }
          domId={ domId }
          item={ item }
          value={ value }
        />
      </Styles.Box>
    </Styles.ProductCard>
  );
}

GenericProductCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  domId: PropTypes.string,
  description: PropTypes.string,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
}.isRequired;

export default GenericProductCard;
