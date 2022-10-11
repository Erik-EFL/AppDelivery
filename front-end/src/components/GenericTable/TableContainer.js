import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

const renderTable = (pageName, userRole) => {
  if (pageName === 'Detalhe do Pedido' && userRole === 'customer') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '5rem' } }>Item</th>
          <th style={ { width: '50rem' } }>Descrição</th>
          <th style={ { width: '21rem' } }>Quantidade</th>
          <th style={ { width: '21rem' } }>Valor Unitário</th>
          <th style={ { width: '21rem' } }>Sub-Total</th>
        </tr>
      </Styles.TableHeader>
    );
  }
  if (pageName === 'Detalhe do Pedido' && userRole === 'seller') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '5rem' } }>Item</th>
          <th style={ { width: '50rem' } }>Descrição</th>
          <th style={ { width: '21rem' } }>Quantidade</th>
          <th style={ { width: '21rem' } }>Valor Unitário</th>
          <th style={ { width: '21rem' } }>Sub-Total</th>
        </tr>
      </Styles.TableHeader>
    );
  }
  if (pageName === 'Finalizar Pedido' && userRole === 'customer') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '5rem' } }>Item</th>
          <th style={ { width: '100rem' } }>Descrição</th>
          <th style={ { width: '28rem' } }>Quantidade</th>
          <th style={ { width: '20rem' } }>Valor Unitário</th>
          <th style={ { width: '23rem' } }>Sub-Total</th>
          <th style={ { width: '45rem' } }>Remover item</th>
        </tr>
      </Styles.TableHeader>
    );
  }
  if (pageName === 'admin' && userRole === 'administrator') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '5rem' } }>&nbsp;</th>
          <th style={ { width: '30rem' } }>Nome</th>
          <th style={ { width: '30rem' } }>Email</th>
          <th style={ { width: '30rem' } }>Tipo</th>
          <th style={ { width: '15rem' } }>Excluir</th>
        </tr>
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
