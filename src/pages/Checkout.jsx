import React from "react";
import { FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className='border p-2 mb-6'>
            <div>
                <h3>Billing Information</h3>
                <FaAngleUp />
            </div>
            <div>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                </div>
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
