import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiZap, FiDroplet, FiWifi, FiPackage } from "react-icons/fi";
const plans = [
  {
    id: 1,
    title: "Electricity Plan Comparisons",
    icon: <FiZap className="text-blue-600" />,
    content:
      "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.",
  },
  {
    id: 2,
    title: "Gas Plan Comparisons",
    icon: <FiDroplet className="text-blue-600" />,
    content:
      "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.",
  },
  {
    id: 3,
    title: "Internet Plan Comparisons",
    icon: <FiWifi className="text-blue-600" />,
    content:
      "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.",
  },
  {
    id: 4,
    title: "Bundle Packages",
    icon: <FiPackage className="text-blue-600" />,
    content:
      "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.",
  },
];

const UtilityComparisons = () => {
  const [openId, setOpenId] = useState(1);
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-12 max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-[#00171F] font-Helvetica">
          Comprehensive <br />
          Utility<span className="font-bold"> Comparisons</span>
        </h2>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border-gray-500 rounded-lg shadow-sm cursor-pointer bg-white transition"
            >
              <button
                className="flex justify-between items-center w-full px-4 py-4 text-left"
                onClick={() => toggle(plan.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-xl">{plan.icon}</div>
                  <span className="font-semibold text-xl text-[#00171F] cursor-pointer">
                    {plan.title}
                  </span>
                </div>
                <div className="text-[#00171F] cursor-pointer">
                  {openId === plan.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              {openId === plan.id && plan.content && (
                <div className="px-4 pb-4 text-lg cursor-pointer text-[#00171F]">
                  {plan.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className=" top-4 left-4 "></div>
        <img src="src/assets/images/utility.png" alt="Discussion" />
      </div>
    </div>
  );
};

export default UtilityComparisons;
