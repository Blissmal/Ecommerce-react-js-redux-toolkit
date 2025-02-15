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
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-x-16'>
                <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail
