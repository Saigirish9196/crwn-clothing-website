import React from "react";
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './nav.style.scss'
import {  signOut } from "../../actions/actions";
import CartIcon from "../card-icon/cardIco";
import CartDropdown from "../cart-droupdown/CartDropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";


const NavBar = () =>{ 
  const dropDown = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)  
  const dispatch = useDispatch();
  const signOutHandler =  () =>{
      signOut()
      dispatch(setCurrentUser(null))
  }
  

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className="logo"/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? <span onClick={signOutHandler} className="nav-link">SIGN OUT</span>:<Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
          }
         <CartIcon/>
        </div>
        { dropDown && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  )}

  export default NavBar