import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()
    const products = useSelector(state => state.product.products)
    const [product, setProduct] = useState()

    useEffect(() => {
        const newProduct = products.find(product => product.id === id)
        setProduct(newProduct)
    }, [id, products])
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
