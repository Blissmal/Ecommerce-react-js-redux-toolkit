import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()
    const products = useSelector(state => state.product.products)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (products?.length) {
            const newProduct = products.find(product => product.id === Number(id))
            setProduct(newProduct || null)
        }
    }, [id, products])

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

export default ProductDetail
