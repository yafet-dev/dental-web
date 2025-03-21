import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-25 mt-20">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-5xl font-bold font-Poppins">
          Get Ready For Your <br /> Best Ever Dental <br /> Experience!
        </h1>

        <p className="text-md text-gray-700 font-Poppins w-lg">
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </p>
        <div className="flex space-x-6">
          <button className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl hover:cursor-pointer">
            Book an Appointment
          </button>
          <div className="font-semibold flex space-x-2">
            <span>
              <img src="/callIcon.png"></img>
            </span>
            <span>
              Dental 24/7 Emergency:<br></br>{" "}
              <span className="font-light">0911099743</span>
            </span>
          </div>
        </div>
        <div className="flex space-x-10 mt-6 text-lg font-Poppins">
          <div className="flex flex-col justify-between">
            <span className="font-[500] text-2xl text-primary">15+</span>
            <span className="font-[300] text-sm">years experience</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-md text-2xl text-primary">24/7</span>
            <span className="font-light text-sm">Emergency service</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center relative">
        {/* Circular background image */}
        <img
          src="/HeroBG.png"
          alt="Background Circle"
          className="absolute w-3/4 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {/* Main image (Dr) */}
        <img
          src="/hero.png"
          alt="Dentist"
          className="relative z-10 w-1/2 h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
