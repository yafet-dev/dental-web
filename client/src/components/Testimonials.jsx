import { useState, useEffect, useRef } from "react";
import { FiMessageSquare } from "react-icons/fi";

const testimonials = [
  {
    name: "José Correia",
    role: "Patient",
    text: "I had an amazing experience at this clinic. The staff was very friendly, and the dentist explained everything clearly. My teeth have never felt better!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Agathe Dufour",
    role: "Patient",
    text: "The best dental care I've ever received. The clinic is clean, modern, and the team is very professional. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Smith",
    role: "Patient",
    text: "I was nervous about my dental visit, but the dentist made me feel at ease. The treatment was painless, and the results are fantastic.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Patient",
    text: "Great service! The team is very caring and attentive. I’m so happy with my smile after the treatment. Thank you!",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0); // State to store dynamic height
  const testimonialRefs = useRef([]); // Ref to track all testimonial heights

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide every 4s

    return () => clearInterval(interval);
  }, []);

  // Update height whenever the index changes
  useEffect(() => {
    if (testimonialRefs.current[index]) {
      // Calculate the height of the active testimonial
      const testimonialHeight = testimonialRefs.current[index].clientHeight;
      setHeight(testimonialHeight);
    }
  }, [index]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Title & Description */}
        <div>
          <button className="px-4 py-2 text-sm font-semibold text-primary rounded-lg border-2 border-gray-200/60">
            TESTIMONIAL
          </button>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 mt-4">
            We take pride in providing exceptional dental care. Hear from our
            patients about their experiences and how we’ve helped them achieve
            healthier, brighter smiles.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark">
            See All Reviews
          </button>
        </div>

        {/* Right Section: Testimonials */}
        <div
          className="relative overflow-hidden"
          style={{ height: `${height}px` }} // Set dynamic height
        >
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateY(-${index * height}px)` }} // Use dynamic height for transform
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                ref={(el) => (testimonialRefs.current[i] = el)} // Track height of each testimonial
                className={`p-6 rounded-xl shadow-lg flex flex-col bg-white w-full transition-opacity ${
                  i === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <FiMessageSquare className="text-primary text-3xl mb-4" />
                <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full shadow-md"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
