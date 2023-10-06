import React from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { Link } from 'react-router-dom'
import './shop.style.scss'
import { useSelector } from 'react-redux'
import {selectProducts} from '../../store/categories/catagory.selector'

const ShopComp = () => {
  const products = useSelector(selectProducts)
  return (
    <div  className='shop-container'>
      {products.map(({title,items}) => (
        <div key={title} className='category-preview-container'>
          <h2>
            <Link className='title' to={title}>
              {title.toUpperCase()}
            </Link>
          </h2>
          <div className='products-container'>
            {items.slice(0,4).map(({id,name,price,imageUrl}) => (
              <ProductCard key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShopComp

