import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Styles from './styles';
import selectTable from './helper/funcComponent';

function TableInfo(
  {
    productId,
    productName,
    quantidade,
    unitValue,
    totalValue,
    pageName,
    name,
    userId,
    email,
    onClick,
    userType,
  },
) {
  const loginReducer = useSelector((state) => state.userAuthReducer);
  const { role } = loginReducer.user;
  console.log(role);
  return (
    <Styles.InfoTableLine>
      <tbody>
        {
          selectTable(
            {
              productId,
              productName,
              quantidade,
              unitValue,
              totalValue,
              role,
              pageName,
              name,
              userId,
              email,
              onClick,
              userType,
            },
          )
        }
      </tbody>
    </Styles.InfoTableLine>
  );
}

TableInfo.propTypes = {
  productId: PropTypes.string,
  productName: PropTypes.string,
  quantidade: PropTypes.string,
  unitValue: PropTypes.string,
  totalValue: PropTypes.string,
  pageName: PropTypes.string,
  name: PropTypes.string,
  userId: PropTypes.string,
  onClick: PropTypes.func,
  email: PropTypes.string,
  userType: PropTypes.string,
}.isRequired;

export default TableInfo;
