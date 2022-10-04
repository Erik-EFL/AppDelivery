import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

const renderTable = (pageType, userType) => {
  if (pageType === 'Detalhe do Pedido' && userType === 'costumer') {
    return (
      <Styles.TableHeader>
        <th style={ { width: '10rem' } }>Item</th>
        <th style={ { width: '60rem' } }>Descrição</th>
        <th style={ { width: '10rem' } }>Quantidade</th>
        <th style={ { width: '10rem' } }>Valor Unitário</th>
        <th style={ { width: '10rem' } }>Sub-Total</th>
      </Styles.TableHeader>
    );
  }
  if (pageType === 'Detalhe do Pedido' && userType === 'vendedor') {
    return (
      <Styles.TableHeader>
        <th style={ { width: '10rem' } }>Item</th>
        <th style={ { width: '60rem' } }>Descrição</th>
        <th style={ { width: '10rem' } }>Quantidade</th>
        <th style={ { width: '10rem' } }>Valor Unitário</th>
        <th style={ { width: '10rem' } }>Sub-Total</th>
      </Styles.TableHeader>
    );
  }
  if (pageType === 'Finalizar Pedido' && userType === 'customer') {
    return (
      <Styles.TableHeader>
        <th style={ { width: '7rem' } }>Item</th>
        <th style={ { width: '55rem' } }>Descrição</th>
        <th style={ { width: '15rem' } }>Quantidade</th>
        <th style={ { width: '15rem' } }>Valor Unitário</th>
        <th style={ { width: '15rem' } }>Sub-Total</th>
        <th style={ { width: '27rem' } }>Remover item</th>
      </Styles.TableHeader>
    );
  }
  if (pageType === 'admin' && userType === 'administrator') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '5rem' } }>&nbsp;</th>
          <th style={ { width: '30rem' } }>Nome</th>
          <th style={ { width: '30rem' } }>Email</th>
          <th style={ { width: '30rem' } }>Tipo</th>
          <th style={ { width: '15rem' } }>Excluir</th>
        </tr>
        {/* criar a função para gerar as linhas da tabela */}
      </Styles.TableHeader>
    );
  }
};

function TableContainer({ pageName, userRole }) {
  return (
    <>
      {
        renderTable(pageName, userRole)
      }
    </>
  );
}

TableContainer.propTypes = {
  userRole: PropTypes.string,
  pageName: PropTypes.string,
}.isRequired;

export default TableContainer;
