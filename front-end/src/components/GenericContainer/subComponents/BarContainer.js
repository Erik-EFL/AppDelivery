import PropTypes from 'prop-types';
import React from 'react';
import SimpleButton from '../../GenericButton/index';
import StatusButton from '../../StatusButton/index';
import * as Styles from '../styles';

const renderBar = ({ pageName, userRole, date, orderId, userName }) => {
  if (userRole === 'seller' && pageName === 'Detalhes do Pedido') {
    return (
      <Styles.OrderDetails>
        <tr>
          <th style={ { width: '15rem' } }>
            <Styles.TH3
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO ${orderId}`}
            </Styles.TH3>
          </th>
          <th style={ { width: '15rem' } }>
            <Styles.TH3
              data-testid="seller_order_details__element-order-details-label-order-date"
              className="date"
            >
              {date}
            </Styles.TH3>
          </th>
          <th style={ { width: '33rem' } }>
            <StatusButton
              data-testid={ `seller_order_details
              __element-order-details-label-delivery-status` }
              status="PENDENTE"
              hgt="3.7"
              wdt="19"
            />
          </th>
          <th style={ { width: '10rem' } }>
            <SimpleButton
              data-testid="seller_order_details__button-preparing-check"
              hgt="3.7"
              wdt="25"
              fs="md"
              readLine="PREPARANDO PEDIDO"
              variant="primary"
            />
          </th>
          <th style={ { width: '10rem' } }>
            <SimpleButton
              data-testid="seller_order_details__button-dispatch-check"
              hgt="3.7"
              wdt="25"
              fs="md"
              readLine="SAIU PARA ENTREGA"
            />
          </th>
        </tr>
      </Styles.OrderDetails>
    );
  }
  if (userRole === 'customer' && pageName === 'Detalhes do Pedido') {
    return (
      <Styles.OrderDetails>
        <tr>
          <th
            style={ { width: '50rem' } }
            className="peopleName"
          >
            <Styles.TH3
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              <strong>
                PEDIDO
                {' '}
                {orderId}
                {' '}
                ;
              </strong>
            </Styles.TH3>
            <Styles.TSPAN
              data-testid={ `customer_order_details
              __element-order-details-label-seller-name` }
            >
              { userName }
            </Styles.TSPAN>
          </th>
          <th style={ { width: '15rem' } }>
            <Styles.TH3
              data-testid={ `customer_order_details
            __element-order-details-label-order-date` }
              className="date"
            >
              {date}
            </Styles.TH3>
          </th>
          <th style={ { width: '22rem' } }>
            <StatusButton
              status="ENTREGUE"
              hgt="3.7"
              wdt="19"
            />
          </th>
          <th style={ { width: '10rem' } }>
            <SimpleButton
              hgt="3.7"
              wdt="25"
              fs="md"
              readLine="MARCAR COMO ENTREGUE"
            />
          </th>
        </tr>
      </Styles.OrderDetails>
    );
  }
};

function BarContainer({ pageName, userRole, date, orderId, userName }) {
  return (
    <>
      {renderBar({ pageName, userRole, date, orderId, userName })}
    </>
  );
}

BarContainer.propTypes = {
  pageName: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  date: PropTypes.string,
  orderId: PropTypes.string,
  userName: PropTypes.string,
};

BarContainer.defaultProps = {
  date: '11/04/1995',
  orderId: '0001',
  userName: 'Fulana Pereira da Silva Sousa',
};

export default BarContainer;
