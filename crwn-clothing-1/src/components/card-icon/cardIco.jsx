import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shoping-bag.svg';
import './cardIcom.style.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const {setDropDown,cartItems} = useContext(CartContext)
  
  const handleDropdown = () => setDropDown()

  const quantity = cartItems.reduce((accumlator,item)=>item.quantity+accumlator,0)

  return (
    <div className='cart-icon-container' onClick={handleDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{quantity}</span>
    </div>
  );
};

export default CartIcon;