import { createSlice } from '@reduxjs/toolkit';
import { Data } from '../../data';

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    // WHATEVER YOU WRITE INSIDE IT IS CALLED AS ACTION CREATOR
    saveAllProducts: (state, action) => {
      state.products.push(...action.payload);
    },
  },
});

export const { saveAllProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
// {
//   id: 4,
//   name: 'Double Panner Supreme',
//   imageUrl:
//     'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=300',
//   price: 399,
//   discount: '10%',
//   sizes: [],
//   isVeg: true,
//   isNonVeg: false,
//   quantity: 1,
// },
