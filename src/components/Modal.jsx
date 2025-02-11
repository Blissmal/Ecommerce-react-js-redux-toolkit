import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
    if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-300 text-3xl"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>
        <div>children</div>
      </div>
    </div>
  );
};

export default Modal;
