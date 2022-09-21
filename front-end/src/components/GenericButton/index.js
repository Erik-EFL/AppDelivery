import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

function index({ readLine, variant }) {
  return (
    <Styles.GenericButton variant={ variant }>
      {readLine}
    </Styles.GenericButton>
  );
}

index.propTypes = {
  readLine: PropTypes.string,
  variant: PropTypes.string,
}.isRequired;

export default index;
