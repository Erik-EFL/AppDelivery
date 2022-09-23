import PropTypes from 'prop-types';
import React from 'react';
import SimpleButton from '../../GenericButton';
import StatusButton from '../../StatusButton';
import * as Styles from '../styles';

const renderBar = ({ pageName, userRole, date, orderId }) => {
  if (pageName === '') {
    return (
      <Styles.OrderDetails repeat={ userRole }>
        <p>{`PEDIDO ${orderId}; P. Vend: Fulana Pereira`}</p>
        <p>{date}</p>
        <StatusButton status="ENTREGUE" />
        <SimpleButton
          bs="2"
          lt="100"
          sz="30"
          readLine="MARCAR COMO ENTREGUE"
        />
      </Styles.OrderDetails>
    );
  }
  if (pageName === 'Detalhe do Pedido' && userRole === 'vendedor') {
    return (
      <Styles.OrderDetails>
        <p>{`PEDIDO ${orderId}`}</p>
        <p>{date}</p>
        <StatusButton status="PENDENTE" />
        <SimpleButton
          bs="2"
          lt="100"
          sz="30"
          readLine="PREPARANDO PEDIDO"
          variant="primary"
        />
        <SimpleButton
          bs="2"
          lt="100"
          sz="30"
          readLine="SAIU PARA ENTREGA"
        />
      </Styles.OrderDetails>
    );
  }
};

function BarContainer({ pageName, userRole, date, orderId }) {
  return (
    <>
      {renderBar({ pageName, userRole, date, orderId })}
    </>
  );
}

BarContainer.propTypes = {
  userRole: PropTypes.string,
  pageName: PropTypes.string,
  date: PropTypes.string,
  orderId: PropTypes.string,
}.isRequired;

BarContainer.defaultProps = {
  userRole: 'customer',
  pageName: 'Detalhes do pedido',
  date: 'DD/MM/AA',
  orderId: '0000',
};

export default BarContainer;
