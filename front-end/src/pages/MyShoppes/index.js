import React from 'react';
import { Navbar, ProductStatusCard } from '../../components';
import * as Styles from './styles';

function CustomerShoppes() {
  return (
    <>
      <Navbar />
      <Styles.Container>
        <ProductStatusCard />
      </Styles.Container>
    </>
  );
}

export default CustomerShoppes;
