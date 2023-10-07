import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.dropDown
// );

export const selectIsCartOpen = (state) => state.cart.dropDown

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);


export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
  }
)