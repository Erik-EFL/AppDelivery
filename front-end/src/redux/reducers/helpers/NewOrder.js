const addOrderOnLocalStorage = (order) => {
  const orders = JSON.parse(localStorage.getItem('orders'));
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
};

export default addOrderOnLocalStorage;
