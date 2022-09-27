import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from '../styles';

function OrderInfoCard({ children }) {
  return (
    <Styles.OrderInfoContainer>
      <Styles.OrderCardText>
        {children}
      </Styles.OrderCardText>
    </Styles.OrderInfoContainer>
  );
}

OrderInfoCard.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default OrderInfoCard;
