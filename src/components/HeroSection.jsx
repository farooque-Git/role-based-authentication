import React from "react";
import hero from "../components/image/hero.png";

const HeroSection = () => {
  return (
    <div className=" m-4 text-center">
      <div className="mb-2">
        {/* Image  */}
        <div className="flex justify-center">
          <img src={hero} className="flex justify-center h-64" />
        </div>
        {/* Text  */}
        <h1 className=" text-3xl text-black font-bold m-6">Developer Kit</h1>
      </div>
      {/* Paragraph  */}
      <p className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
        Here is some blog for Web Developer by Farooque Ali
      </p>
    </div>
  );
};

export default HeroSection;
