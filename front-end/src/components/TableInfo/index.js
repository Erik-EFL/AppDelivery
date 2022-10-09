import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import usePageName from '../../services/hooks/usePageName';
import selectTable from './helper/funcComponent';
import * as Styles from './styles';

function TableInfo({
  index,
  productName,
  quantidade,
  unitValue,
  totalValue,
  userName,
  userEmail,
  userType,
  onClick,
}) {
  const loginReducer = useSelector((state) => state.userAuthReducer);
  const { role } = loginReducer.user;
  const pageName = usePageName();
  const userData = {
    /* costumer and seller order infos */
    index,
    productName,
    quantidade,
    unitValue,
    totalValue,

    /* adm info  */
    userName,
    userEmail,
    userType,
    onClick,
  };

  return (
    <Styles.InfoTableLine>
      {selectTable(role, pageName, userData)}
    </Styles.InfoTableLine>
  );
}

TableInfo.propTypes = {
  index: PropTypes.string,
  productName: PropTypes.string,
  quantidade: PropTypes.string,
  unitValue: PropTypes.string,
  totalValue: PropTypes.string,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  userType: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default TableInfo;
