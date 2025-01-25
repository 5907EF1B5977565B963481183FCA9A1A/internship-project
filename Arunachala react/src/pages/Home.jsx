import Accesories from "../components/Accesories";
import Airpods from "../components/Airpods";
import  Carousel  from "../components/Carousel";
import Categories from "../components/Categories";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMobiles from "../components/LatestMobiles";

import Voucher from "../components/Voucher";

const Home = () => {
  return (
    <div>
      <Header />
     
      <Carousel />
      <LatestMobiles />
      <Airpods />
      <FeatureSection />
      <Categories />
      <Accesories />
      <Voucher />
      <Footer />
    </div>
  );
};

export default Home;
