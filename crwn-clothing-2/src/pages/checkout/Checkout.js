import React from 'react'
import './chexkout.style.scss'
import CheckountComponent from '../../components/checkout-component/CheckountComponent'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal} from '../../store/cart/cart.selector'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
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