import PropTypes from 'prop-types';
import * as Styles from './styles';

function GenericProductCard({ img, price, decryption, name }) {
  return (
    <Styles.ProductCard>
      <Styles.BoxImage>
        <img src={ img } alt={ ` imagem de ${name}` } />
      </Styles.BoxImage>
      <Styles.Box>
        
      </Styles.Box>
    </Styles.ProductCard>
  );
}

GenericProductCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  decryption: PropTypes.string,
}.isRequired;

export default GenericProductCard;
