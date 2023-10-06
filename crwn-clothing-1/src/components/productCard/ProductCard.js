import React, { useContext } from 'react'
import './ProductCard.style.scss'
import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({id,name,price,imageUrl}) => {
  const {addItemToCart} = useContext(CartContext);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick = {()=> addItemToCart({id,name,price,imageUrl})} buttonType='inverted'>Add to card</Button>
    </div>
  )
}

export default ProductCard