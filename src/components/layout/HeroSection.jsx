import React from "react";
import Header from "../header/Header";
import Hero from "../sections/Hero";
import Rectangle from "../general/Rectangle";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[100vh] md:h-[100vh] lg:h-[120vh]">
      <video
        autoPlay
        loop
        // muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://s3-figma-videos-production-sig.figma.com/video/1169272246591235850/TEAM/83ab/d46c/-b82e-47cb-a495-1d65d61de2fa?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtLroxXdAtEMImfXuKDtZmYfNhvASzxWtwiCqSIE3GBeHsEXXfPS-hgFiuxhyFgg4CZd4mJ5lPB6purnqMGAEU~hFuNc3lw4C3UEGGlrWmgQ6Ow-z2Pm0DI0IE3V4db4LdTVIXmEtuPu7rDIXI6XE8t-dDgcoTYS3LmZk9mjYSYIIgbRMzCAql9TBL314pj~BJsRuVv5KfdS3KCc7KxyT9FfCU6-~lJD9~5hFjANwdc5oyicPDXTVs1u9yF0PORItXLprox4qzPZ2JWow05C9x5fedpdkzZIKroqTC6bziUH5AaAg6Id2bdms6XTkQVfV-uAWJxdYI-8BUXltd7GAw__"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent z-10" />

      <div className="relative z-20 flex flex-col justify-center items-center text-white h-full">
        <Header />
        <Hero />
        <Rectangle />
      </div>
    </div>
  );
};

export default HeroSection;
