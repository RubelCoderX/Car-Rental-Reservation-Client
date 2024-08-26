const testimonials = [
  {
    name: "Kevin Martin",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
    rating: 3,
  },
  {
    name: "Devid Cullen",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
    rating: 5,
  },
  {
    name: "Pitar Has",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#F7F7F7] py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Satisfied
          <span className="text-red-600"> Customer Feedback</span>{" "}
        </h2>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="md:p-6 p-6 bg-white rounded-md shadow-lg flex flex-col items-start text-left relative"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="md:w-24 md:h-24 h-20 w-20  rounded-full mb-4 absolute -left-2   transform -translate-x-1/2"
              />
              <div className="mt-2 ml-8 w-full">
                <h3 className="text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 mb-3">{testimonial.role}</p>
                <div className="flex mb-2">
                  {Array(testimonial.rating)
                    .fill(2)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-orange-500"
                      >
                        <path d="M12 17.27l5.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                      </svg>
                    ))}
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-justify mb-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
