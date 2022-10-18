/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, ProductStatusCard } from '../../components';
import { getAllSalesByCustomerId, getAllSalesBySellerId } from '../../services/api';
import * as Styles from './styles';

function CustomerShoppes() {
  const { user: { role } } = useSelector((state) => state.userAuthReducer);
  const [sales, setSales] = useState([]);

  useMemo(async () => {
    if (role === 'customer') {
      const { data } = await getAllSalesByCustomerId();
      setSales((state) => [...state, data]);
    }
    if (role === 'seller') {
      const { data } = await getAllSalesBySellerId();
      setSales((state) => [...state, data]);
    }
  }, [sales.map((sale) => sale.status)]);

  const renderSales = sales.length > 0 && sales[0]?.map((sale) => (
    <NavLink key={ sale.id } to={ `${sale.id}` }>
      <ProductStatusCard
        userRole={ role }
        orderId={ sale.id }
        status={ sale?.status?.toUpperCase() }
        date={ sale.saleDate }
        price={ sale.totalPrice }
        address={ `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
      />
    </NavLink>
  ));

  return (
    <>
      <Navbar />
      <Styles.Container>
        { renderSales }
      </Styles.Container>
    </>
  );
}

export default memo(CustomerShoppes);
