import React from 'react'

const NFTText = () => {
  return (
    <>
    <div className="absolute w-[645px] h-[195px] left-[-71px] mt-6 font-zen-dots ">
      <h1 className="text-8xl font-bold relative text-transparent">
        {/* Glow Effect */}
        <span className="absolute inset-0 blur-md text-red-600">NFT'S</span>
        <span className="absolute inset-0 blur-lg text-red-500/50">NFT'S</span>
        <span
          className="relative"
          style={{
            WebkitTextStroke: '1px rgb(220, 38, 38)',
          }}
        >
          NFT'S
        </span>
      </h1>
    </div>
    </>
  )
}

export default NFTText
