import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  products: [
    {
      id: "i1",
      title: "Test Item 1",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "i2",
      title: "Test Item 2",
      price: 10,
      description: "This is a second product - amazing!",
    },
  ],
  showCart: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
