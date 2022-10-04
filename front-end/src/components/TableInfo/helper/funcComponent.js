const borderThFinish = '0px 8px 8px 0px';
const borderThStart = '8px 0 0 8px';
const selectTable = (
  { productId, productName, quantidade, unitValue, totalValue, role, pageName, name,
    userId, email, onClick, userType,
  },
) => {
  if (role === 'customer' && pageName === 'Finalizar Pedido') {
    return (
      <tr>
        <th
          data-testid={
            `customer_checkout__element-order-table-item-number-${productId}`
          }
          style={ {
            width: '4rem',
            backgroundColor: '#2FC18C',
            borderRadius: borderThStart,
          } }
        >
          {productId + 1}
        </th>
        <th
          data-testid={ `customer_checkout__element-order-table-name-${productId}` }
          style={
            { width: '50rem', textAlign: 'left' }
          }
        >
          {productName}
        </th>
        <th
          data-testid={ `customer_checkout__element-order-table-quantity-${productId}` }
          style={ {
            width: '15rem', backgroundColor: '#036B52', color: '#F2FFFC',
          } }
        >
          {quantidade}
        </th>
        <th
          data-testid={ `customer_checkout__element-order-table-unit-price-${productId}` }
          style={
            { width: '15rem', backgroundColor: '#421981', color: '#F2FFFC' }
          }
        >
          {`R$ ${unitValue.replace('.', ',')}`}
        </th>
        <th
          data-testid={ `customer_checkout__element-order-table-sub-total-${productId}` }
          style={ {
            width: '15rem',
            padding: '0',
            backgroundColor: '#056CF9',
            color: '#F2FFFC',
          } }
        >
          {`R$ ${totalValue.replace('.', ',')}`}
        </th>
        <th
          style={ {
            width: '15rem',
            padding: '0',
            backgroundColor: '#2FC18C',
            color: '#F2FFFC',
            borderRadius: borderThFinish,
          } }
        >
          <button
            data-testid={ `customer_checkout__element-order-table-remove-${productId}` }
            style={ {
              width: '18rem',
              padding: '0',
              backgroundColor: '#2FC18C',
              color: '#F2FFFC',
              borderRadius: borderThFinish,
            } }
            type="button"
            onClick={ onClick }
          >
            Remover
          </button>
        </th>
      </tr>
    );
  }
  if (role === 'customer' && pageName === 'Detalhe do pedido') {
    return (
      <tr style={ { marginBottom: '.5rem' } }>
        <th
          style={ {
            width: '2.8rem',
            backgroundColor: '#2FC18C',
            borderRadius: borderThStart,
          } }
        >
          {productId}
        </th>
        <th
          style={
            { width: '40rem', textAlign: 'left' }
          }
        >
          {productName}
        </th>
        <th
          style={ {
            width: '15rem', backgroundColor: '#036B52', color: '#F2FFFC',
          } }
        >
          {quantidade}
        </th>
        <th
          style={ { width: '15rem', backgroundColor: '#421981', color: '#F2FFFC' } }
        >
          {`R$ ${unitValue}`}
        </th>
        <th
          style={ {
            width: '15rem',
            padding: '0',
            backgroundColor: '#056CF9',
            color: '#F2FFFC',
            borderRadius: borderThFinish,
          } }
        >
          {`R$ ${totalValue}`}
        </th>
      </tr>
    );
  }
  if (role === 'seller' && pageName === 'Detalhe do pedido') {
    return (
      <tr>
        <th
          style={ {
            width: '3rem',
            backgroundColor: '#2FC18C',
            borderRadius: borderThStart,
          } }
        >
          {productId}
        </th>
        <th
          style={
            { width: '50rem', textAlign: 'left' }
          }
        >
          {productName}
        </th>
        <th
          style={ {
            width: '15rem', backgroundColor: '#036B52', color: '#F2FFFC',
          } }
        >
          {quantidade}
        </th>
        <th
          style={ { width: '15rem', backgroundColor: '#421981', color: '#F2FFFC' } }
        >
          {`R$ ${unitValue}`}
        </th>
        <th
          style={ {
            width: '15rem',
            padding: '0',
            backgroundColor: '#056CF9',
            color: '#F2FFFC',
            borderRadius: borderThFinish,
          } }
        >
          {`R$ ${totalValue}`}
        </th>
      </tr>
    );
  }
  if (role === 'administrator' && pageName === 'Cadastrar novo usuário') {
    return (
      <tr>
        <th
          data-testid={ `admin_manage__element-user-table-item-number-${userId}` }
          style={ {
            width: '5rem',
            backgroundColor: '#2FC18C',
            borderRadius: borderThStart,
          } }
        >
          {userId}
        </th>
        <th
          data-testid={ `admin_manage__element-user-table-name-${userId}` }
          style={ { width: '30rem', textAlign: 'left' } }
        >
          {name}
        </th>
        <th
          data-testid={ `admin_manage__element-user-table-email-${userId}` }
          style={ {
            width: '30rem', backgroundColor: '#036B52', color: '#F2FFFC',
          } }
        >
          {email}
        </th>
        <th
          data-testid={ `admin_manage__element-user-table-role-${userId}` }
          style={ { width: '30rem', backgroundColor: '#421981', color: '#F2FFFC' } }
        >
          {userType}
        </th>
        <th
          style={ {
            padding: '0',
            backgroundColor: '#056CF9',
            color: '#F2FFFC',
            borderRadius: borderThFinish,
          } }
        >
          <button
            type="button"
            data-testid={ `admin_manage__element-user-table-remove-${userId}` }
            onClick={ onClick }
            style={ {
              width: '15rem',
              fontSize: '1.6rem',
              padding: '8px',
              backgroundColor: '#056CF9',
              color: '#F2FFFC',
              borderRadius: borderThFinish,
            } }
          >
            Excluir
          </button>
        </th>
      </tr>
    );
  }
};
export default selectTable;
