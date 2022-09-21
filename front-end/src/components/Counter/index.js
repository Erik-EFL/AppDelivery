import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import * as Styles from './styles';

function Counter({ description }) {
  const [count, setCount] = useState(0);

  return (
    <Styles.CountContainer>
      <Styles.CountTitle>{description}</Styles.CountTitle>
      <Styles.Box direction="row">
        <Styles.CountButton onClick={ () => count > 0 && setCount(count - 1) }>
          <FaMinus color="white" />
        </Styles.CountButton>
        <Styles.CountInput min="0" value={ count } type="number" readOnly />
        <Styles.CountButton onClick={ () => setCount(count + 1) } max>
          <FaPlus color="white" />
        </Styles.CountButton>
      </Styles.Box>
    </Styles.CountContainer>
  );
}

Counter.propTypes = {
  description: PropTypes.string,
}.isRequired;

export default Counter;
