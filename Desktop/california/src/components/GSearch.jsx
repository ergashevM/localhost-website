import SearchTwo from "../assets/SearchTwo.svg";
import Add from "../assets/add.svg";

const Search = () => {
  return (
    <div className="h-[778px] flex flex-col ml-21">
      <h1 className="font-normal text-[42px] text-center mb-3">
        Looking for anything else?
      </h1>
      <div className="flex items-center justify-center ml-10">
        <img
          className="w-[30px] h-[30px] -mr-15"
          src={SearchTwo}
          alt="Search"
        />
        <input
          type="text"
          className="w-[650px] h-[60px] border border-gray-300 rounded pl-20 placeholder-black mr-2 rounded-full"
          placeholder="Search keyword"
        />
      </div>
      <div className="flex items-center justify-center mt-5 gap-x-3">
        <button className="w-[90px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Iphone
        </button>
        <button className="w-[98px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Charger
        </button>
        <button className="w-[68px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Gift
        </button>
        <button className="w-[142px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Google Pixel 3
        </button>
        <button className="w-[109px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Keyboard
        </button>
      </div>
      <div className="flex items-center justify-center mt-3 gap-x-3">
        <button className="w-[118px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          13 Pro Max
        </button>
        <button className="w-[109px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          iPhone 12
        </button>
        <button className="w-[91px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Laptop
        </button>
        <button className="w-[89px] h-[42px] rounded-full font-normal text-sm border border-gray-300">
          Mobile
        </button>
      </div>
      <div className="w-[935px] flex flex-col ml-50 h-[450px] rounded-xl bg-blue-100 mt-15 pt-8">
        <h1 className="font-normal text-[42px] text-center mb-3">
          Never miss a thing
        </h1>
        <p className="font-normal text-md text-center">
          Sign up for texts to be notified about our best offers on the perfect
          gifts.
        </p>
        <div className="flex justify-center mt-5">
          <img width={233} height={200} src={Add} alt="add" />
        </div>
        <div className="flex items-center justify-center mt-2">
          <input
            type="text"
            className="w-[285px] h-[50px] border border-black pl-7 placeholder-black rounded-l-full"
            placeholder="Your email"
          />
          <button className="w-[115px] h-[50px] font-normal text-sm bg-black text-white rounded-r-full">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
