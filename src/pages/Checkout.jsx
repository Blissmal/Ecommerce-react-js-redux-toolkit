import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
    const [billingToggle, setbillingToggle] = useState(true)
    const [shippingToggle, setshippingToggle] = useState(false)
    const [paymentToggle, setpaymentToggle] = useState(false)

    const [paymentMethod, setpaymentMethod] = useState("CoD")
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className='border p-2 mb-6'>
            <div className="flex items-center justify-between" onClick={() => setbillingToggle(prev => !prev)}>
                <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                <div>
                    <label className="block text-gray-700" htmlFor="">Name</label>
                    <input className="w-full px-3 py-2 border" type="text" placeholder="Enter name.."/>
                </div>
                <div>
                    <label className="block text-gray-700" htmlFor="">Email</label>
                    <input className="w-full px-3 py-2 border" type="text" placeholder="Enter email.."/>
                </div>
                <div>
                    <label className="block text-gray-700" htmlFor="">Phone</label>
                    <input className="w-full px-3 py-2 border" type="text" placeholder="Enter phone no.."/>
                </div>
            </div>
          </div>

          <div className='border p-2 mb-6'>
            <div className="flex items-center justify-between" onClick={() => setshippingToggle(prev => !prev)}>
                <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div>
                    <label className="block text-gray-700" htmlFor="">Address</label>
                    <input className="w-full px-3 py-2 border" type="text" placeholder="Enter address.."/>
                </div>
                <div>
                    <label className="block text-gray-700" htmlFor="">City</label>
                    <input className="w-full px-3 py-2 border" type="text" placeholder="Enter city name.."/>
                </div>
                <div>
                    <label className="block text-gray-700" htmlFor="">Zip Code</label>
                    <input className="w-full px-3 py-2 border" type="text" placeholder="Enter zip code.."/>
                </div>
            </div>
          </div>

          <div className='border p-2 mb-6'>
            <div className="flex items-center justify-between" onClick={() => setpaymentToggle(prev => !prev)}>
                <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div className="flex items-center mb-2">
                    <input type="radio" name="payment" placeholder="Enter address.." checked={paymentMethod == "CoD"} onChange={() => setpaymentMethod("CoD")}/>
                    <label className="block text-gray-700 ml-2" htmlFor="">Cash on Delivery</label>
                </div>
                <div className="flex items-center mb-2">
                    <input type="radio" name="payment" placeholder="Enter address.." checked={paymentMethod == "DC"} onChange={() => setpaymentMethod("DC")}/>
                    <label className="block text-gray-700 ml-2" htmlFor="">Debit Card</label>
                </div>
                {
                    paymentMethod == "DC" && (
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="">Card Number</label>
                                <input type="text" placeholder="Enter card number" className="border p-2 w-full rounded" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="">Card Holder Name</label>
                                <input type="text" placeholder="Enter card holder's name" className="border p-2 w-full rounded" required/>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="">Expiry Date</label>
                                    <input type="text" name="" id="" placeholder="MM/YY" className="border p-2 w-full rounded" required/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="">CVV</label>
                                    <input type="text" placeholder="CVV" className="border p-2 w-full rounded" required/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
