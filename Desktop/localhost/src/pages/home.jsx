import Footer from "../components/footer";
import Hosts from "../components/hosts";
import Houses from "../components/houses";
import Navigation from "../components/navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hosts/>
      <Houses/>
      <Footer/>
    </div>
  );
};

export default Home;
