import Slider from "react-slick";
import FeaturedCarCard from "./FeaturedCarCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          afterChange: () => console.log("Breakpoint 1440 triggered"),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          afterChange: () => console.log("Breakpoint 1024 triggered"),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          afterChange: () => console.log("Breakpoint 768 triggered"),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          afterChange: () => console.log("Breakpoint 600 triggered"),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          afterChange: () => console.log("Breakpoint 480 triggered"),
        },
      },
    ],
  };

  const cars = [
    {
      image: "car1.jpg",
      title: "Delux",
      price: "$68",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car2.jpg", // Replace with actual image path
      title: "Economy",
      price: "$58",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
  ];

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
      <Slider {...settings}>
        {cars.map((car, index) => (
          <FeaturedCarCard car={car} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedCart;
