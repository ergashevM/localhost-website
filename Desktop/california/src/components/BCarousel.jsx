import Phones from "../assets/Phones.svg";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Carousel() {
  return (
    <TECarousel showControls showIndicators ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] ml-10">
        <TECarouselItem
          itemID={1}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <div className="h-[550px] flex items-center justify-between bg-blue-100 mx-13 rounded-2xl pl-20">
            <div>
              <h1 className="font-normal text-[58px]">
                The new phones are <br /> here take a look.
              </h1>
              <p className="font-normal text-md leading-[20px] my-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi
                turpis.
              </p>
              <button className="border border-black rounded-full w-[170px] h-[50px]">
                Explore
              </button>
            </div>
            <div>
              <img src={Phones} alt="Phones" />
            </div>
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={2}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <div className="h-[550px] flex items-center justify-between bg-blue-100 mx-13 rounded-2xl pl-20">
            <div>
              <h1 className="font-normal text-[58px]">
                The new phones are <br /> here take a look.
              </h1>
              <p className="font-normal text-md leading-[20px] my-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi
                turpis.
              </p>
              <button className="border border-black rounded-full w-[170px] h-[50px]">
                Explore
              </button>
            </div>
            <div>
              <img src={Phones} alt="Phones" />
            </div>
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={3}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <div className="h-[550px] flex items-center justify-between bg-blue-100 mx-13 rounded-2xl pl-20">
            <div>
              <h1 className="font-normal text-[58px]">
                The new phones are <br /> here take a look.
              </h1>
              <p className="font-normal text-md leading-[20px] my-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi
                turpis.
              </p>
              <button className="border border-black rounded-full w-[170px] h-[50px]">
                Explore
              </button>
            </div>
            <div>
              <img src={Phones} alt="Phones" />
            </div>
          </div>
        </TECarouselItem>
      </div>
    </TECarousel>
  );
}
