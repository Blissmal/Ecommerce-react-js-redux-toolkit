import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/"></Link>e-Shop
            </div>
            <div className='relative flex-1 mx-4 '>
                <form action="">
                    <input className='w-full border py-2 px-4' type="text" placeholder='Search product' />
                    <FaSearch className='absolute top-3 right-3 text-red-500'/>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/cart"><FaShoppingCart /></Link>
                <button className='hidden md:block'>Login | Register</button>
                <button className='block md:hidden'><FaUser /></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
