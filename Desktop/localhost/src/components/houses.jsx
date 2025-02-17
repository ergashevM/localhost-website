import Menu from "../assets/menu.svg";
import Map from "../assets/map.svg";
import BrightwoodsCabin from "../assets/BrightwoodsCabin.svg";
import UrbanLoft from "../assets/UrbanLoft.svg";
import ForestvilleCottages from "../assets/ForestvilleCottages.svg";
import UnionvilleLogde from "../assets/UnionvilleLogde.svg";
import MissisuagaAistream from "../assets/MissisuagaAistream.svg";
import NiagaraHomes from "../assets/NiagaraHomes.svg";
import SunnyEstate from "../assets/SunnyEstate.svg";
import LawrenceHills from "../assets/LawrenceHills.svg";
import SimcoeLakeLodge from "../assets/SimcoeLakeLodge.svg";
import WasagaBeachHome from "../assets/WasagaBeachHome.svg";
import BanffHills from "../assets/BanffHills.svg";
import CreemoreCanada from "../assets/CreemoreCanada.svg";
import KawarthaLakes from "../assets/KawarthaLakes.svg";
import RevelstokeCabin from "../assets/RevelstokeCabin.svg";
import BrightwoodsEstateTwo from "../assets/BrightwoodsEstateTwo.svg";
import BrightwoodsEstateThree from "../assets/BrightwoodsEstateThree.svg";
import Star from "../assets/star.svg";
import Trend from "../assets/trend.svg";
import Like from "../assets/like.svg";
import { Link } from "react-router-dom";

const houseData = [
  { id: 1, name: "Brightwoods Cabin", image: BrightwoodsCabin, price: "$658", location: "Bridlepath, Ontario, Canada", rating: 4.9 },
  { id: 2, name: "Urban Loft", image: UrbanLoft, price: "$410", location: "Georgina Bay, Ontario, Canada", rating: 4.5 },
  { id: 3, name: "Forestville Cottages", image: ForestvilleCottages, price: "$325", location: "Simcoe, Ontario Canada", rating: 5.0 },
  { id: 4, name: "Unionville Lodge", image: UnionvilleLogde, price: "$485", location: "Markham, Ontario Canada", rating: 4.6 },
  { id: 5, name: "Mississauga Airstream", image: MissisuagaAistream, price: "$502", location: "Mississauga, Ontario, Canada", rating: 4.8 },
  { id: 6, name: "Niagara Homes", image: NiagaraHomes, price: "$655", location: "Niagara, Ontario, Canada", rating: 4.9 },
  { id: 7, name: "Sunny Estate", image: SunnyEstate, price: "$320", location: "Barcort, Ontario Canada", rating: 5.0 },
  { id: 8, name: "Lawrence Hills", image: LawrenceHills, price: "$350", location: "Lawrence, Ontario Canada", rating: 5.0 },
  { id: 9, name: "Simcoe Lake Lodge", image: SimcoeLakeLodge, price: "$395", location: "Simcoe, Ontario, Canada" },
  { id: 10, name: "Wasaga Beach Home", image: WasagaBeachHome, price: "$385", location: "Georgina Bay, Ontario, Canada", rating: 5.0 },
  { id: 11, name: "Banff Hills", image: BanffHills, price: "$350", location: "Banff, Alberta, Canada", rating: 5.0 },
  { id: 12, name: "Creemore Canada", image: CreemoreCanada, price: "$350", location: "Creemore, Alberta, Canada", rating: 5.0 },
  { id: 13, name: "Kawartha Lakes", image: KawarthaLakes, price: "$350", location: "Kawartha, Alberta, Canada", rating: 5.0 },
  { id: 14, name: "Revelstoke Cabin", image: RevelstokeCabin, price: "$350", location: "Revelstoke, Alberta, Canada", rating: 5.0 },
  { id: 15, name: "Brightwoods Estate", image: BrightwoodsEstateTwo, price: "$350", location: "Brightwoods Estate", rating: 5.0 },
  { id: 16, name: "Brightwoods Estate", image: BrightwoodsEstateThree, price: "$350", location: "Brightwoods Estate", rating: 5.0 },
];

const Houses = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-[1400px] flex items-center justify-between mt-10 mb-6">
          <p className="text-[20px]">
            Stays nearby: <b>Toronto Ontario</b>
          </p>
          <div className="flex items-center justify-between w-[84px] h-[46px] border border-gray-200 rounded px-2">
            <img src={Menu} alt="menu" />
            <img src={Map} alt="map" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[1400px] grid grid-cols-4 gap-x-18 gap-y-8">
          {houseData.map((house) => (
            <Link to="/product-details" key={house.id}>
              <div className="w-[305px] h-[408px]">
                <div className="relative">
                  <img className="rounded-t-[10px]" src={house.image} alt="house" />
                  <img className="absolute top-2 right-4" src={Like} alt="like" />
                </div>
                <div>
                  <div className="flex items-center justify-around mt-2">
                    <div>
                      <h5 className="font-semibold text-base">{house.name}</h5>
                      <p className="text-gray-500 text-sm font-normal">{house.location}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{house.rating}</span>
                      <img className="ml-2" src={Star} alt="Star" />
                    </div>
                  </div>
                  <div className="flex items-center justify-around mt-3">
                    <div>
                      <p className="text-[19px] font-semibold">
                        {house.price}
                        <span className="font-normal text-sm mr-10 text-gray-500">/night</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={Trend} alt="trend" />
                      <p className="font-normal text-sm ml-1 text-teal-500">Price chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-7">
        <button className="w-[147px] h-[48px] text-[16px] font-semibold border border-teal-500 text-teal-500 rounded-md">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Houses;