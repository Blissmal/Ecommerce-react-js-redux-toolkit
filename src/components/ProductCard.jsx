import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { Rating, Typography } from "@material-tailwind/react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    setIsModalOpen(true);
  };
  const [favourites, setFavourites] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
      <div
      key={product.id}
      className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
      // onClick={() => navigate(`/product/${product.id}`)}
    >
      <a href="#" className="overflow-hidden rounded">
        <img
          className="ml-0 h-44 w-44 rounded-lg mb-3"
          src={product.image}
          alt="imac image"
        />
      </a>
      <div>
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {product.name}
        </a>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
          This generation has some improvements, including a longer continuous
          battery life.
        </p>
        <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-200">
              4.0/5 (100 reviews)
            </Typography>
          </div>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          <span className="line-through"> ${product.price} </span>
        </p>
        <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
          $9.99
        </p>
      </div>
      <div className="mt-6 flex items-center gap-2.5">
        <button
          data-tooltip-target="favourites-tooltip-1"
          type="button"
          onClick={() => setFavourites((prev) => !prev)}
          className={`inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 ${
            favourites
              ? "dark:text-red-400"
              : "dark:text-gray-400 dark:hover:text-white"
          } dark:hover:bg-gray-700  dark:focus:ring-gray-700`}
        >
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
              fill="currentColor"
              d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
            ></path>
          </svg>
        </button>
        <div
          id="favourites-tooltip-1"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Add to favourites
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          onClick={(e) => handleAddToCart(e, product)}
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            className="-ms-2 me-2 h-5 w-5"
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
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
            />
          </svg>
          Add to cart
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
