import Greatest from "../assets/Greatest.svg";
import Best from "../assets/Best.svg";
import Every from "../assets/Every.svg";

const BestProducts = () => {
  return (
    <div className="h-[663px]">
      <h1 className="font-normal text-[42px] text-center mb-3">
        See the best around here
      </h1>
      <p className="font-normal text-sm text-center mb-10">
        Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
      </p>
      <div className="h-[453px] grid grid-cols-3 ml-21">
        <div className="w-[413px] flex flex-col pt-9">
          <p className="font-normal text-sm text-center">
            Smart light bulb pack
          </p>
          <h2 className="font-normal text-[28px] text-center mb-7">
            Latest and gratest
          </h2>
          <button className="border border-black rounded-full w-[190px] h-[50px] ml-27">
            Explore
          </button>
          <img
            className="ml-20 mt-3"
            width={259}
            height={250}
            src={Greatest}
            alt="Greatest"
          />
        </div>
        <div className="w-[413px] flex flex-col pt-9">
          <p className="font-normal text-sm text-center">
            Smart light bulb pack
          </p>
          <h2 className="font-normal text-[28px] text-center mb-7">
            Best selling
          </h2>
          <button className="border border-black rounded-full w-[190px] h-[50px] ml-27">
            Explore
          </button>
          <img
            className="ml-20 mt-12"
            width={259}
            height={250}
            src={Best}
            alt="Best"
          />
        </div>
        <div className="w-[413px] flex flex-col pt-9">
          <p className="font-normal text-sm text-center">
            Smart light bulb pack
          </p>
          <h2 className="font-normal text-[28px] text-center mb-7">
            Every product
          </h2>
          <button className="border border-black rounded-full w-[190px] h-[50px] ml-27">
            Explore
          </button>
          <img
            className="ml-20 mt-5"
            width={355}
            height={250}
            src={Every}
            alt="Every"
          />
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
