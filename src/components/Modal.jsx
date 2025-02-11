import React from 'react'

const Modal = ({isModalOpen, setIsModalOPen}) => {
  return (
    <div>
      <div>
        <button>&times;</button>
        <div>children</div>
      </div>
    </div>
  )
}

export default Modal
