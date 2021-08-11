import counterReducer from '../features/couter/counterSlice';
import userReducer from '../features/auth/userSlice';
import cartReducer from '../features/product/components/shoppingCart/CartSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
