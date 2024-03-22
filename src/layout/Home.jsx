import Banner from "../components/Home/Banner/Index";
import CTA from "../components/Home/CTA";
import Discover from "../components/Home/Discover/Index";
import Gallery from "../components/Home/Gallery/Index";
import Header from "../components/Home/Header/Index";
import Stats from "../components/Home/Stats";
import VideoBanner from "../components/Home/VideoBanner/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Discover />
      <VideoBanner />

      <Gallery />

      <CTA />
      <Stats />
    </div>
  );
};

export default Home;
