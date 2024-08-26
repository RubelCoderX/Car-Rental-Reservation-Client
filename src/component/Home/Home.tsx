import Banner from "../Banner/Banner";
import CarPromoVideo from "../CarPromoVideo/CarPromoVideo";
import FeaturedCart from "../FeaturedCar/FeaturedCart";
import Testimonial from "../Testimonial/Testimonial";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="container mx-auto">
          <FeaturedCart></FeaturedCart>
          <WhyChoose></WhyChoose>
        </div>
        <CarPromoVideo></CarPromoVideo>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
