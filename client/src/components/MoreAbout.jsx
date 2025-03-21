import { FaCheckCircle } from "react-icons/fa";

const MoreAbout = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-15 py-16">
      {/* Left Side - Doctor Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src="/more.png"
          alt="Doctor"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <button className="px-4 py-2 text-sm font-semibold text-primary rounded-lg border-2 border-gray-300/60 border-opacity-50">
          More About Us
        </button>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
          The Best Dental Clinic <br /> That You Can Trust
        </h2>
        <p className="text-gray-500 mt-4">
          With over 15 years of experience, our dental clinic in Ethiopia has
          been providing top-quality dental care to thousands of satisfied
          patients. Our highly skilled team of professionals is committed to
          offering personalized treatments using the latest technology and best
          practices in modern dentistry.
        </p>
        <p className="text-gray-500 mt-2">
          Whether you need a routine checkup, cosmetic dentistry, or advanced
          procedures, we ensure a comfortable and stress-free experience. Your
          oral health is our top priority, and we strive to deliver exceptional
          care in a welcoming and friendly environment.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-primary" />
            <span className="text-gray-700 font-semibold">
              Modern Equipment
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-primary" />
            <span className="text-gray-700 font-semibold">
              Easy Online Appointment
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-primary" />
            <span className="text-gray-700 font-semibold">
              Comfortable Clinic
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-primary" />
            <span className="text-gray-700 font-semibold">
              Always Monitored
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary-hover hover:cursor-pointer">
            Learn More
          </button>
          <button className="px-6 py-3 bg-gray-200 text-primary font-bold rounded-md shadow-md hover:bg-gray-300 hover:cursor-pointer">
            Make an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
