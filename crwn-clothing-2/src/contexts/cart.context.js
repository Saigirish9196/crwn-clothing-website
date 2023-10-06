import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  dropDown: false,
  cartItems: [],
  cartTotal: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        dropDown: !state.dropDown
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: removeCart(state.cartItems, action.payload)
      };
    case "CLEAR_PRODUCT_FROM_CART":
      return {
        ...state,
        cartItems: clearProductItem(state.cartItems, action.payload)
      };
      case "SET_CART_TOTAL":
        return {
          ...state,
          cartTotal:action.payload
        };
    default:
      return state;
  }
};

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

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const newCartTotal = state.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
   
    dispatch({ type: "SET_CART_TOTAL", payload: newCartTotal });
  }, [state.cartItems]);

  
  
  const value = {
    dropDown: state.dropDown,
    cartItems: state.cartItems,
    cartTotal: state.cartTotal,
    setDropDown: () => dispatch({ type: "TOGGLE_DROPDOWN" }),
    addItemToCart: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    removeToCart: (product) => dispatch({ type: "REMOVE_FROM_CART", payload: product }),
    clearProductTocart: (product) => dispatch({ type: "CLEAR_PRODUCT_FROM_CART", payload: product })
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};


