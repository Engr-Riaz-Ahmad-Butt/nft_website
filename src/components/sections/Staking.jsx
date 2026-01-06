import React from "react";

import NFTDescription from "../general/NFTDescription";
import NftImageCard from "../general/NftImageCard";
import { NFTImages } from "../data-display/data";

const Staking = () => {
  return (
    <>
      <div className="bg-black py-12 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black text-white">
            <NFTDescription />
            <div className="grid grid-cols-12 gap-6">
            {NFTImages.map((image, index) => (
              <NftImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                colSpan={image.colSpan}
                rowSpan={image.rowSpan}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
