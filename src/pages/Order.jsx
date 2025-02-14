import React from 'react'

const Order = ({order}) => {
  return (
    <div>
      <h2>Thank you for your Order</h2>
      <p>Your order has been placed</p>
      <div>
        <h3>Order Summary</h3>
        <p>Order Nummber: {order.orderNumber}</p>
      </div>
    </div>
  )
}

export default Order
