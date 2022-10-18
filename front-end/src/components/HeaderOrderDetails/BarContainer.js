/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateSaleStatus, updateSaleStatusBySeller } from '../../services/api';
import { formatDate } from '../../services/helper/utilidades';
import renderBar from './helper/renderBar';
import useRequestById from './hooks/useRequest';
import * as Styles from './styles';

const emTransito = 'Em Trânsito';

function BarContainer(
  { pageName },
) {
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

  const handleStatusChange = () => {
    if (status === 'Pendente') {
      const newStatus = {
        status: 'Preparando',
      };
      const response = updateSaleStatusBySeller(paramsId, newStatus);
      window.location.reload();
      return response;
    }
    if (status === 'Preparando') {
      const newStatus = {
        status: emTransito,
      };
      const response = updateSaleStatusBySeller(paramsId, newStatus);
      window.location.reload();
      return response;
    }
    if (status === 'Em Trânsito') {
      const newStatus = {
        status: 'Entregue',
      };
      const response = updateSaleStatus(paramsId, newStatus);
      window.location.reload();
      return response;
    }
  };

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
}.isRequired;

export default BarContainer;
