import Lake from "../assets/lake.svg";
import Knife from "../assets/knife.svg";
import Camera from "../assets/camera.svg";
import Wifi from "../assets/wifi.svg";
import Car from "../assets/car.svg";
import Shower from "../assets/shower.svg";
import Hot from "../assets/hot.svg";
import Shampoo from "../assets/shampoo.svg";
import FireExtinguisher from "../assets/FireExtinguisher.svg";
import Freezer from "../assets/Freezer.svg";
import CoffeeMaker from "../assets/CoffeeMaker.svg";
import GlassStove from "../assets/GlassStove.svg";

const Amenties = () => {
  return (
    <div className="w-[841px]">
      <h1 className="font-semibold text-[24px] leading-6 tracking-wide pb-7">
        Amenties
      </h1>
      <div className="flex items-center justify-between">
        <ul>
          <li className="flex items-center">
            <img src={Lake} alt="lake" />
            <span className="font-normal text-md ml-2">Lakeside</span>
          </li>
          <li className="flex items-center">
            <img src={Knife} alt="knife" />
            <span className="font-normal text-md ml-2">Kitchen</span>
          </li>
          <li className="flex items-center">
            <img src={Camera} alt="camera" />
            <span className="font-normal text-md ml-2">
              Security cameras on property
            </span>
          </li>
          <li className="flex items-center">
            <img src={Wifi} alt="wifi" />
            <span className="font-normal text-md ml-2">Wifi</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center">
            <img src={Car} alt="car" />
            <span className="font-normal text-md ml-2">Free parking</span>
          </li>
          <li className="flex items-center">
            <img src={Shower} alt="shower" />
            <span className="font-normal text-md ml-2">Outdoor shower</span>
          </li>
          <li className="flex items-center">
            <img src={Hot} alt="hot" />
            <span className="font-normal text-md ml-2">Hot water</span>
          </li>
          <li className="flex items-center">
            <img src={Shampoo} alt="shampoo" />
            <span className="font-normal text-md ml-2">Shampoo</span>
          </li>
        </ul>
        <ul className="mr-30">
          <li className="flex items-center">
            <img src={FireExtinguisher} alt="lakFire Extinguishere" />
            <span className="font-normal text-md ml-2">Fire Extinguisher</span>
          </li>
          <li className="flex items-center">
            <img src={Freezer} alt="Freezer" />
            <span className="font-normal text-md ml-2">Freezer</span>
          </li>
          <li className="flex items-center">
            <img src={CoffeeMaker} alt="Coffee Maker" />
            <span className="font-normal text-md ml-2">Coffee Maker</span>
          </li>
          <li className="flex items-center">
            <img src={GlassStove} alt="Glass stove" />
            <span className="font-normal text-md ml-2">Glass stove</span>
          </li>
        </ul>
      </div>
      <button className="w-[185px] h-[48px] font-semibold text-md text-black border-1 border-teal-900 mt-5 rounded-md hover:bg-black hover:text-white">
        Show all amenties
      </button>
    </div>
  );
};

export default Amenties;
