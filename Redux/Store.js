// REDUX STORE
// DETAILS NEEDED
// 1. CREATE STORE
import { configureStore } from '@reduxjs/toolkit';
// IMPORT REDUCERS
import ProductReducer from './Reducers/Products.reducer';
import CartReducer from './Reducers/Cart.reducer';

export default configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
