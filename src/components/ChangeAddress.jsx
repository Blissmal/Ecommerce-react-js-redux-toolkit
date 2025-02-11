import React from 'react'

const ChangeAddress = () => {
  return (
    <div>
      <input type="text" placeholder='Enter new address' className='border p-2 w-full mb-4'/>
      <button>Cancel</button>
      <button>Save Address</button>
    </div>
  )
}

export default ChangeAddress
