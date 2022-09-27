import PropTypes from 'prop-types';
import React from 'react';

import StatusButton from '../StatusButton';
import * as Styles from './styles';
import OrderIdCard from './subcomponents/OrderIdCard';
import OrderInfoCard from './subcomponents/OrderInfoCard';

function ProductStatusCard({ userRole, address, price, date, orderId }) {
  return (
    <Styles.ProductStatusCardContainer>
      <OrderIdCard userRole={ userRole }>
        {orderId}
      </OrderIdCard>
      <Styles.Box>
        <Styles.Box direction="row" gap="10px" pd="10px">
          <StatusButton status="ENTREGUE" />
          <Styles.Box direction="column" gap="10px">
            <OrderInfoCard>
              {date}
            </OrderInfoCard>
            <OrderInfoCard>
              {`R$ ${price}`}
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
}.isRequired;

ProductStatusCard.defaultProps = {
  userRole: 'customer',
  address: 'Address',
  date: 'DD/MM/AA',
  price: '00,00',
  orderId: '0000',
};

export default ProductStatusCard;
