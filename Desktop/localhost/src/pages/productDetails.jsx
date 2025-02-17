import AboutHome from "../components/AboutHome";
import Amenties from "../components/Amenties";
import Features from "../components/Features";
import InfoHouse from "../components/InfoHouse";
import Map from "../components/Map";
import Reviews from "../components/reviews";
import Navigation from "../components/navigation";
import ThumbnailImages from "../components/thumbnailImages";
import SimilarStays from "../components/SimilarStays";
import Footer from "../components/footer";

const ProductDetails = () => {
  return (
    <div>
      <Navigation />
      <div className="w-[1500px] flex items-center justify-between ml-10">
        <ThumbnailImages />
        <InfoHouse />
      </div>
      <div className="w-[1500px]  my-10 px-20">
        <h1 className="font-semibold text-[24px] leading-5 tracking-wide pb-6">
          About this home
        </h1>
        <div className="flex items-center justify-start">
          <AboutHome />
          <Features />
        </div>
      </div>
      <div className="w-[1350px] flex items-start justify-between my-5 mx-20">
        <Amenties />
        <Map />
      </div>
      <Reviews/>
      <SimilarStays/>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
