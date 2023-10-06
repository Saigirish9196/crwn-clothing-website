import CART_ACTION_TYPES from "./cart.type";



const addCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    
    if (existingCartItem) {
      return cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  
    return [...cartItems, { ...product, quantity: 1 }];
  };
  
  const removeCart = (cartItems, product) => {
    return cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
  };
  
  const clearProductItem = (cartItems, product) => {
    return cartItems.filter(item => item.id !== product.id);
  };

const initialState = {
    dropDown: false,
    cartItems: []
  };


export const cartReducer = (state=initialState, action) => {
    switch (action.type) {
      case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
        return {
          ...state,
          dropDown: !state.dropDown
        };
      case CART_ACTION_TYPES.ADD_TO_CART:
        return {
          ...state,
          cartItems: addCartItem(state.cartItems, action.payload)
        };
      case CART_ACTION_TYPES.REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: removeCart(state.cartItems, action.payload)
        };
      case CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART:
        return {
          ...state,
          cartItems: clearProductItem(state.cartItems, action.payload)
        };
      default:
        return state;
    }
  };
  