import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.dropDown
// );

export const selectIsCartOpen = (cart) => cart.dropDown

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);



// export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   )
// );

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cart) => {
    console.log(cart.cartItems);
    return cart.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
  }
)