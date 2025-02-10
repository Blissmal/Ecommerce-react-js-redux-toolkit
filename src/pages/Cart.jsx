import React from 'react'
import { useSelector } from 'react-redux'
import emptyCart from '../assets/images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {
    const cart = useSelector(state => state.cart)
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {
        cart.products.length > 0 ? (
            <div>
                <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                    <div className='md:w-2/3'>
                        <div className='flex justify-between border-b items-center b-4'>
                            <p>PRODUCTS</p>
                            <div>
                                <p>PRICE</p>
                                <p>QUANTITY</p>
                                <p>SUBTOTAL</p>
                                <p>REMOVE</p>
                            </div>
                        </div>
                        <div>
                            {
                                cart.products.map((product) => (
                                    <div>
                                        <div>
                                            <img src={product.image} alt="" />
                                            <div>
                                                <h3>{product.name}</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{product.price}</p>
                                            <div className='flex'>
                                                <button>-</button>
                                                <p>{product.quantity}</p>
                                                <button>+</button>
                                            </div>
                                            <p>${(product.quantity * product.price).toFixed(2)}</p>
                                            <button>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        ) : (
            <div className='flex justify-center'>
                <img src={emptyCart} alt="" className='h-96'/>
            </div>
        )
      }
    </div>
  )
}

export default Cart
