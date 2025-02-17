import Logo from "../assets/logo.svg";
import Notifications from "../assets/notifications.svg";
import Profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1400px] h-[68px] flex justify-between items-center">
        <img src={Logo} alt="logo" />
        <ul className="flex justify-between items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Stays</a>
          </li>
          <li>
            <a href="#">Become a host</a>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <img className="mr-4" src={Notifications} alt="Notifications" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
