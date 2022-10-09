import { formatPrice } from '../../../services/helper/utilidades';

const selectTable = (
  role,
  pageName,
  { index, productName, quantidade, unitValue, totalValue,
    userName, userEmail, userType, onClick,
  },
) => {
  if (role === 'customer' && pageName === 'Finalizar Pedido') {
    return (
      <>
        <th
          className="id"
          data-testid={
            `customer_checkout__element-order-table-item-number-${index}`
          }
        >
          {index + 1}
        </th>
        <th
          className="checkoutDescription"
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {productName}
        </th>
        <th
          className="checkoutQuantity"
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {quantidade}
        </th>
        <th
          className="checkoutUnitPrice"
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {formatPrice(unitValue)}
        </th>
        <th
          className="checkoutSubTotal"
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {formatPrice(totalValue)}
        </th>
        <th className="checkoutRemove">
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ onClick }
          >
            Remover
          </button>
        </th>
      </>
    );
  }
  if (role === 'customer' && pageName === 'Detalhe do Pedido') {
    return (
      <>
        <th
          className="id"
          data-testid={ `customer_order_details__element-order-table-item-number-
          ${index}` }
        >
          {index + 1}
        </th>
        <th
          className="detailsDescription"
          data-testid={ `customer_order_details__element-order-table-name-${index}` }
        >
          {productName}
        </th>
        <th
          className="detailsQuantity"
          data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
        >
          {quantidade}
        </th>
        <th
          className="detailsPrice"
          data-testid={ `customer_order_details__element-order-table-unit-price-
          ${index}` }
        >
          {formatPrice(unitValue)}
        </th>
        <th
          className="detailsTotalPrice"
          data-testid={ `customer_order_details__element-order-table-sub-total-
          ${index}` }
        >
          {formatPrice(totalValue)}
        </th>
      </>
    );
  }
  if (role === 'seller' && pageName === 'Detalhe do Pedido') {
    return (
      <>
        <th
          className="id"
          data-testid={ `seller_orders__element-order-table-item-number-${index}` }
        >
          {index + 1}
        </th>
        <th
          className="detailsDescription"
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {productName}
        </th>
        <th
          className="detailsQuantity"
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          {quantidade}
        </th>
        <th
          className="detailsPrice"
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          {`R$ ${unitValue}`}
        </th>
        <th
          className="detailsTotalPrice"
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          {`R$ ${totalValue}`}
        </th>
      </>
    );
  }
  if (role === 'administrator' && pageName === 'Cadastrar novo usuário') {
    return (
      <>
        <th
          className="id"
          data-testid={ `admin_manage__element-user-table-item-number-${index}` }
        >
          {index + 1}
        </th>
        <th
          className="admDescription"
          data-testid={ `admin_manage__element-user-table-name-${index}` }
        >
          {userName}
        </th>
        <th
          className="admEmail"
          data-testid={ `admin_manage__element-user-table-email-${index}` }
        >
          {userEmail}
        </th>
        <th
          className="admType"
          data-testid={ `admin_manage__element-user-table-role-${index}` }
        >
          {userType}
        </th>
        <th className="admDelete">
          <button
            type="button"
            onClick={ onClick }
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
          >
            Excluir
          </button>
        </th>
      </>
    );
  }
};
export default selectTable;
