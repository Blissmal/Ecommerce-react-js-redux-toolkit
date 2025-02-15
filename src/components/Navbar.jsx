import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModalOPen, setIsModalOPen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/"></Link>e-Shop
        </div>
        <div className="relative flex-1 mx-4 ">
          <form action="" onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4"
              type="text"
              placeholder="Search product"
              onChange={e => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button onClick={() => setIsModalOPen(true)} className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
          <Login isModalOPen={isModalOPen} setIsModalOPen={setIsModalOPen} isLogin={isLogin} setIsLogin={setIsLogin}/>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
