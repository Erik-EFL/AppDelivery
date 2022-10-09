import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

const renderTable = (pageName, userRole) => {
  if (pageName === 'Detalhe do Pedido' && userRole === 'customer') {
    return (
      <Styles.TableHeader>
        <tbody>
          <tr>
            <th style={ { width: '5rem' } }>Item</th>
            <th style={ { width: '50rem' } }>Descrição</th>
            <th style={ { width: '21rem' } }>Quantidade</th>
            <th style={ { width: '21rem' } }>Valor Unitário</th>
            <th style={ { width: '21rem' } }>Sub-Total</th>
          </tr>
        </tbody>
      </Styles.TableHeader>
    );
  }
  if (pageName === 'Detalhe do Pedido' && userRole === 'seller') {
    return (
      <Styles.TableHeader>
        <tbody>
          <tr>
            <th style={ { width: '5rem' } }>Item</th>
            <th style={ { width: '50rem' } }>Descrição</th>
            <th style={ { width: '21rem' } }>Quantidade</th>
            <th style={ { width: '21rem' } }>Valor Unitário</th>
            <th style={ { width: '21rem' } }>Sub-Total</th>
          </tr>
        </tbody>
      </Styles.TableHeader>
    );
  }
  if (pageName === 'Finalizar Pedido' && userRole === 'customer') {
    return (
      <Styles.TableHeader>
        <tbody>
          <tr>
            <th style={ { width: '7rem' } }>Item</th>
            <th style={ { width: '55rem' } }>Descrição</th>
            <th style={ { width: '15rem' } }>Quantidade</th>
            <th style={ { width: '15rem' } }>Valor Unitário</th>
            <th style={ { width: '15rem' } }>Sub-Total</th>
            <th style={ { width: '27rem' } }>Remover item</th>
          </tr>
        </tbody>
      </Styles.TableHeader>
    );
  }
  if (pageName === 'admin' && userRole === 'administrator') {
    return (
      <Styles.TableHeader>
        <tbody>
          <tr>
            <th style={ { width: '5rem' } }>&nbsp;</th>
            <th style={ { width: '30rem' } }>Nome</th>
            <th style={ { width: '30rem' } }>Email</th>
            <th style={ { width: '30rem' } }>Tipo</th>
            <th style={ { width: '15rem' } }>Excluir</th>
          </tr>
        </tbody>
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
