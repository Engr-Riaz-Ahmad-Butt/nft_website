import React, { useState } from "react";
import FAQsImg from "../../assets/images/spider.png"; // Adjust the path as per your project structure
import FAQsBgImg from "../../assets/images/faqBg.png";
import { faqItems } from "../data-display/data";

const categories = ["General", "Pre-ICO", "Token", "Client", "Legal"];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={FAQsBgImg}
          alt="Smoke effect"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 w-full mb-8 lg:mb-0">
            <h1 className="text-lg xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-['Zen_Dots']">
              Have any questions?
            </h1>
            <p className="text-gray-400 mb-6 sm:mb-8 text-xs xs:text-sm md:text-base leading-5 sm:leading-6">
              Curious about 3dotlink? Explore our frequently asked questions to
              find answers.
            </p>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm font-['Zen_Dots'] text-white font-normal leading-[24px] hover:text-red-600 transition-colors"
                >
                  {category}
                </button>
              ))}
              <div className="relative mt-2 w-[150px] md:w-[610px] border border-gray-500 hidden md:block mx-auto">
                <div className="absolute mt-[-3px] left-0 w-[97px] h-[6px] bg-red-600 opacity-100 hidden md:block" />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-red-600 bg-opacity-20 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  {/* Question */}
                  <div className="p-4 hover:bg-opacity-30 transition-colors">
                    <h3 className="font-zen-dots text-sm md:text-base">
                      {item.question}
                    </h3>
                  </div>
                  {/* Answer */}
                  {activeIndex === index && (
                    <div className="p-4 font-sans bg-red-600 bg-opacity-10">
                      <p className="text-sm text-gray-300">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 w-full">
            <img
              src={FAQsImg}
              alt="Character illustration"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
