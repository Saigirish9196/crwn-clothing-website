import CART_ACTION_TYPES from "./cart.type"


export const setDropDown = () => ({type:CART_ACTION_TYPES.TOGGLE_DROPDOWN})

export const addItemToCart = (product) => ({type: CART_ACTION_TYPES.ADD_TO_CART, payload: product})

export const removeToCart = (product) => ({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product })

export  const clearProductTocart  = (product) => ({ type: CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART, payload: product })
