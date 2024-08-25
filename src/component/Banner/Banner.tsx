import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import car1 from "../../assets/car-1.avif";
import car2 from "../../assets/car-2.avif";
import car3 from "../../assets/car-6.avif";
import car4 from "../../assets/car-4.avif";
import "./Banner.css";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm/BookingFrom";

const Banner = () => {
  const slides = [
    {
      image: car1,
      title: "Upto 25% off on first booking Car through your app!",

      buttonText: "Book Now",
      buttonLink: "/find-out-more",
    },
    {
      image: car2,
      title: "Exclusive Discounts for Premium Members",
      buttonText: "Book Now",
      buttonLink: "/join-now",
    },
    {
      image: car3,
      title: "Weekend Specials: Save More on Rentals!",
      buttonText: "Book Now",
      buttonLink: "/weekend-specials",
    },
    {
      image: car4,
      title: "Travel with Ease: Hassle-Free Rentals",
      buttonText: "Book Now",
      buttonLink: "/learn-more",
    },
  ];

  return (
    <div className="hero-section  relative">
      <Carousel
        className="main-slide"
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] md:h-[600px] lg:h-[900px] object-cover"
            />
            <div className="slide-content absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 md:p-8 lg:p-16">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4">
                {slide.title}
              </h1>
              <Link to={slide.buttonLink} className="mt-4">
                <button className="border border-white bg-black text-[white] hover:text-black py-2 px-4 md:px-6 rounded-md hover:bg-white hover:text-primary transition duration-300">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <div className="absolute  z-10 w-full">
        <BookingForm />
      </div> */}
    </div>
  );
};

export default Banner;

{
  /* <div className="absolute -bottom-40 w-full flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg w-full ">
          <BookingForm />
        </div>
      </div> */
}
