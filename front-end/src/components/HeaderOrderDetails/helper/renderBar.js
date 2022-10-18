/* eslint-disable no-alert */
import { convertNumbers } from '../../../services/helper/utilidades';
import SimpleButton from '../../GenericButton/index';
import StatusButton from '../../StatusButton/index';
import * as Styles from '../styles';

const renderBar = (data) => {
  const { pageName, userRole, saleDate, orderId, sellerName, saleStatus,
    handleStatusChange, orderStatus } = data;
  if (userRole === 'seller' && pageName === 'Detalhe do Pedido') {
    return (
      <div className="leftContainer">
        <Styles.ContainerLeft>

          <Styles.TH3
            data-testid="seller_order_details__element-order-details-label-order-id"
            className="orderInfoId"
          >
            {`PEDIDO ${convertNumbers(orderId)}`}
          </Styles.TH3>

          <Styles.TH3
            data-testid="seller_order_details__element-order-details-label-order-date"
            className="date orderInfoDate"
          >
            {saleDate}
          </Styles.TH3>
          <StatusButton
            data-testid={ `seller_order_details
              __element-order-details-label-delivery-status` }
            status={ orderStatus }
            hgt="3.7"
            wdt="19"
            className="orderInfoStatus"
          />
        </Styles.ContainerLeft>
        <Styles.ContainerRight>
          <SimpleButton
            data-testid="seller_order_details__button-preparing-check"
            hgt="3.7"
            wdt="25"
            fs="md"
            readLine="PREPARANDO PEDIDO"
            variant="primary"
            className="orderInfoButton"
            onClick={ () => handleStatusChange() }
            disabled={ saleStatus !== 'PENDENTE' }
          />

          <SimpleButton
            data-testid="seller_order_details__button-dispatch-check"
            hgt="3.7"
            wdt="25"
            fs="md"
            readLine="SAIU PARA ENTREGA"
            className="orderInfoButton"
            onClick={ () => handleStatusChange() }
            disabled={ saleStatus !== 'PREPARANDO' }
          />
        </Styles.ContainerRight>
      </div>
    );
  }
  if (userRole === 'customer' && pageName === 'Detalhe do Pedido') {
    return (
      <div>
        <div className="leftContainer">
          <div
            className="peopleName"
          >
            <Styles.TH3
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              <strong>
                {`PEDIDO ${convertNumbers(orderId)}`}
                ;
              </strong>
            </Styles.TH3>
            <Styles.TSPAN
              data-testid={ `customer_order_details
              __element-order-details-label-seller-name` }
            >
              { sellerName }
            </Styles.TSPAN>
          </div>
          <div className="badgesContainer">
            <div
              className="dateContainer date"
              data-testid={ `customer_order_details
            __element-order-details-label-order-date` }
            >
              {saleDate}
            </div>
            <div className="statusContainer">
              <StatusButton
                status={ orderStatus }
                hgt="5"
                wdt="15"
                data-testid={ `customer_order_details__
                element-order-details-label-delivery-status` }
              />
            </div>
            <div className="buttonContainer">
              <SimpleButton
                hgt="5"
                wdt="20"
                fs="md"
                readLine="MARCAR COMO ENTREGUE"
                dataTestid="customer_order_details__button-delivery-check"
                onClick={ () => handleStatusChange() }
                disabled={ saleStatus !== 'EM TRÂNSITO' }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default renderBar;
