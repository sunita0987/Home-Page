import React from "react";
import { useState } from "react";
import { faqs } from "../utils/faq";
import { Plus, Minus } from "lucide-react";
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#00171F]">
          Frequently Asked <span className="text-[#00171F] font-bold">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-md ">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
          consectetur mi. Vulputate sapien a a bibendum.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` rounded-lg shadow transition ${
              activeIndex === index ? "bg-[#003459] text-white" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium cursor-pointer"
            >
              <span>{faq.question }</span>
              {activeIndex === index ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5 text-gray-700" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-5 pb-5 text-sm text-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
