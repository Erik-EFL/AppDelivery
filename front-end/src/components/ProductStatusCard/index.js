import PropTypes from 'prop-types';
import React, { memo } from 'react';
import {
  convertNumbers,
  formatDate,
  formatPrice,
} from '../../services/helper/utilidades';

import StatusButton from '../StatusButton';
import * as Styles from './styles';
import OrderIdCard from './subcomponents/OrderIdCard';
import OrderInfoCard from './subcomponents/OrderInfoCard';

function ProductStatusCard({ userRole, address, price, date, orderId, status }) {
  const formatDataTestId = () => {
    if (userRole === 'customer') {
      return 'customer_orders__';
    }
    return 'seller_orders__';
  };

  return (
    <Styles.ProductStatusCardContainer>
      <OrderIdCard userRole={ userRole }>
        {convertNumbers(orderId)}
      </OrderIdCard>
      <Styles.Box>
        <Styles.Box direction="row" gap="10px" pd="10px">
          <StatusButton
            status={ status }
            dataTestId={ formatDataTestId }
            id={ orderId }
          />
          <Styles.Box direction="column" gap="10px">
            <OrderInfoCard
              dataTestId={ formatDataTestId }
              id={ orderId }
              type="date"
            >
              {formatDate(date)}
            </OrderInfoCard>
            <OrderInfoCard
              dataTestId={ formatDataTestId }
              id={ orderId }
              type="price"
            >
              {formatPrice(price)}
            </OrderInfoCard>
          </Styles.Box>
        </Styles.Box>
        {userRole === 'seller' && (
          <Styles.Box pd="10px">
            <Styles.AddressText
              data-testid={ `seller_orders__element-card-address-${orderId}` }
            >
              {address}
            </Styles.AddressText>
          </Styles.Box>
        )}
      </Styles.Box>
    </Styles.ProductStatusCardContainer>
  );
}

ProductStatusCard.propTypes = {
  userRole: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  orderId: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default memo(ProductStatusCard);
