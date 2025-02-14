import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10); // Small delay to trigger animation
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300); // Wait for transition before unmounting
    }
  }, [isOpen]);

  if (!isVisible) return null; // Completely remove modal after animation

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-sm dark:bg-gray-700 w-full max-w-md p-4 relative transform transition-transform duration-300 ${
          isAnimating ? "scale-100" : "scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="text-center p-5">
          <FaCheck className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-green-700" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Product added to cart...
          </h3>
          <button
            onClick={onClose}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
