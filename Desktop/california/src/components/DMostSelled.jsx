import MacbookOne from "../assets/MacbookOne.svg";
import WatchTwo from "../assets/WatchTwo.svg";
import MacbookTwo from "../assets/MacbookTwo.svg";
import Ipad from "../assets/Ipad.svg";

const MostSelled = () => {
  return (
    <div className="h-[606px] mt-25">
      <h1 className="font-normal text-[42px] text-center mb-3">
        Save on our most selled items.
      </h1>
      <p className="font-normal text-sm text-center">
        Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
      </p>
      <div className="h-[396px] grid grid-cols-4 ml-22 gap-x-10 mt-15">
        <div>
          <img src={MacbookOne} alt="Macbook" />
          <h1 className="font-normal text-[22px] mt-10">Macbook Pro 13</h1>
          <p className="font-normal text-sm mt-2 mb-5 text-gray-500">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <span className="font-normal text-xl">$ 1,200.00 USD</span>
        </div>
        <div>
          <img src={WatchTwo} alt="WatchTwo" />
          <h1 className="font-normal text-[22px] mt-10">Macbook Pro 13</h1>
          <p className="font-normal text-sm mt-2 mb-5 text-gray-500">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <span className="font-normal text-xl">$ 1,200.00 USD</span>
        </div>
        <div>
          <img src={MacbookTwo} alt="Macbook" />
          <h1 className="font-normal text-[22px] mt-10">Macbook Pro 13</h1>
          <p className="font-normal text-sm mt-2 mb-5 text-gray-500">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <span className="font-normal text-xl">$ 1,200.00 USD</span>
        </div>
        <div>
          <img src={Ipad} alt="Ipad" />
          <h1 className="font-normal text-[22px] mt-10">Macbook Pro 13</h1>
          <p className="font-normal text-sm mt-2 mb-5 text-gray-500">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <span className="font-normal text-xl">$ 1,200.00 USD</span>
        </div>
      </div>
    </div>
  );
};

export default MostSelled;
