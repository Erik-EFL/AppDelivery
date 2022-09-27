import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

function StatusButton({ status, hgt, wdt, fs }) {
  return (
    <Styles.StatusButtonContainer status={ status } hgt={ hgt } wdt={ wdt }>
      <Styles.StatusButtonText fs={ fs }>
        {status}
      </Styles.StatusButtonText>
    </Styles.StatusButtonContainer>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string,
  hgt: PropTypes.number,
  wdt: PropTypes.number,
  fs: PropTypes.number,
}.isRequired;

export default StatusButton;
