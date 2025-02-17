import Location from "../assets/location.svg";
import SunCloud from "../assets/Cloud.svg";
import Iframe from "../assets/iframe.svg";
import PlusMinus from "../assets/PlusMinus.svg";

const Map = () => {
  return (
    <div className="w-[480px] mr-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center flex-col">
          <h1 className="text-[24px] font-semibold">Where you'll be</h1>
          <ul>
            <li className="flex -ml-10">
              <img src={Location} alt="location" />
              <span className="text-md font-normal ml-2">The Bridle Path</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={SunCloud} alt="Sun & Cloud" />
          <d iv className="flex items-center justify-start flex-col">
            <span className="font-semibold text-md -ml-11">20°C</span>
            <span className="text-sm font-normal ml-2">Broken clouds</span>
          </d>
        </div>
      </div>
      <div className="relative">
        <img src={Iframe} alt="iframe" />
        <img
          className="absolute right-2 top-4"
          src={PlusMinus}
          alt="Plus Minus"
        />
      </div>
    </div>
  );
};

export default Map;
