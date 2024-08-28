import React from "react";
import Slider from "react-slick";
import FeaturedCarCard from "./FeaturedCarCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carApi } from "../../redux/features/Car/carApi";
import Loader from "../../shared/Loader/Loader";

const FeaturedCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: getCars, isFetching } = carApi.useGetAllCarsQuery({ price: 0 });
  const carData = getCars?.data;

  return (
    <div className="text-center py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Recommended <span className="text-red-500">Cars</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Experience the perfect blend of performance and comfort with our
        top-rated vehicles, featuring advanced technology, sleek design, and
        exceptional fuel efficiency.
      </p>

      {isFetching ? (
        <Loader />
      ) : (
        <Slider {...settings}>
          {carData?.map((car, index) => (
            <FeaturedCarCard car={car} key={index} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default FeaturedCart;
