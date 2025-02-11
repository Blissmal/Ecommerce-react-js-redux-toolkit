import React, { useState } from 'react'

const ChangeAddress = ({setAddress, setIsModalOpen}) => {
    const [newAddress, setnewAddress] = useState("")
    const onClose = () => {
        setAddress(newAddress)
        setIsModalOpen(false)
    }
  return (
    <div>
      <input type="text" placeholder='Enter new address' className='border p-2 rounded-md w-full mb-4' onChange={e => setnewAddress(e.target.value)}/>
      <div className='flex justify-end'>
      <button className='bg-gray-500 text-white py-2 px-4 rounded-md mr-2' onClick={() => setIsModalOpen(false)}>Cancel</button>
      <button className='bg-blue-500 text-white py-2 px-4 rounded-md' onClick={onClose}>Save Address</button>
      </div>
    </div>
  )
}

export default ChangeAddress
