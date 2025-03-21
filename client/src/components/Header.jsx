import React from "react";

const Header = () => {
  return (
    <header className="bg-primary shadow-md px-36 text-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-md text-white font-medium">
          <div className="-mb-1">GOLDEN SPECIALTY</div> {/* Reduced gap */}
          <div>DENTAL CLINIC</div>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8 font-xs ">
          <a href="#about" className="text-white hover:text-gray-300">
            ABOUT
          </a>
          <a href="#services" className="text-white hover:text-gray-300">
            SERVICES
          </a>
          <a href="#new-patient" className="text-white hover:text-gray-300">
            BLOGS
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            CONTACT
          </a>
          <a
            href="#book-online"
            className="bg-red-800 text-white px-4 py-2 border-red-800 rounded-2xl hover:bg-red-900"
          >
            SIGN IN
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
