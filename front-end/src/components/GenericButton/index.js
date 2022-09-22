import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

function SimpleButton({ readLine, variant }) {
  return (
    <Styles.GenericButton variant={ variant }>
      {readLine}
    </Styles.GenericButton>
  );
}

SimpleButton.propTypes = {
  readLine: PropTypes.string,
  variant: PropTypes.string,
}.isRequired;

export default SimpleButton;
