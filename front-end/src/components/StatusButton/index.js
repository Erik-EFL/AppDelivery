import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

function StatusButton({ status }) {
  return (
    <Styles.StatusButtonContainer status={ status }>
      <Styles.StatusButtonText>
        {status}
      </Styles.StatusButtonText>
    </Styles.StatusButtonContainer>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string,
}.isRequired;

export default StatusButton;
