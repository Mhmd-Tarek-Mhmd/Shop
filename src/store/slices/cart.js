import {
  createListenerMiddleware,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";

const initialState = sessionStorage.cart ? JSON.parse(sessionStorage.cart) : [];

const getTotal = (price, sale, quantity) => {
  const saleCost = (sale * price) / 100;
  const newPrice = (price - saleCost).toFixed(2);
  return quantity * +newPrice;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => [
      ...state,
      Object.assign({}, action.payload, {
        total: getTotal(
          action.payload.price,
          action.payload.sale,
          action.payload.quantity
        ),
      }),
    ],
    removeCartItem: (state, action) =>
      state.filter((a) => a.id !== action.payload),
    resetCart: () => [],
    setQuantity: (state, { payload: { id, quantity } }) =>
      state.map((item) =>
        item.id !== id
          ? item
          : Object.assign({}, item, {
              quantity,
              total: getTotal(item.price, item.sale, quantity),
            })
      ),
    increaseQuantity: (state, action) =>
      state.map((item) =>
        item.id !== action.payload
          ? item
          : Object.assign({}, item, {
              quantity: item.quantity + 1,
              total: getTotal(item.price, item.sale, item.quantity + 1),
            })
      ),
    decreaseQuantity: (state, action) =>
      state.map((item) =>
        item.id !== action.payload
          ? item
          : Object.assign({}, item, {
              quantity: item.quantity - 1,
              total: getTotal(item.price, item.sale, item.quantity - 1),
            })
      ),
  },
});

export default cartSlice.reducer;
export const {
  addCartItem,
  removeCartItem,
  resetCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const cartMiddleware = createListenerMiddleware();
cartMiddleware.startListening({
  matcher: isAnyOf(
    addCartItem,
    removeCartItem,
    setQuantity,
    increaseQuantity,
    decreaseQuantity
  ),
  effect: (action, listener) => {
    sessionStorage.setItem("cart", JSON.stringify(listener.getState().cart));
  },
});
cartMiddleware.startListening({
  actionCreator: resetCart,
  effect: () => sessionStorage.removeItem("cart"),
});
