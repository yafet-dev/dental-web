import React from "react";

const HealthcareCTA = () => {
  return (
    <section className="relative bg-white px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Looking for professional & trusted <br /> medical healthcare?
          </h2>
          <p className="text-gray-500 mt-2">Don’t hesitate to contact us.</p>
          <button className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-2xl shadow-md hover:bg-primary-hover transition duration-300 hover:cursor-pointer">
            MAKE APPOINTMENT
          </button>
        </div>

        {/* Image */}
        <div className="relative md:w-1/2 flex justify-center image-container">
          <img
            src="/Drs.png"
            alt="Doctors"
            className="max-w-xs md:max-w-sm lg:max-w-md relative top-6"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthcareCTA;
