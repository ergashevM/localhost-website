import ImageOne from "../assets/ImageOne.svg";
import ImageTwo from "../assets/ImageTwo.svg";
import ImageThree from "../assets/ImageThree.svg";
import Star from "../assets/star.svg";
import Guest from "../assets/guest.svg";

const SimilarStays = () => {
  return (
    <div className="w-[1340px] pt-5 ml-15 mb-10">
      <div className="flex items-center justify-between mt-5">
        <h1 className="ml-[18.5px] text-[24px] font-semibold">Similar stays</h1>
        <span className="font-semibold text-md text-teal-500">View all</span>
      </div>
      <div className="grid grid-cols-3 ml-[20px] -mx-[10px] mt-5">
        <div className="flex items-center justify-between w-[433px] h-[144px] rounded-md">
          <div>
            <img className="rounded-l-md" src={ImageOne} alt="house" />
          </div>
          <div className="pr-10">
            <h4 className="font-semibold text-md">Missisuaga Aistream</h4>
            <p className="font-normal text-sm text-gray-500 mb-3">
              Bridlepath, Ontario Canada
            </p>
            <div className="flex items-center mb-3">
              <span className="font-semibold text-sm mr-2">4.8</span>
              <img src={Star} alt="Star" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-md text-teal-500">$502</p>
              <span className="text-gray-500 font-normal text-sm -ml-[3px]">
                /night
              </span>
              <span className="text-gray-500 mx-1">|</span>
              <img className="w-[14px] h-[14px]" src={Guest} alt="user" />
              <span className="text-gray-500 ffont-normal text-sm mr-2">
                2 guests
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-[433px] h-[144px] rounded-md">
          <div>
            <img className="rounded-l-md" src={ImageTwo} alt="house" />
          </div>
          <div className="pr-10">
            <h4 className="font-semibold text-md">Urban Loft</h4>
            <p className="font-normal text-sm text-gray-500 mb-3">
              Georgina Bay, Ontario, Canada
            </p>
            <div className="flex items-center mb-3">
              <span className="font-semibold text-sm mr-2">4.8</span>
              <img src={Star} alt="Star" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-md text-teal-500">$502</p>
              <span className="text-gray-500 font-normal text-sm -ml-[2px]">
                /night
              </span>
              <span className="text-gray-500 mx-1">|</span>
              <img className="w-[14px] h-[14px]" src={Guest} alt="user" />
              <span className="text-gray-500 ffont-normal text-sm mr-8">
                2 guests
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-[433px] h-[144px] rounded-md">
          <div>
            <img className="rounded-l-md" src={ImageThree} alt="house" />
          </div>
          <div className="pr-10">
            <h4 className="font-semibold text-md">Forestville Cottages</h4>
            <p className="font-normal text-sm text-gray-500 mb-3">
              Simcoe, Ontario Canada
            </p>
            <div className="flex items-center mb-3">
              <span className="font-semibold text-sm mr-2">4.8</span>
              <img src={Star} alt="Star" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-md text-teal-500">$502</p>
              <span className="text-gray-500 font-normal text-sm -ml-[2px]">
                /night
              </span>
              <span className="text-gray-500 mx-1">|</span>
              <img className="w-[14px] h-[14px]" src={Guest} alt="user" />
              <span className="text-gray-500 font-normal text-sm -mr-1">
                2 guests
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarStays;
