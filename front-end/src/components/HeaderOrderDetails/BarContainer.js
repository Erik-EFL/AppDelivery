/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatDate, formatPrice } from '../../services/helper/utilidades';
import SimpleButton from '../GenericButton';
import renderBar from './helper/renderBar';
import useRequestById from './hooks/useRequest';
import * as Styles from './styles';

function BarContainer({ pageName }) {
  const { id: paramsId } = useParams();
  const { user } = useSelector((state) => state.userAuthReducer);
  const { role } = user;

  const order = useRequestById(paramsId, 'order');
  const seller = useRequestById(order.sellerId, 'user');

  const { id, saleDate, status, totalPrice } = order;
  const { name } = seller;
  const saleStatus = status?.toUpperCase();
  const saleDateFormated = formatDate(saleDate);

  if (!id || !saleDate || !status) {
    return <div>Carregando...</div>;
  }

  const funcParams = {
    pageName,
    userRole: role,
    saleDate: saleDateFormated,
    orderId: id,
    sellerName: name,
    saleStatus,
  };

  return (
    <Styles.OrderDetails>
      {renderBar(funcParams)}
      <Styles.CartButtonContainer>
        <SimpleButton
          wdt="20"
          hgt="7"
          readLine="Total: "
          bold
          fs="xxxl"
          enable
        >
          <span data-testid="customer_order_details__element-order-total-price">
            {formatPrice(totalPrice)}
          </span>
        </SimpleButton>
      </Styles.CartButtonContainer>
    </Styles.OrderDetails>
  );
}

BarContainer.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default BarContainer;
