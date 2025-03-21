import React from "react";
import { FiPhone, FiMail, FiClock } from "react-icons/fi"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Phone Section */}
        <div className="flex items-center space-x-3">
          <FiPhone className="text-lg" />
          <div>
            <p className="font-semibold">+91-022-67570111</p>
            <p className="text-sm text-gray-300">call us now</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <FiMail className="text-lg" />
          <div>
            <p className="font-semibold">write@saifeehospital.com</p>
            <p className="text-sm text-gray-300">drop us an email</p>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <FiClock className="text-lg" />
          <div>
            <p className="font-semibold">24 x 7 support</p>
            <p className="text-sm text-gray-300">we are open</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
