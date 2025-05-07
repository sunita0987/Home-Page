import React from "react";
import { FaStar, FaThumbsUp, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { FiRefreshCcw, FiHelpCircle } from "react-icons/fi";

const features = [
  {
    icon: <FaTools className="text-2xl text-blue-700" />,
    title: "Simplified Comparison Process",
    desc: "Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl text-blue-700" />,
    title: "Save Time and Money",
    desc: "With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.",
  },
  {
    icon: <FiRefreshCcw className="text-2xl text-blue-700" />,
    title: "No Service Interruptions",
    desc: "We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.",
  },
  {
    icon: <FiHelpCircle className="text-2xl text-blue-700" />,
    title: "Comprehensive Support",
    desc: "Whether you need assistance selecting a plan or during the switch, our support team is here to help every step of the way.",
  },
];

const Choose = () => {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-normal text-[#00171F]">
          Why Choose Us For{" "}
          <span className="text-[#00171F] font-bold">Utilities</span>
        </h2>
        <p className="mt-2 text-[#00171F] max-w-xl max-auto text-sm flex items-center justify-center">
          This emphasizes both the action and the benefits, drawing in potential
          customers with a clear value proposition. Let me know if you'd like
          any adjustments!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-[#003459] text-white p-5 rounded-xl flex flex-col justify-between md:col-span-2">
          <div className="text-7xl mb-4">
            <FaThumbsUp />
            <FaStar className="-ml-4 inline" />
            <FaStar className="-ml-4 inline" />
            <FaStar className="-ml-4 inline" />
          </div>
          <h3 className="text-xl font-regular">Tailored Recommendations</h3>
          <p className="text-sm mt-1 max-w-xl">
            Our platform analyzes your unique energy needs and preferences to
            suggest the best utility providers, ensuring you get the most
            personalized options available.
          </p>
          <div className="mt-6">
            <button className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">
              →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white shadow-2xl rounded-2xl p-6">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-md font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
