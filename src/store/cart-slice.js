import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;

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
    removeItem(state) {
      console.log("removeItem");
    },
    clearCart(state) {
      console.log("clearCart");
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
