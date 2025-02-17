import Star from "../assets/star.svg";
import Like from "../assets/like.svg";
import Trend from "../assets/trend.svg";
import MichealleWard from "../assets/michelleWard.svg";
import Superhost from "../assets/superhost.svg";

const InfoHouse = () => {
  return (
    <div className="relative w-[540px] h-[540px] mt-5 mr-25 px-5 py-10 rounded-md border border-gray-200">
      <h1 className="text-[30px] font-semibold leading-[31px]">
        Brightwoods Cabin
      </h1>
      <p className="font-normal text-md">Bridlepath, Ontario, Canada</p>
      <div className="w-40 flex items-center justify-between mt-3">
        <span className="font-semibold text-md">5.0</span>
        <img className="-ml-6" src={Star} alt="Star" />
        <span className="text-md text-teal-500">200 Reviews</span>
      </div>
      <img className="absolute top-8 right-4" src={Like} alt="like" />
      <p className="font-normal text-md mt-3 tracking-wide leading-6">
        Welcome to our cozy cabin retreat nestled in the heart of <br />
        Bridlepath, Ontario! Surrounded by lush landscapes and tranquil <br />
        trails, this charming getaway offers the perfect blend of rustic <br />
        elegance and modern comfort.
      </p>
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-[36px] font-bold">
            $658
            <span className="font-normal text-sm mr-10">/night</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <img src={Trend} alt="trend" />
          <p className="font-normal text-md ml-2 mr-5 text-teal-500">
            Best time to book
          </p>
        </div>
      </div>
      <button className="w-[478px] h-[58px] rounded-md text-white bg-teal-500 mt-5 hover:bg-white hover:text-teal-500 hover:border hover:border-teal-500">
        Book this home
      </button>
      <p className="text-gray-500 mt-8 border-b border-gray-200 pb-1">
        Hosted by:
      </p>
      <div className="w-[480px] h-[60px] flex items-center justify-between mt-5">
        <img src={MichealleWard} alt="Michealle Ward profile" />
        <div className="flex flex-col -ml-35">
          <h5 className="font-semibold text-md">Michelle Ward</h5>
          <p className="font-normal text-sm text-gray-500">
            Joined in May 2021
          </p>
        </div>
        <img src={Superhost} alt="logo" />
      </div>
    </div>
  );
};

export default InfoHouse;
