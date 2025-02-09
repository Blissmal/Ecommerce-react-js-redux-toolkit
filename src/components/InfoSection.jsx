import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast } from "react-icons/fa"

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-3xl text-red-600"/>,
            title: "Free shipping",
            description: "Get your orders delivered with no extra cost",
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600"/>,
            title: "Support 24/7",
            description: "We are here to assist you anytime",
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-red-600"/>,
            title: "100% Money Back",
            description: "We are here to assist you anytime",
        },
        {
            icon: <FaLock className="text-3xl text-red-600"/>,
            title: "Payment Secure",
            description: "Your payment information is safe with us",
        },
        {
            icon: <FaTag className="text-3xl text-red-600"/>,
            title: "Discount",
            description: "ENjoy the best prices on our products",
        },
    ]
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
            infoItems.map((infoItem, index) => (
                <div key={index} className="">
                    {infoItem.icon}
                    <h3>{infoItem.title}</h3>
                    <p>{infoItem.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default InfoSection
