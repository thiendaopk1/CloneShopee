import { createSlice } from '@reduxjs/toolkit';

let cartItemsStore = [];

if (localStorage.getItem('cart')) cartItemsStore = JSON.parse(localStorage.getItem('cart'));

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: true,
    cartItems: cartItemsStore,
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      //   && x.colors.idc === newItem.colors.idc,

      const index = state.cartItems.findIndex((x) => x.idp === newItem.idp && x.idc === newItem.idc);

      if (index >= 0) {
        //increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        //add to cart
        state.cartItems.push(newItem);
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    setQuantity(state, action) {
      const { idp, idc, quantity } = action.payload;
      //check product available in cart
      const index = state.cartItems.findIndex((x) => x.idc === idc && x.idp === idp);
      if (index >= 0) {
        console.log('index', index);
        if (quantity === 0) {
          let res1 = JSON.parse(localStorage.getItem('cart'));
          res1.splice(index, 1);
          state.cartItems = res1;
          localStorage.setItem('cart', JSON.stringify(state.cartItems));
        } else {
          // update quantity
          state.cartItems[index].quantity = quantity;
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const { idp, idc } = action.payload;
      const index = state.cartItems.findIndex((x) => x.idc === idc && x.idp === idp);
      let res1 = JSON.parse(localStorage.getItem('cart'));
      res1.splice(index, 1);
      state.cartItems = res1;
      // state.cartItems = state.cartItems.filter((x) => x.idp !== idNeedToRemove.idp);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeAll(state) {
      localStorage.removeItem('cart');
      state.current = {};
      state.cartItems = [];
    },
    setCart(state, action) {
      const cart = action.payload;
      state.cartItems = cart;

      localStorage.setItem('cart', JSON.stringify(cart));
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart, removeAll, setCart } =
  actions;
export default reducer;
