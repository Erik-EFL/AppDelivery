import PropTypes from 'prop-types';
import React, { memo } from 'react';

import * as Styles from '../styles';

function OrderInfoCard({ children, userRole, dataTestId, id }) {
  return (
    <Styles.OrderIdContainer
      userRole={ userRole }
      data-testid={ `${dataTestId}element-order-id-${id}` }
    >
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
  userRole: PropTypes.string,
  dataTestId: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

export default memo(OrderInfoCard);
