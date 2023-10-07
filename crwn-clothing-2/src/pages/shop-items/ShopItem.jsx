import React, {useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { useParams } from 'react-router-dom'
import './shop-item.scss'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/categories/catagory.selector'


const ShopItem = () => {
  const {category} = useParams();
  const products = useSelector(selectProducts)
  const [product,setProduct] = useState({})
  
  
  useEffect(()=>{
    const findProduct =  products.find(product =>product.title.toLowerCase() ===category.toLowerCase())
    setProduct(findProduct)   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category,product])

  const {title,items} = product;

  return (
    <div  className='category-item-container'>
          <h2>
            <span className='title'>{title}</span>
          </h2>
          
          <div className='products-container'>
            {items && items.map(({id,name,price,imageUrl}) => (
              <ProductCard key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
            ))}
        </div>
    </div>  
  )
}

export default ShopItem