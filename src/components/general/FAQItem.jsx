import React from "react";

const FAQItem = ({ question, answer }) => {
  return (
    <div className="bg-red-600 bg-opacity-20 rounded-lg overflow-hidden hover:bg-opacity-30 transition-colors">
      <div className="p-3 sm:p-4 md:p-5 cursor-pointer">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{question}</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
