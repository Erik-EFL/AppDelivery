import PropTypes from 'prop-types';
import React from 'react';
import SimpleButton from '../../GenericButton/index';
import StatusButton from '../../StatusButton/index';
import * as Styles from '../styles';

const renderBar = ({ pageName, userRole, date, orderId }) => {
  if (pageName === '') {
    return (
      <Styles.OrderDetails repeat={ userRole }>
        <tr>
          <th style={ { width: '70rem' } }>
            <Styles.TH3 className="peopleName">
              <strong>
                PEDIDO
                {' '}
                0001
                {' '}
                ;
              </strong>
              <Styles.TSPAN>
                Fulana Pereira
              </Styles.TSPAN>
            </Styles.TH3>
          </th>
          <th style={ { width: '12rem' } }>
            <Styles.TH3 className="date">
              11/04/1995
            </Styles.TH3>
          </th>
          <th style={ { width: '12rem' } }>
            <StatusButton
              status="ENTREGUE"
              hgt="4"
              wdt="17"
            />
          </th>
          <th style={ { width: '6rem' } }>
            <SimpleButton
              hgt="4"
              wdt="25"
              fs="md"
              readLine="MARCAR COMO ENTREGUE"
            />
          </th>
        </tr>
      </Styles.OrderDetails>
    );
  }
  if (pageName === 'Detalhe do Pedido' && userRole === 'vendedor') {
    return (
      <Styles.OrderDetails>
        <Styles.TH3>{`PEDIDO ${orderId}`}</Styles.TH3>
        <Styles.TH3>{date}</Styles.TH3>
        <StatusButton status="PENDENTE" />
        <SimpleButton
          bs="5"
          lt="100"
          sz="30"
          readLine="PREPARANDO PEDIDO"
          variant="primary"
        />
        <SimpleButton
          bs="5"
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

export default BarContainer;
