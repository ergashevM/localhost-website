import Navigation from "../components/navigation";
import Background from "../assets/Background.jfif";
import Guest from "../assets/guest.svg";
import Password from "../assets/password.svg";
import Google from "../assets/Google.svg";
import Facebook from "../assets/Facebook.svg";
import Apple from "../assets/Apple.svg";
import { Link } from "react-router-dom";
import Links from "../components/links";
const SignIn = () => {
  return (
    <div>
      <Navigation />
      <div
        className="w-[1530px] h-[1036px] pt-47"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="flex items-start flex-col gap-y-5 w-[589px] h-[659px] bg-white rounded-md mx-120 pl-13">
          <h1 className="font-bold text-[26px] leading-7 tracking-wide mt-10">
            Sign in
          </h1>
          <div className="relative">
            <input
              type="text"
              className="w-[480px] h-[59px] border border-gray-300 rounded px-5 placeholder-gray-500 mr-2"
              placeholder="Email address"
            />
            <img className="absolute top-4.5 right-5" src={Guest} alt="guest" />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-[480px] h-[59px] border border-gray-300 rounded px-5 placeholder-gray-500 mr-2"
              placeholder="Password"
            />
            <img
              className="absolute top-4.5 right-5"
              src={Password}
              alt="password"
            />
          </div>
          <button className="w-[160px] h-[52px] rounded bg-teal-500 text-white hover:bg-white hover:text-teal-500 hover:border hover:border-teal-500 mb-8">
            Sign in
          </button>
          <div className="w-[493px] h-[162px] border-t border-gray-200 pt-10">
            <h2 className="font-normal text-md mb-5">Or sign in with</h2>
            <div className="w-[493px] h-[125px] grid grid-cols-3">
              <div className="w-[155px] h-[126px] bg-gray-100 py-8 px-14">
                <img className="ml-1" src={Google} alt="google" />
                <h4 className="text-gray-500">Google</h4>
              </div>
              <div className="w-[155px] h-[126px] bg-gray-100 py-8 px-14">
                <img className="ml-4" src={Facebook} alt="google" />
                <h4 className="text-gray-500">Facebook</h4>
              </div>
              <div className="w-[155px] h-[126px] bg-gray-100 py-8 px-14">
                <img className="ml-[2px]" src={Apple} alt="google" />
                <h4 className="text-gray-500">Apple</h4>
              </div>
            </div>
          </div>
          <p className="ml-28 mt-18">
            Don't have an account yet?
            <Link className="text-teal-500 ml-2" to="/sign-up">
            Sign up
            </Link>
          </p>
        </div>
      </div>
      <Links />
    </div>
  );
};

export default SignIn;
