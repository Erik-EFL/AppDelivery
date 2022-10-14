import PropTypes from 'prop-types';
import React from 'react';
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
  return (
    <Styles.ProductStatusCardContainer>
      <OrderIdCard userRole={ userRole }>
        {convertNumbers(orderId)}
      </OrderIdCard>
      <Styles.Box>
        <Styles.Box direction="row" gap="10px" pd="10px">
          <StatusButton status={ status } />
          <Styles.Box direction="column" gap="10px">
            <OrderInfoCard>
              {formatDate(date)}
            </OrderInfoCard>
            <OrderInfoCard>
              {formatPrice(price)}
            </OrderInfoCard>
          </Styles.Box>
        </Styles.Box>
        {userRole === 'seller' && (
          <Styles.Box pd="10px">
            <Styles.AddressText>{address}</Styles.AddressText>
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

export default ProductStatusCard;
