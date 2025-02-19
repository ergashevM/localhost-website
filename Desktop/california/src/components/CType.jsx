import Laptop from "../assets/laptop.svg";
import Watch from "../assets/watch.svg";
import Phone from "../assets/phone.svg";
import Tablet from "../assets/tablet.svg";

const Type = () => {
  return (
    <div className="h-[1018px] pt-15 ml-20">
      <h1 className="font-normal text-[42px] text-center mb-3">
        Shop our latest offers and categories
      </h1>
      <p className="font-normal text-sm text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
        est dui, aliquam, <br /> tempor. Faucibus morbi turpis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center justify-center h-[792px] mt-18 gap-x-8.5">
        <div className="flex flex-col">
          <div className="relative w-[639px] h-[472px] shadow-2xl rounded-md mb-12 transform transition-transform duration-300 hover:translate-y-7">
            <img className="absolute left-10" src={Laptop} alt="laptop" />
            <span className="absolute bottom-20 right-10 font-normal text-[15px] text-right">
              Laptops
            </span>
            <h3 className="absolute bottom-11 right-10 font-normal text-[32px] text-right">
              True Laptop
            </h3>
            <span className="absolute bottom-1 right-10 font-normal text-[32px] text-right">
              Solution
            </span>
          </div>
          <div className="relative w-[639px] h-[270px] shadow-2xl rounded-md transform transition-transform duration-300 hover:translate-y-7">
            <img className="absolute left-13" src={Watch} alt="watch" />
            <span className="absolute font-normal text-[15px] text-right right-10 top-21">
              Watch
            </span>
            <h3 className="absolute font-normal text-[32px] text-right right-10 top-24">
              Not just
            </h3>
            <h3 className="absolute font-normal text-[32px] text-right right-10 top-34">
              stylisht
            </h3>
          </div>
        </div>
        <div className="relative w-[312px] h-[792px] shadow-2xl rounded-md transform transition-transform duration-300 hover:translate-y-7">
          <img className="absolute top-25 right-0" src={Phone} alt="phone" />
          <span className="absolute font-normal text-[15px] top-135 left-32">
            Phones
          </span>
          <h3 className="absolute font-normal text-[32px] top-139 left-10">
            Your day to day
          </h3>
          <h3 className="absolute font-normal text-[32px] top-149 left-32.5">life</h3>
        </div>
        <div className="relative w-[312px] h-[792px] shadow-2xl rounded-md transform transition-transform duration-300 hover:translate-y-7">
          <span className="absolute font-normal text-[15px] top-25 left-34">Tablet</span>
          <h3 className="absolute font-normal text-[32px] top-29 left-15">Empower your</h3>
          <h3 className="absolute font-normal text-[32px] top-39 left-32">work</h3>
          <img className="absolute bottom-30" src={Tablet} alt="tablet" />
        </div>
      </div>
    </div>
  );
};

export default Type;
