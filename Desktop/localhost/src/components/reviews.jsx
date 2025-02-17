import Johnny from "../assets/Johnny.svg";
import Yuta from "../assets/Yuta.svg";
import Shane from "../assets/Shane.svg";
import Star from "../assets/star.svg";

const Reviews = () => {
  return (
    <div className="w-[1340px] pt-5 ml-15">
      <div className="flex items-center justify-between">
        <h1 className="ml-[18.5px] text-[24px] font-semibold">Results</h1>
        <span className="font-semibold text-md text-teal-500">View all</span>
      </div>
      <div className="grid grid-cols-3 ml-[20px] -mx-[10px] mt-5">
        <div className="w-[433px] h-[202px] rounded-md border border-gray-300 pl-5">
          <ul className="flex items-center justify-between px-5 my-6">
            <li>
              <img src={Johnny} alt="Johnny" />
            </li>
            <li className="-ml-26">
              <h5 className="font-semibold text-md">Johnny Cash</h5>
              <p className="font-normal text-sm text-gray-500">June 2023</p>
            </li>
            <li className="flex items-center mr-7">
              <span className="font-semibold text-md mr-2">5.0</span>
              <img src={Star} alt="star" />
            </li>
          </ul>
          <p className="w-[385px] font-normal text-md px-5 tracking-[1px]">
            Michelle's place was so great and definitely the perfect place for
            our long weekend. The lake is amazing!
          </p>
        </div>
        <div className="w-[433px] h-[202px] rounded-md border border-gray-300 pl-5">
          <ul className="flex items-center justify-between px-5 my-6">
            <li>
              <img src={Yuta} alt="yuta" />
            </li>
            <li className="-ml-26">
              <h5 className="font-semibold text-md">Yuta Watanabe</h5>
              <p className="font-normal text-sm text-gray-500">May 2023</p>
            </li>
            <li className="flex items-center mr-7">
              <span className="font-semibold text-md mr-2">4.5</span>
              <img src={Star} alt="star" />
            </li>
          </ul>
          <p className="w-[385px] font-normal text-md px-5 tracking-[1px]">
            The location is perfect. I love the lake so much!!! This is one of
            the best stays we had for a while. Definitely recommended.
          </p>
        </div>
        <div className="w-[433px] h-[202px] rounded-md border border-gray-300 pl-5">
          <ul className="flex items-center justify-between px-5 my-6">
            <li>
              <img src={Shane} alt="shane" />
            </li>
            <li className="-ml-26">
              <h5 className="font-semibold text-md">Shane Willis</h5>
              <p className="font-normal text-sm text-gray-500">December 2022</p>
            </li>
            <li className="flex items-center mr-7">
              <span className="font-semibold text-md mr-2">4.8</span>
              <img src={Star} alt="star" />
            </li>
          </ul>
          <p className="w-[385px] font-normal text-md px-5 tracking-[1px]">
            A great place overall. One of the nicest place in town for sure. I
            will come back in the next few months with my family :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
