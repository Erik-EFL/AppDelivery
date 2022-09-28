export const addtoCartFlow = (state, action, inCart) => {
  const response = {
    ...state,
    cart: inCart
      ? state.cart.map((item) => (item.id === action.item.id
        ? { ...item, qty: item.qty + 1 }
        : item))
      : [...state.cart, { ...action.item, qty: 1 }],
  };

  localStorage.removeItem('cart');
  localStorage.setItem('cart', JSON.stringify(response));
  return response;
};

export const removeFromCartFlow = (state, action) => {
  const response = {
    ...state,
    cart: state.cart.map((item) => {
      if (item.id === action.item.id) {
        if (item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        }
        state.cart = state.cart.filter((product) => product.id !== action.item.id);
        return;
      }
      return item;
    }),
  };

  const filteredResponse = {
    ...response,
    cart: response.cart.filter((item) => item?.qty > 0),
  };

  localStorage.removeItem('cart');
  localStorage.setItem('cart', JSON.stringify(filteredResponse));
  return filteredResponse;
};
