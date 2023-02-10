import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // WHATEVER YOU WRITE INSIDE IT IS CALLED AS ACTION CREATOR
    addItemToCart: (state, action) => {
      const item = action.payload;
      if (item._id) {
        state.items.push(action.payload);
      }
    },
    handleQuantityChange: (state, action) => {
      const { type = '0', id = '' } = action.payload;
      if (type && id) {
        let cartCopy = [...state.items];
        const itemSelected = cartCopy.find((d) => d._id === id);
        if (type === '0') {
          itemSelected.quantity += 1;
        }
        if (type === '1' && itemSelected.quantity > 1) {
          itemSelected.quantity -= 1;
        }
        state.items = cartCopy;
      }
    },
    removeFromCart: (state, action) => {
      const { id = '' } = action.payload;
      if (id) {
        let cartCopy = [...state.items];
        const filteredItems = cartCopy.filter((d) => d._id !== id);
        state.items = filteredItems;
      }
    },
  },
});

export const { addItemToCart, handleQuantityChange, removeFromCart } =
  CartSlice.actions;

export default CartSlice.reducer;
