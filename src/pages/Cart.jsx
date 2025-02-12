import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/image/emptycart.png";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.product);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        // <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        //   {
        //     cart.products.length > 0 ? (
        //         <div>
        //             <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
        //             <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        //                 <div className='md:w-2/3'>
        //                     <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
        //                         <p>PRODUCTS</p>
        //                         <div className='flex space-x-8'>
        //                             <p>PRICE</p>
        //                             <p>QUANTITY</p>
        //                             <p>SUBTOTAL</p>
        //                             <p>REMOVE</p>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         {
        //                             cart.products.map((product) => (
        //                                 <div key={product.id} className='flex items-center justify-between p-3 border-b'>
        //                                     <div className='md:flex items-center space-x-4'>
        //                                         <img src={product.image} alt="" className='w-16 h-16 object-contain rounded'/>
        //                                         <div className='flex-1 ml-4'>
        //                                             <h3 className='text-lg font-semibold'>{product.name}</h3>
        //                                         </div>
        //                                     </div>
        //                                     <div className='flex space-x-12 items-center'>
        //                                         <p>{product.price}</p>
        //                                         <div className='flex items-center justify-center border'>
        //                                             <button className='text-xl font-bold px-1.5 border-r' onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
        //                                             <p className='text-xl px-2'>{product.quantity}</p>
        //                                             <button className='text-xl px-1 border-l' onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
        //                                         </div>
        //                                         <p>${(product.quantity * product.price).toFixed(2)}</p>
        //                                         <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(removeFromCart(product.id))}>
        //                                             <FaTrashAlt />
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             ))
        //                         }
        //                     </div>
        //                 </div>
        //                 <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
        //                     <h3 className='text-sm font-semibold mb-6'>CART TOTAL</h3>
        //                     <div className='flex justify-between mb-5 border-b pb-1'>
        //                         <span className='text-sm'>Total Items:</span>
        //                         <span>{cart.totalQuantity}</span>
        //                     </div>
        //                     <div className='mb-4 border-b pb-2'>
        //                         <p>Shipping:</p>
        //                         <p className='ml-2'>Shipping to:</p>
        //                         <span className='text-xs font-bold'>{address}</span>
        //                         <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={() => setIsModalOpen(true)}>Change Address</button>
        //                     </div>
        //                     <div className='flex justify-between mb-4'>
        //                         <span>Total Price: </span>
        //                         <span>${cart.totalPrice.toFixed(2)}</span>
        //                     </div>
        //                     <button className='w-full rounded-lg bg-red-600 text-white py-2 hover:bg-red-800' onClick={() => navigate('/checkout')}>Proceed to checkout</button>
        //                 </div>
        //             </div>
        //             <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        //                 <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
        //             </Modal>
        //         </div>
        //     ) : (
        //         <div className='flex justify-center'>
        //             <img src={emptyCart} alt="" className='h-96'/>
        //         </div>
        //     )
        //   }
        // </div>
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    Shopping Cart
                </h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {" "}
                            {
                                cart.products.map(product => (
                                    <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="w-20 shrink-0 md:order-1">
                                                <img
                                                    className="h-20 w-20"
                                                    src={product.image}
                                                    alt="imac image"
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => dispatch(decreaseQuantity(product.id))}
                                                        id="decrement-button-5"
                                                        data-input-counter-decrement="counter-input-5"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                    >
                                                        <svg
                                                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 2"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M1 1h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        id="counter-input-5"
                                                        data-input-counter
                                                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                        placeholder=""
                                                        value={product.quantity}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => dispatch(increaseQuantity(product.id))}
                                                        id="increment-button-5"
                                                        data-input-counter-increment="counter-input-5"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                    >
                                                        <svg
                                                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 18"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M9 1v16M1 9h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">
                                                        ${(product.quantity * product.price).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    {product.name}
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <svg
                                                            className="me-1.5 h-5 w-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                                            />
                                                        </svg>
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => dispatch(removeFromCart(product.id))}
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <svg
                                                            className="me-1.5 h-5 w-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M6 18 17.94 6M18 18 6.06 6"
                                                            />
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>{" "}
                        <div className="hidden xl:mt-8 xl:block">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                People also bought
                            </h3>
                            <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">

                                {products.products.slice(0, 3).map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                Order summary
                            </p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                            Original price
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                                            ${cart.totalPrice.toFixed(2)}
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                            Savings
                                        </dt>
                                        <dd className="text-base font-medium text-green-600">
                                            -$299.00
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                            Store Pickup
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                                            $99
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                            Tax
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                                            $799
                                        </dd>
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                                        ${cart.totalPrice.toFixed(2)}
                                    </dd>
                                </dl>
                            </div>

                            <Link
                                to="/checkout"
                                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Proceed to Checkout
                            </Link>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {" "}
                                    or{" "}
                                </span>
                                <Link
                                    to="/shop"
                                    title=""
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                                >
                                    Continue Shopping
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 12H5m14 0-4 4m4-4-4-4"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="voucher"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {" "}
                                        Do you have a voucher or gift card?{" "}
                                    </label>
                                    <input
                                        type="text"
                                        id="voucher"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Apply Code
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
