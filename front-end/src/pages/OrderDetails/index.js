/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SimpleButton from '../../components/GenericButton';
import TableBar from '../../components/GenericTable/TableContainer';
import InfoBar from '../../components/HeaderOrderDetails/BarContainer';
import { ScrollContainer, Tbody } from '../../components/index';
import Navbar from '../../components/NavBar/index';
import TableInfo from '../../components/TableInfo/index';
import { getOrderById, updateSaleStatus } from '../../services/api';
import { formatPrice } from '../../services/helper/utilidades';
import usePageName from '../../services/hooks/usePageName';
import * as Styles from './style';

function OrderDetails() {
  const { id: idParams } = useParams();
  const { user } = useSelector((state) => state.userAuthReducer);
  const { role: userRole } = user;
  const pageName = usePageName();
  const [data, setData] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const getData = async () => {
    const response = await getOrderById(idParams);
    setData(response.data);
  };

  const handleStatusChange = async (id) => {
    if (data.status === 'Entregue') {
      setIsDisabled(true);
      alert('Pedido já entregue');
    }
    if (data.status === 'Pendente') {
      setIsDisabled(true);
      alert('Estamos analisando seu pedido');
    }
    if (data.status === 'Preparando') {
      setIsDisabled(true);
      alert('Estamos preparando seu pedido');
    }
    if (data.status === 'Saiu para entrega') {
      setIsDisabled(false);
      const status = {
        status: 'Entregue',
      };
      const response = updateSaleStatus(id, status);
      window.location.reload();
      return response;
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Navbar />
      <Styles.Container>
        <header><h1>{`${pageName}`}</h1></header>
        <main>
          <InfoBar pageName={ pageName } handleStatusChange={ handleStatusChange } />
          <TableBar pageName={ pageName } userRole={ userRole } />
          <ScrollContainer>
            <Tbody>
              {data?.products.map((product, index) => (
                <TableInfo
                  key={ product.id }
                  index={ index }
                  productId={ product.id }
                  productName={ product.name }
                  quantidade={ product.salesProducts.quantity }
                  unitValue={ product.price }
                  totalValue={ product.salesProducts.quantity * product.price }
                  isDisabled={ isDisabled }
                />
              ))}
            </Tbody>
          </ScrollContainer>
          <Styles.CartButtonContainer className="badge">
            <SimpleButton
              wdt="20"
              hgt="7"
              readLine="Total: "
              bold
              fs="xxxl"
              enable
              data-testid="customer_order_details__element-order-total-price"
            >
              {formatPrice(data?.totalPrice)}
            </SimpleButton>
          </Styles.CartButtonContainer>
        </main>
      </Styles.Container>
    </>
  );
}

export default OrderDetails;
