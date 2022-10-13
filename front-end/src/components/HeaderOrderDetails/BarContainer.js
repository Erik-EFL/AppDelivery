/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../services/helper/utilidades';
import renderBar from './helper/renderBar';
import useRequestById from './hooks/useRequest';
import * as Styles from './styles';

function BarContainer({ pageName, handleStatusChange }) {
  const { id: paramsId } = useParams();
  const { user } = useSelector((state) => state.userAuthReducer);
  const { role } = user;

  const order = useRequestById(paramsId, 'order');
  const seller = useRequestById(order.sellerId, 'user');

  const { id, saleDate, status } = order;
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
    handleStatusChange,
  };

  return (
    <Styles.OrderDetails>
      {renderBar(funcParams)}
    </Styles.OrderDetails>
  );
}

BarContainer.propTypes = {
  pageName: PropTypes.string,
  handleStatusChange: PropTypes.func,
}.isRequired;

export default memo(BarContainer);
