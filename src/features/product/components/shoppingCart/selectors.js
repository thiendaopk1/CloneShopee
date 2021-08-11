import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelectors = (state) => state.cart.cartItems;

//count number of products in cart
export const cartItemsCountSelectors = createSelector(cartItemsSelectors, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0),
);

//calculate total of cart
export const cartTotalCountSelectors = createSelector(cartItemsSelectors, (cartItems) =>
  cartItems.reduce((total, item) => total + item.newProduct.salePrice * item.quantity, 0),
);
