import PropTypes from 'prop-types';
import Counter from '../Counter/index';
import * as Styles from './styles';

function GenericProductCard({ img, price, description, name, domId }) {
  return (
    <Styles.ProductCard>
      <span data-testid={ `customer_products__element-card-price-${domId}` }>
        {`R$ ${price}`}
      </span>
      <Styles.BoxImage>
        <img
          src={ img }
          alt={ ` imagem de ${name}` }
          data-testid={ `customer_products__img-card-bg-image-${domId}` }
        />
      </Styles.BoxImage>
      <Styles.Box>
        <Counter description={ description } domId={ domId } />
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
}.isRequired;

export default GenericProductCard;
