import React from 'react'

const Modal = ({isModalOpen, setIsModalOPen}) => {
    {
        isModalOpen ? (
          <div>
            <div>
              <button>&times;</button>
              <div>children</div>
            </div>
          </div>
        ) : (
            null
        )
    }
}

export default Modal
