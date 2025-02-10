import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({product}) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div>
        <span>+</span>
        <span>Add To Cart</span>
      </div>
    </div>
  )
}

export default ProductCard
