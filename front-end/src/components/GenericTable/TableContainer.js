import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

const renderTable = (pageType, userType) => {
  if (pageType === 'Finalizar Pedido') {
    return (
      <Styles.TableHeader>
        <p>Item</p>
        <p>Description</p>
        <p>Quantidade</p>
        <p>Valor Unitário</p>
        <p>Sub-Total</p>
        <p>Remover Item</p>
      </Styles.TableHeader>
    );
  }
  if (pageType === '') {
    return (
      <Styles.TableHeader userRole={ userType }>
        <tr>
          <th style={ { width: '10%' } }>Item</th>
          <th style={ { width: '60%' } }>Descrição</th>
          <th style={ { width: '10%' } }>Quantidade</th>
          <th style={ { width: '10%' } }>Valor Unitário</th>
          <th style={ { width: '10%' } }>Sub-Total</th>
        </tr>
        {/* criar a função para gerar as linhas da tabela */}
      </Styles.TableHeader>
    );
  }
  if (pageType === 'Detalhe do Pedido' && userType === 'vendedor') {
    return (
      <Styles.TableHeader userRole={ userType }>
        <tr>
          <th style={ { width: '10%' } }>Item</th>
          <th style={ { width: '60%' } }>Descrição</th>
          <th style={ { width: '10%' } }>Quantidade</th>
          <th style={ { width: '10%' } }>Valor Unitário</th>
          <th style={ { width: '10%' } }>Sub-Total</th>
        </tr>
        {/* criar a função para gerar as linhas da tabela */}
      </Styles.TableHeader>
    );
  }
  if (pageType === 'Finalizar Pedido') {
    return (
      <Styles.TableHeader userRole={ userType }>
        <tr>
          <th style={ { width: '10%' } }>Item</th>
          <th style={ { width: '50%' } }>Descrição</th>
          <th style={ { width: '10%' } }>Quantidade</th>
          <th style={ { width: '10%' } }>Valor Unitário</th>
          <th style={ { width: '10%' } }>Sub-Total</th>
          <th style={ { width: '10%' } }>Remover item</th>
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
};

TableContainer.defaultProps = {
  userRole: 'customer',
  pageName: 'Detalhes do pedido',
};

export default TableContainer;
