import React from 'react'
import ProductItem from './ProductItem'
import productData from '../productData'

const Products = (props) => {
  
  
  return (
    <div className='grid grid-cols-3 gap-10 mb-8'>
      {productData.map((product) =>(
        <ProductItem cart={props.cart} setCart={props.setCart}  product= {product} key={product.id} />
      ))}
      
    </div>
  )
}

export default Products