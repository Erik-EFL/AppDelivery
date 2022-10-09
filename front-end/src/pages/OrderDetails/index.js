/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/NavBar/index';
import { getOrderById } from '../../services/api';
import usePageName from '../../services/hooks/usePageName';
import * as Styles from './style';
import TableBar from '../../components/GenericTable/TableContainer';
import { ScrollContainer, Tbody } from '../../components/index';
import TableInfo from '../../components/TableInfo/index';
import InfoBar from '../../components/HeaderOrderDetails/BarContainer';

function OrderDetails() {
  const { id: idParams } = useParams();
  const { user } = useSelector((state) => state.userAuthReducer);
  const { role: userRole } = user;
  const pageName = usePageName();
  const [data, setData] = useState();

  const getData = async () => {
    const response = await getOrderById(idParams);
    setData(response.data);
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
          <InfoBar pageName={ pageName } userRole={ userRole } />
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
                />
              ))}
            </Tbody>
          </ScrollContainer>
        </main>
      </Styles.Container>
    </>
  );
}

export default OrderDetails;
