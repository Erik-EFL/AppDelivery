import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import * as Styles from './styles';

function Counter({ description, domId }) {
  const [count, setCount] = useState(0);

  return (
    <Styles.CountContainer>
      <Styles.CountTitle data-testid={ `customer_products__element-card-title-${domId}` }>
        {description}
      </Styles.CountTitle>
      <Styles.Box direction="row">
        <Styles.CountButton
          onClick={ () => count > 0 && setCount(count - 1) }
          data-testid={ `customer_products__button-card-rm-item-${domId}` }
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
          onClick={ () => setCount(count + 1) }
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
}.isRequired;

export default Counter;
