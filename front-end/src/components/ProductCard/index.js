import PropTypes from 'prop-types';
import Counter from '../Counter/index';
import * as Styles from './styles';

function GenericProductCard({ img, price, description, name }) {
  return (
    <Styles.ProductCard>
      <span>{`R$ ${price}`}</span>
      <Styles.BoxImage>
        <img src={ img } alt={ ` imagem de ${name}` } />
      </Styles.BoxImage>
      <Styles.Box>
        <Counter description={ description } />
      </Styles.Box>
    </Styles.ProductCard>
  );
}

GenericProductCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default GenericProductCard;
