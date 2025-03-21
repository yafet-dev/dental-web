import { FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="bg-primary-bg p-12 rounded-lg  flex flex-col items-center justify-between mt-20 mx-40 mb-20">
      <div className="grid grid-cols-7 gap-6 w-full items-end">
        <div className="flex flex-col col-span-2">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-secondary text-sm stroke-current" />
            <span>Full Name</span>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-2 p-2 border rounded-md focus:outline-none w-full h-12"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-secondary text-sm stroke-current" />
            <span className="text-sm font-semibold">Phone Number</span>
          </div>
          <input
            type="tel"
            placeholder="Telephone"
            className="mt-2 p-2 border rounded-md focus:outline-none w-full h-12"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-secondary text-sm stroke-current" />
            <span className="text-sm font-semibold">Date</span>
          </div>
          <input
            type="date"
            className="mt-2 p-2 border rounded-md focus:outline-none w-full h-12 cursor-pointer"
            onFocus={(e) => e.target.showPicker && e.target.showPicker()}
          />
        </div>
        <div className="flex items-end col-span-1 h-full">
          <button className="bg-secondary text-white px-4 py-3 rounded-md flex items-center justify-center hover:bg-primary cursor-pointer w-full h-12 space-x-2">
            <span>Book Now</span>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
