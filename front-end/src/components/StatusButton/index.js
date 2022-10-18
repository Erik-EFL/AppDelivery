import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useRequestById from '../HeaderOrderDetails/hooks/useRequest';
import * as Styles from './styles';

function StatusButton({ hgt, wdt, fs, dataTestId, status, id }) {
  const { id: paramsId } = useParams();
  const { pathname } = useLocation();
  const order = useRequestById(paramsId, 'order');
  const { status: orderStatus } = order;
  const saleStatus = orderStatus?.toUpperCase();

  const showNewStatus = () => {
    if (pathname === '/seller/orders' || pathname === '/customer/orders') {
      return status;
    }
    return saleStatus;
  };

  return (
    <Styles.StatusButtonContainer status={ status } hgt={ hgt } wdt={ wdt }>
      <Styles.StatusButtonText
        fs={ fs }
        data-testid={ `${dataTestId}element-delivery-status-${id}` }
      >
        {
          showNewStatus()
        }
      </Styles.StatusButtonText>
    </Styles.StatusButtonContainer>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string,
  hgt: PropTypes.number,
  wdt: PropTypes.number,
  fs: PropTypes.number,
  dataTestId: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

export default StatusButton;
