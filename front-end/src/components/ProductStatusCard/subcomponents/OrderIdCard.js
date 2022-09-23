import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from '../styles';

function OrderInfoCard({ children, userRole }) {
  return (
    <Styles.OrderIdContainer userRole={ userRole }>
      <Styles.OrderCardText size="md">
        Pedido
      </Styles.OrderCardText>
      <Styles.OrderCardText>
        {children}
      </Styles.OrderCardText>
    </Styles.OrderIdContainer>
  );
}

OrderInfoCard.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default OrderInfoCard;
