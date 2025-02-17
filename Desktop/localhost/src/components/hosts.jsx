import HostBackground from "../assets/hostsBackground.png";
import HomeIcon from "../assets/homeIcon.svg";
import DateIcon from "../assets/dateIcon.svg";
import Guest from "../assets/guest.svg";
import Search from "../assets/search.svg";

const Hosts = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${HostBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-[1400px] h-[264px]">
        <h1 className="text-[40px] font-bold leading-10 mt-12">
          Find a <span className="text-teal-500">host</span> for every journey
        </h1>
        <p className="font-light text-[20px] mt-2">
          Discover the best local rental properties that fits your every travel
          needs
        </p>
        <div className="flex items-center justify-center h-[84px] border-1 border-gray-100 rounded-[10px] mt-7 bg-white">
          <input
            type="text"
            className="w-[570px] h-[59px] border border-gray-300 rounded px-5 placeholder-stone-900 mr-2 ml-"
            placeholder="Accommodation"
          />
          <img className="-ml-10 mr-8" src={HomeIcon} alt="home icon" />
          <input
            type="text"
            className="w-[161px] h-[59px] border border-gray-300 rounded px-5 placeholder-stone-900 ml-2 mr-3"
            placeholder="Check-in"
          />
          <img className="-ml-15 mr-12" src={DateIcon} alt="home icon" />
          <input
            type="text"
            className="w-[181px] h-[59px] border border-gray-300 rounded px-5 placeholder-stone-900 mr-4"
            placeholder="Check-out"
          />
          <img className="-ml-15 mr-12" src={DateIcon} alt="home icon" />
          <input
            type="text"
            className="w-[181px] h-[59px] border border-gray-300 rounded px-5 placeholder-stone-900 -ml-1"
            placeholder="Guest"
          />
          <img className="-ml-9" src={Guest} alt="guest" />
          <div className="relative">
            <input
              className="w-[162px] h-[59px] ml-12 bg-teal-500 rounded-lg pl-16 pr-5 placeholder-white"
              placeholder="Search"
              type="search"
            />
            <img className="absolute -mt-9 ml-16" src={Search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosts;
