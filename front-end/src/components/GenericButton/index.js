import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './style';

function SimpleButton({ dataTestid, readLine, variant, bs, lt, sz }) {
  return (
    <Styles.GenericButton
      data-testid={ dataTestid }
      bs={ bs }
      lt={ lt }
      sz={ sz }
      variant={ variant }
    >
      {readLine}
    </Styles.GenericButton>
  );
}

SimpleButton.propTypes = {
  bs: PropTypes.number,
  dataTestid: PropTypes.string,
  lt: PropTypes.number,
  readLine: PropTypes.string,
  sz: PropTypes.number,
  variant: PropTypes.string,
}.isRequired;

export default SimpleButton;
