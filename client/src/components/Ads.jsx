import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"; // Import icons from react-icons

const Ads = () => {
  return (
    <div className="bg-white py-4 px-24 border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        {/* Left Side: Phone Number */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-primary h-3 w-3" />
          <span className="text-gray-700 font-medium">+251911099743</span>
          <span>|</span>
          <FaMapMarkerAlt className="text-primary h-3 w-3" />
          <span className="text-gray-700 font-medium">
            Addis Ababa, Ethiopia
          </span>
        </div>

        {/* Right Side: Working Hours */}
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-primary h-3 w-3" />
          <span className="text-gray-700 font-medium">
            Monday - Saturday: 9 am - 11.30 pm
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ads;
