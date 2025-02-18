import PropTypes from "prop-types";

const Payment = ({ shippingInfo, setShippingInfo }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Credit Card */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <input
              id="credit-card"
              type="radio"
              name="payment-method"
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
              checked={shippingInfo.selectedPayment === "credit-card"}
              onChange={() =>
                setShippingInfo((prev) => ({
                  ...prev,
                  selectedPayment: "credit-card",
                }))
              }
            />
            <div className="ms-4 text-sm">
              <label htmlFor="credit-card" className="font-medium text-gray-900 dark:text-white">
                Credit Card
              </label>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Pay with your credit card</p>
            </div>
          </div>
        </div>

        {/* Payment on Delivery */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <input
              id="pay-on-delivery"
              type="radio"
              name="payment-method"
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
              checked={shippingInfo.selectedPayment === "pay-on-delivery"}
              onChange={() =>
                setShippingInfo((prev) => ({
                  ...prev,
                  selectedPayment: "pay-on-delivery",
                }))
              }
            />
            <div className="ms-4 text-sm">
              <label htmlFor="pay-on-delivery" className="font-medium text-gray-900 dark:text-white">
                Payment on Delivery
              </label>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">+$15 payment processing fee</p>
            </div>
          </div>
        </div>

        {/* PayPal */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <input
              id="paypal"
              type="radio"
              name="payment-method"
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
              checked={shippingInfo.selectedPayment === "paypal"}
              onChange={() =>
                setShippingInfo((prev) => ({
                  ...prev,
                  selectedPayment: "paypal",
                }))
              }
            />
            <div className="ms-4 text-sm">
              <label htmlFor="paypal" className="font-medium text-gray-900 dark:text-white">
                PayPal
              </label>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Connect to your account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {
  shippingInfo: PropTypes.shape({
    selectedPayment: PropTypes.string.isRequired,
  }).isRequired,
  setShippingInfo: PropTypes.func.isRequired,
};

export default Payment;
