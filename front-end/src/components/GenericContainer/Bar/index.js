import React from 'react';
import SimpleButton from '../../GenericButton';
import * as Styles from './styles';

function ifBar(barType) {
  if (barType === 'Finalizar Pedido') {
    return (
      <Styles.TableHeader>
        <p>item</p>
        <p>description</p>
        <p>quantidade</p>
        <p>Valor Unitário</p>
        <p>Sub-Total</p>
        <p>BOTÃO</p>
      </Styles.TableHeader>
    );
  }
  if (barType === 'Detalhes do pedido') {
    return (
      <>
        <Styles.OrderDetails>
          <p>id</p>
          <p>VENDEDOR</p>
          <p>DATA</p>
          <p>ESTATUS</p>
          <SimpleButton bs="2" lt="100" sz="15" readLine="Botão" />
        </Styles.OrderDetails>
        <Styles.TableHeader>
          <p>item</p>
          <p>description</p>
          <p>quantidade</p>
          <p>Valor Unitário</p>
          <p>Sub-Total</p>
          <p>BOTÃO</p>
        </Styles.TableHeader>
      </>
    );
  }
  if (barType === 'Cadastrar novo usuário') {
    return (
      <>
        <Styles.OrderDetails>
          <p>PEDIDO 0003;</p>
          <p> P. Vend: Fulana Pereira</p>
          <p>07/04/2021</p>
          <p>ESTATUS</p>
          <SimpleButton bs="2" lt="100" sz="15" readLine="Botão" />
        </Styles.OrderDetails>
        <Styles.TableHeader>
          <p>item</p>
          <p>description</p>
          <p>quantidade</p>
          <p>Valor Unitário</p>
          <p>Sub-Total</p>
          <p>BOTÃO</p>
        </Styles.TableHeader>
      </>
    );
  }
}

const userType = 'Cadastrar novo usuário';
function InfoBar(pageNome) {
  return (
    <>
      {ifBar(userType)}
    </>
  );
}

export default InfoBar;
