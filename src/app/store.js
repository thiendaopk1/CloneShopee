import counterReducer from '../features/couter/counterSlice';
import userReducer from '../features/auth/userSlice';
import cartReducer from '../features/product/components/shoppingCart/CartSlice';
import addressReducer from '../features/user/component/AddressSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
  address: addressReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
