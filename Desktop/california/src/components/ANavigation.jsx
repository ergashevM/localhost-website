import Logo from "../assets/Logo.svg";
import Search from "../assets/Search.svg";
import Savat from "../assets/Savat.svg";

const Navigation = () => {
  return (
    <div className="h-[80px] flex items-center justify-around ml-5">
      <div className="-ml-18">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="flex items-center justify-between gap-x-5">
        <li>ALL PRODUCTS</li>
        <li>SOLUTIONS</li>
        <li>ABOUT</li>
        <li>SUPPORT</li>
      </ul>
      <div className="flex items-center justify-between gap-x-5 -mr-32">
        <img src={Search} alt="Search" />
        <img src={Savat} alt="Savat" />
      </div>
    </div>
  );
};

export default Navigation;
