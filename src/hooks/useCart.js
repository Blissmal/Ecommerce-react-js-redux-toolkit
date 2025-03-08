import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

export const useCart = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e, product) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    dispatch(addToCart(product));
    setIsModalOpen(true);
  };

  return { handleAddToCart, isModalOpen, setIsModalOpen, addToCart };
};
