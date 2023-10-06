import React from "react";
import './checkout-component.style.scss'
import { useDispatch } from "react-redux";
import { addItemToCart, clearProductTocart, removeToCart } from "../../store/cart/cart.action";

const CheckountComponent = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const dispatch = useDispatch()

  return (
    <>
      <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>dispatch(removeToCart(product))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>dispatch(addItemToCart(product))}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={()=>dispatch(clearProductTocart(product))}>
        &#10005;
      </div>
    </div>
    </>
  );
};

export default CheckountComponent;

