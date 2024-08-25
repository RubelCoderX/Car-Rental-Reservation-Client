import service from "../../assets/services.png";
import support from "../../assets/support.png";
import company from "../../assets/company.png";
import bestPrice from "../../assets/best-price.jpg";

const WhyChoose = () => {
  const services = [
    {
      title: "Personalized Service",
      image: service,
    },
    {
      title: "24/7 Support",
      image: support,
    },
    {
      title: "Best Price",
      image: bestPrice,
    },
    {
      title: "Trusted Service",
      image: company,
    },
  ];

  return (
    <div className="relative text-center py-12">
      <h2 className="text-3xl font-bold mb-4">
        Why <span className="text-red-600">Choose Us</span>
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        We believe in delivering excellence through personalized services,
        available support, and a dedicated team. Our commitment to quality
        ensures that you receive the best possible experience every time.
      </p>
      <div className="relative cursor-pointer px-4 grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-[1200px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white text-lg font-bold shadow-lg">
              {service.title}
            </div>
          </div>
        ))}
        {/* Central Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
