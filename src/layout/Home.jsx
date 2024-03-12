import Banner from "../components/Home/Banner/Index";
import Discover from "../components/Home/Discover/Index";
import Header from "../components/Home/Header/Index";
import StatsBanner from "../components/Home/StatsBanner/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Discover />
      <StatsBanner />
    </div>
  );
};

export default Home;
