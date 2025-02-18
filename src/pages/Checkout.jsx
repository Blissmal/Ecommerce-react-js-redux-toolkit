import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import CheckoutHeader from "../components/checkout-components/CheckoutHeader";
import SubTotal from "../components/checkout-components/SubTotal";
import Payment from "../components/checkout-components/Payment";
import Delivery from "../components/checkout-components/Delivery";

const Checkout = ({ setOrder }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    phoneNo: "",
    CustomerAddress: "",
    PickupAddress: "",
    VATNum: "",
    selectedPayment: "credit-card",
    selectedDelivery: "dhl",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const validateInputs = () => {
    const requiredFields = [
      "name",
      "email",
      "country",
      "city",
      "phoneNo",
      "CustomerAddress",
      "PickupAddress",
      "VATNum",
    ];

    for (let field of requiredFields) {
      if (!shippingInfo[field]) {
        alert(`Please fill in the ${field} field.`);
        return false;
      }
    }
    return true;
  };

  const handleOrder = (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    if (!validateInputs()) return;

    const newOrder = {
      products: cart.products,
      orderNumber: "1234423",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };

    setOrder(newOrder); // Set the order in parent or global state
    navigate("/order-confirmation", { state: { order: newOrder } }); // Pass order via navigation
  };

  if (cart.products.length === 0) {
    return (
      <div className="p-6 text-center">
        <p>Your cart is empty. Please add items to proceed.</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form onSubmit={handleOrder} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <CheckoutHeader />
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Country</label>
                  <select
                    id="country"
                    value={shippingInfo.country}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="United States">United States</option>
                    <option value="Australia">Australia</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">City</label>
                  <select
                    id="city"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select a city</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phoneNo" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNo"
                    value={shippingInfo.phoneNo}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phoneNo: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="123-456-7890"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="customerAddress" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Customer Address</label>
                  <input
                    type="text"
                    id="customerAddress"
                    value={shippingInfo.CustomerAddress}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, CustomerAddress: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="pickupAddress" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Pickup Address</label>
                  <input
                    type="text"
                    id="pickupAddress"
                    value={shippingInfo.PickupAddress}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, PickupAddress: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Warehouse Location"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="vatNum" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">VAT Number</label>
                  <input
                    type="text"
                    id="vatNum"
                    value={shippingInfo.VATNum}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, VATNum: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="DE123456789"
                    required
                  />
                </div>
              </div>
            </div>

            <Payment shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} />
            <Delivery shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} />
          </div>

          <SubTotal cart={cart} handleOrder={handleOrder} />
        </div>
      </form>
    </section>
  );
};

Checkout.propTypes = {
  setOrder: propTypes.func.isRequired,
};

export default Checkout;
