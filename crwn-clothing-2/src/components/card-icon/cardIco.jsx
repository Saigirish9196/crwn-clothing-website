import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shoping-bag.svg';
import { setDropDown } from '../../store/cart/cart.action';
import './cardIcom.style.scss';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartIcon = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const handleDropdown = () => dispatch(setDropDown())

  const quantity = cartItems.reduce((accumlator,item)=>item.quantity+accumlator,0)

  return (
    <div className='cart-icon-container' onClick={handleDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{quantity}</span>
    </div>
  );
};

export default CartIcon;