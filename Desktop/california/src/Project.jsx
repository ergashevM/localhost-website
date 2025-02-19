import Navigation from "./components/ANavigation";
import Carousel from "./components/BCarousel";
import Type from "./components/CType";
import MostSelled from "./components/DMostSelled";
import BestProducts from "./components/EBestProducts";
import Ideas from "./components/FIdeas";
import Search from "./components/GSearch";
import Footer from "./components/HFooter";


const Project = () => {
  return (
    <div className="w-[1440px]">
      <Navigation />
      <Carousel />
      <Type />
      <MostSelled />
      <BestProducts />
      <Ideas />
      <Search />
      <Footer />
    </div>
  );
};

export default Project;
