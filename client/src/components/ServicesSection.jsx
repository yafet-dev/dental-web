const services = [
  {
    img: "fillings.svg",
    title: "Filling (የጥርስ ሙሌት)",
    description:
      "Expert dental filling services to restore your teeth and prevent decay.",
  },
  {
    img: "/implant.svg",
    title: "Scaling & Root Planning (የጥርስ እጥበት)",
    description:
      "Deep cleaning treatments to remove plaque, tartar, and maintain gum health.",
  },
  {
    img: "/whitening.svg",
    title: "Tooth Whitening (የጥርስ ማንጣት)",
    description:
      "Professional teeth whitening for a brighter, more confident smile.",
  },
  {
    img: "/tooth-insurance.svg",
    title: "Prosthesis (ሰው ሰራሽ ጥርስ)",
    description:
      "Custom dental prosthetics available in Ceramic, Zirconia, Chrome, Gold, and Acrylic.",
  },
  {
    img: "braces.svg",
    title: "Orthodontic (ብሬስ)",
    description:
      "Braces and aligners to straighten your teeth and improve your bite.",
  },
  {
    img: "/extraction1.png",
    title: "Tooth Extraction (ጥርስ መንቀል)",
    description:
      "Safe and painless tooth extractions when necessary for dental health.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <button className="px-4 py-2 text-sm font-semibold text-primary rounded-lg border-2 border-gray-200/60">
          OUR SERVICES
        </button>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">Services</h2>
        <p className="text-gray-500 mt-3">
          We offer a wide range of dental services to help you achieve a healthy
          and beautiful smile.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 px-10 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col">
            {/* Image & Title Row */}
            <div className="flex items-center space-x-4">
              <img
                src={service.img}
                alt={service.title}
                className={`object-contain ${
                  service.title === "Tooth Extraction"
                    ? "w-14 h-20"
                    : "w-10 h-16"
                }`}
              />

              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>

            {/* Description & Learn More */}
            <div className="-mt-2">
              <p className="text-gray-500 text-left">{service.description}</p>
              <a
                href="#"
                className="text-primary font-semibold flex items-center space-x-1 hover:underline text-left"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
