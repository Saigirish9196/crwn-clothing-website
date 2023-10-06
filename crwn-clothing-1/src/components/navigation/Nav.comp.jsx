import React, { useContext, useState} from "react";
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './nav.style.scss'
import { UserContext } from "../../contexts/context.api";
import {  signOut } from "../../actions/actions";
import CartIcon from "../card-icon/cardIco";
import CartDropdown from "../cart-droupdown/CartDropdown";
import { CartContext } from "../../contexts/cart.context";

const NavBar = () =>{ 
  
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const {dropDown} = useContext(CartContext)

  const signOutHandler =  () =>{
      signOut()
      setCurrentUser(null)
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