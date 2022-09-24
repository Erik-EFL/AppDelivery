import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

function SimpleButton({ readLine, variant, large, id, onClick }) {
  return (
    <Styles.GenericButton
      onClick={ onClick }
      id={ id }
      variant={ variant }
      large={ large }
    >
      {readLine}
    </Styles.GenericButton>
  );
}

SimpleButton.propTypes = {
  readLine: PropTypes.string,
  variant: PropTypes.string,
}.isRequired;

export default SimpleButton;
