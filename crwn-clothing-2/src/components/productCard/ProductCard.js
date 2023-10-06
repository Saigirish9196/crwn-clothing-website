import React from 'react'
import './ProductCard.style.scss'
import Button from '../button/button.component'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'

const ProductCard = ({id,name,price,imageUrl}) => {
  const dispatch = useDispatch();
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick = {()=> dispatch(addItemToCart({id,name,price,imageUrl}))} buttonType='inverted'>Add to card</Button>
    </div>
  )
}

export default ProductCard