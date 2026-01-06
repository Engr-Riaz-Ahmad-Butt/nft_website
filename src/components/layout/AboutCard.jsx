import React from "react";
import BorderImg from "../../assets/images/border.png";
import VerticalLineLeft from "../../assets/images/verticalLine.png";
import VerticalLineRight from "../../assets/images/verticalLineRight.png";

const AboutCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center space-y-2 w-full xs:w-auto">
      <div className="flex flex-col xs:flex-row items-center justify-center">
        <div
          className="hidden xs:block h-40 sm:h-52 w-1"
          style={{
            backgroundImage: `url(${VerticalLineLeft})`,
          }}
        />

        {/* Card with Border Image */}
        <div
          className="relative flex flex-col items-center justify-center p-4 sm:p-6 space-y-4 bg-center bg-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
          style={{
            backgroundImage: `url(${BorderImg})`,
          }}
        >
          <img src={image} alt={title} className="relative z-10 w-16 sm:w-20 h-16 sm:h-20" />
          <h3 className="relative z-10 text-white text-center text-sm sm:text-base md:text-lg font-normal leading-5 sm:leading-6 w-48 sm:w-56 font-inter px-2">
            {title}
          </h3>
        </div>

        {/* Right Gradient Bar */}
        <div
          className="hidden xs:block h-40 sm:h-52 w-1"
          style={{
            marginRight: "-2px",
            backgroundImage: `url(${VerticalLineRight})`,
          }}
        />
      </div>
    </div>
  );
};

export default AboutCard;
