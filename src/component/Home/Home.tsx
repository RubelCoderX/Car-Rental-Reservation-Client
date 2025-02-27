import Banner from "../Banner/Banner";
import CarPromoVideo from "../../pages/CarPromoVideo/CarPromoVideo";
import FeaturedCart from "../../pages/FeaturedCar/FeaturedCart";
import Testimonial from "../../pages/Testimonial/Testimonial";
import WhyChoose from "../../pages/WhyChoose/WhyChoose";
import ExtraService from "../ExtraService/ExtraService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="container mx-auto">
          <ExtraService />
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
