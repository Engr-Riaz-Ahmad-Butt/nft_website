import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto text-white flex flex-col items-start justify-center flex-1 px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 max-w-7xl">
      {/* Main Heading */}
      <h1 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-left mb-4 md:mb-6">
        Generate with AI, <br /> Scan, Mint, <br /> Sell & Trade
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-left text-gray-200 mb-6 md:mb-8 max-w-3xl">
        Explore 3dotlink, where Web3 meets cultural legacy, and <br className="hidden md:block" /> AI
        breathes life into NFTs
      </p>

      {/* Buy Button */}
      <button className="bg-gradient-to-r from-[#ED213A] to-[#FD1640] hover:from-[#FD1640] hover:to-[#ED213A] text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-tight rounded-lg px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 active:scale-95">
        Buy NFT’s
      </button>
    </div>
  );
};

export default Hero;
