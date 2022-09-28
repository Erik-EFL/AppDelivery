import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import * as Styles from './styles';

function Counter({ description, domId, addToCart, removeFromCart, item, value }) {
  const [count, setCount] = useState(value || 0);

  const minusChange = () => {
    if (count > 0) setCount(count - 1);
    removeFromCart(item);
  };

  const plusChange = () => {
    setCount(count + 1);
    addToCart(item);
  };

  return (
    <Styles.CountContainer>
      <Styles.CountTitle data-testid={ `customer_products__element-card-title-${domId}` }>
        {description}
      </Styles.CountTitle>
      <Styles.Box direction="row">
        <Styles.CountButton
          onClick={ () => minusChange() }
          data-testid={ `customer_products__button-card-rm-item-${domId}` }
          disabled={ count === 0 }
        >
          <FaMinus color="white" />
        </Styles.CountButton>
        <Styles.CountInput
          min="0"
          value={ count }
          type="number"
          readOnly
          data-testid={ `customer_products__input-card-quantity-${domId}` }
        />
        <Styles.CountButton
          onClick={ () => plusChange() }
          maximum
          data-testid={ `customer_products__button-card-add-item-${domId}` }
        >
          <FaPlus color="white" />
        </Styles.CountButton>
      </Styles.Box>
    </Styles.CountContainer>
  );
}

Counter.propTypes = {
  description: PropTypes.string,
  domId: PropTypes.string,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
}.isRequired;

export default Counter;
