import React, { useContext } from 'react'
import './chexkout.style.scss'
import {CartContext} from '../../contexts/cart.context'
import CheckountComponent from '../../components/checkout-component/CheckountComponent'

const Checkout = () => {
  const {cartItems,cartTotal} = useContext(CartContext);
 
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckountComponent key={cartItem.id} product={cartItem} />
      ))}
      <div className='total'>TOTAL: &#8377;{cartTotal}</div>
    </div>
  )
}

export default Checkout