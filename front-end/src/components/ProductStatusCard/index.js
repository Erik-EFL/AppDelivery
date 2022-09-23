import PropTypes from 'prop-types';
import React from 'react';

import StatusButton from '../StatusButton';
import * as Styles from './styles';
import OrderIdCard from './subcomponents/OrderIdCard';
import OrderInfoCard from './subcomponents/OrderInfoCard';

function ProductStatusCard({ userRole, adress, price, date, orderId }) {
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
            <Styles.AdressText>{adress}</Styles.AdressText>
          </Styles.Box>
        )}
      </Styles.Box>
    </Styles.ProductStatusCardContainer>
  );
}

ProductStatusCard.propTypes = {
  userRole: PropTypes.string,
  adress: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  orderId: PropTypes.string,
}.isRequired;

ProductStatusCard.defaultProps = {
  userRole: 'customer',
  adress: 'Adress',
  date: 'DD/MM/AA',
  price: '00,00',
  orderId: '0000',
};

export default ProductStatusCard;
