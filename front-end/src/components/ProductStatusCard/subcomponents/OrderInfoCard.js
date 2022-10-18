import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from '../styles';

function OrderInfoCard({ children, dataTestId, id, type }) {
  return (
    <Styles.OrderInfoContainer>
      <Styles.OrderCardText
        data-testid={ `${dataTestId}element-order-${type}-${id}` }
      >
        {children}
      </Styles.OrderCardText>
    </Styles.OrderInfoContainer>
  );
}

OrderInfoCard.propTypes = {
  children: PropTypes.string,
  dataTestId: PropTypes.func,
  id: PropTypes.number,
  type: PropTypes.string,
}.isRequired;

export default OrderInfoCard;
