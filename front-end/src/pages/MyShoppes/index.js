import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, ProductStatusCard } from '../../components';
import { getAllSalesByCustomerId } from '../../services/api';
import * as Styles from './styles';

function CustomerShoppes() {
  const { user: { role } } = useSelector((state) => state.userAuthReducer);
  const [sales, setSales] = useState([]);
  console.log(sales);
  const getSales = async () => {
    const { data } = await getAllSalesByCustomerId();
    setSales(data);
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <>
      <Navbar />
      <Styles.Container>
        {sales?.map((sale) => (
          <NavLink key={ sale.id } to={ `${sale.id}` }>
            <ProductStatusCard
              userRole={ role }
              orderId={ sale.id }
              status={ sale.status.toUpperCase() }
              date={ sale.saleDate }
              price={ sale.totalPrice }
              address={ sale.deliveryAddress }
            />
          </NavLink>
        ))}
      </Styles.Container>
    </>
  );
}

export default CustomerShoppes;
