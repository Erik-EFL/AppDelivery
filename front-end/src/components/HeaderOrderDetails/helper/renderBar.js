import { convertNumbers } from '../../../services/helper/utilidades';
import SimpleButton from '../../GenericButton/index';
import StatusButton from '../../StatusButton/index';
import * as Styles from '../styles';

const renderBar = (data) => {
  if (data.userRole === 'seller' && data.pageName === 'Detalhe do Pedido') {
    return (
      <div>
        <div>
          <div style={ { width: '15rem' } }>
            <Styles.TH3
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO ${convertNumbers(data.orderId)}`}
            </Styles.TH3>
          </div>
          <div style={ { width: '15rem' } }>
            <Styles.TH3
              data-testid="seller_order_details__element-order-details-label-order-date"
              className="date"
            >
              {data.saleDate}
            </Styles.TH3>
          </div>
          <div style={ { width: '33rem' } }>
            <StatusButton
              data-testid={ `seller_order_details
              __element-order-details-label-delivery-status` }
              status="PENDENTE"
              hgt="3.7"
              wdt="19"
            />
          </div>
          <div style={ { width: '10rem' } }>
            <SimpleButton
              data-testid="seller_order_details__button-preparing-check"
              hgt="3.7"
              wdt="25"
              fs="md"
              readLine="PREPARANDO PEDIDO"
              variant="primary"
            />
          </div>
          <div style={ { width: '10rem' } }>
            <SimpleButton
              data-testid="seller_order_details__button-dispatch-check"
              hgt="3.7"
              wdt="25"
              fs="md"
              readLine="SAIU PARA ENTREGA"
            />
          </div>
        </div>
      </div>
    );
  }
  if (data.userRole === 'customer' && data.pageName === 'Detalhe do Pedido') {
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
                {`PEDIDO ${convertNumbers(data.orderId)}`}
                ;
              </strong>
            </Styles.TH3>
            <Styles.TSPAN
              data-testid={ `customer_order_details
              __element-order-details-label-seller-name` }
            >
              { data.sellerName }
            </Styles.TSPAN>
          </div>
          <div className="badgesContainer">
            <div
              className="dateContainer date"
              data-testid={ `customer_order_details
            __element-order-details-label-order-date` }
            >
              {data.saleDate}
            </div>
            <div className="statusContainer">
              <StatusButton
                status={ data.saleStatus }
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
                onClick={ () => data.handleStatusChange(data.orderId) }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default renderBar;
