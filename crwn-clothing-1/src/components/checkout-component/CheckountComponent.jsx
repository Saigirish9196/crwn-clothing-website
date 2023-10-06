import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-component.style.scss'

const CheckountComponent = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const {addItemToCart,removeToCart,clearProductTocart} = useContext(CartContext)
  

  return (
    <>
      <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>removeToCart(product)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>addItemToCart(product)}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={()=>clearProductTocart(product)}>
        &#10005;
      </div>
    </div>
    </>
  );
};

export default CheckountComponent;

