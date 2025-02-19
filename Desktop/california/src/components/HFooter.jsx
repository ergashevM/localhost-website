import Logo from "../assets/Logo.svg";
import "../Project.css";

const Footer = () => {
  return (
    <div className="h-[378px] ml-21">
      <div className="lastBox flex items-center justify-between mt-10 pt-3 pb-10 px-5 border-b border-gray-300">
        <div className="w-[394px] h-[191px]">
          <img src={Logo} alt="Logo" />
          <p className="mt-5 font-normal text-md">
            Sign up for texts to be notified about <br /> our best offers on the
            perfect gifts.
          </p>
        </div>
        <div className="w-[197px] h-[191px]">
          <ul>
            <li className="font-normal text-[22px]">All Products</li>
            <li className="font-normal text-[17px]">Phones</li>
            <li className="font-normal text-[17px]">Watch</li>
            <li className="font-normal text-[17px]">Tablet</li>
            <li className="font-normal text-[17px]">Laptops</li>
          </ul>
        </div>
        <div className="w-[197px] h-[191px]">
          <ul>
            <li className="font-normal text-[22px]">Company</li>
            <li className="font-normal text-[17px]">About</li>
            <li className="font-normal text-[17px]">Support</li>
          </ul>
        </div>
        <div className="w-[197px] h-[191px]">
          <ul>
            <li className="font-normal text-[22px]">Support</li>
            <li className="font-normal text-[17px]">Style Guide</li>
            <li className="font-normal text-[17px]">Licensing</li>
            <li className="font-normal text-[17px]">Change Log</li>
            <li className="font-normal text-[17px]">Contact</li>
          </ul>
        </div>
        <div className="w-[197px] h-[191px]">
          <ul>
            <li className="font-normal text-[22px]">Follow Us</li>
            <li className="font-normal text-[17px]">Instagram</li>
            <li className="font-normal text-[17px]">Facebook</li>
            <li className="font-normal text-[17px]">LinkedIn</li>
            <li className="font-normal text-[17px]">Youtube</li>
          </ul>
        </div>
      </div>
      <div className="links flex items-center justify-between mt-15 px-5">
        <div className="flex items-center">
          <p className="font-normal text-xl">Made By: </p>
          <span className="font-normal text-xl">Azwedo</span>
        </div>
        <div className="flex items-center">
          <p className="font-normal text-xl">Powered by: </p>
          <span className="font-normal text-xl">Webflow</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
