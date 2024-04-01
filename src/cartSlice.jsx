import { createSlice } from '@reduxjs/toolkit';
import jsonData from './jsonData';

const initialState = jsonData.products.map(product => ({ ...product, quantity: 0 }));

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId } = action.payload;
      const item = state.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    removeFromCart(state, action) {
      const { productId } = action.payload;
      const item = state.find(item => item.id === productId);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
