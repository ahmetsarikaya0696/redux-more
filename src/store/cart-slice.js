import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;

      state.changed = true;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.totalAmount =
        state.totalAmount - action.payload.price * action.payload.quantity;

      state.changed = true;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem.quantity > 1) {
        existingCartItem.quantity -= action.payload.quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    updateCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
