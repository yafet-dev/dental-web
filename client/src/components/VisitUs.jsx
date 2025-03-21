import { FiClock, FiMapPin } from "react-icons/fi";

const VisitUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900">Visit us</h2>
          <p className="text-gray-500 mt-4 ">
            We're conveniently located in the Denver Tech Center area. Find us
            on the 4th floor of the Triad Office Park building. Plenty of free
            parking available.
          </p>
        </div>

        {/* Content Grid (2/3 Map - 1/3 Details) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Google Map (2/3 width) */}
          <div className="md:col-span-2">
            <div className="bg-gray-100/50 p-6">
              {/* Location Header */}
              <div className="flex items-center mb-2">
                <FiMapPin className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600">
                136 Torrens St, Canley Heights NSW 2166, Australia
              </p>
              <a
                href="https://www.google.com/maps?q=136+Torrens+St,+Canley+Heights+NSW+2166"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold inline-block mt-2 hover:underline"
              >
                Get Directions →
              </a>
            </div>
            {/* Full-Width Map */}
            <div className="w-full h-[300px] rounded-b-2xl overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.0833824406475!2d38.76116482099478!3d9.033308324155632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858a6eee6e4b%3A0x8cf43f3c6f571968!2s2QM6%2B9G8%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1742579642110!5m2!1sen!2set"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Opening Hours (1/3 width) */}
          {/* Opening Hours (1/3 width) */}
          <div className="bg-gray-100/50 rounded-lg p-6 shadow-l-black shadow-sm">
            <div className="flex items-center mb-4">
              <FiClock className="text-primary w-6 h-6" />
              <h3 className="text-lg font-semibold ml-2">Opening Hours</h3>
            </div>
            <ul className="text-gray-700">
              {[
                { day: "Sunday", hours: "8:30am - 6:00pm" },
                { day: "Monday", hours: "8:30am - 6:00pm" },
                { day: "Tuesday", hours: "8:30am - 6:00pm" },
                { day: "Wednesday", hours: "8:30am - 6:00pm" },
                { day: "Thursday", hours: "8:30am - 6:00pm" },
                { day: "Friday", hours: "8:30am - 6:00pm" },
                { day: "Saturday", hours: "8:30am - 6:00pm" },
                { day: "Sunday", hours: "8:00am - 1:30pm" },
              ].map((item, index) => {
                // Get current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
                const today = new Date().getDay();
                const isToday = today === index; // Check if this item is today

                return (
                  <li
                    key={index}
                    className={`flex justify-between py-2 px-3 rounded-md items-center ${
                      item.closed ? "text-red-700 font-semibold" : ""
                    } ${
                      isToday
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-gray-300/40"
                    }`}
                  >
                    <span>{item.day}</span>
                    <span>
                      {item.hours} {isToday && <span className="ml-2">→</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
