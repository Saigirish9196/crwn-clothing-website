import React, { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.style.scss'
import CartItem from '../cart-Item/CartItem'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate()

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
          {cartItems.map( ({name,id,quantity,imageUrl,price}) =>
          <CartItem key={id} name={name}
                quantity={quantity}
                imageUrl={imageUrl}
                price={price}
           />)}
      </div>
      <Button onClick ={()=>navigate('/checkout')}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown