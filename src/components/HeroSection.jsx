import React from "react";
import hero from "../components/image/hero.png";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className=" m-14 text-center">
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
      <button
        className="bg-black m-6 p-6 hover:bg-gray-500 text-white font-semibold hover:text-black py-2 px-4 border border-gray-600 hover:border-transparent rounded"
        onClick={() => {
          navigate("/createblogpost");
        }}
      >
        Create Your Blog
      </button>
      <div>
      <BlogList/>
    </div>
    </div>
   
  );
};

export default HeroSection;
