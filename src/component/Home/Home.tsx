import Banner from "../Banner/Banner";
import FeaturedCart from "../FeaturedCar/FeaturedCart";
import Testimonial from "../Testimonial/Testimonial";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <FeaturedCart></FeaturedCart>
        <WhyChoose></WhyChoose>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
