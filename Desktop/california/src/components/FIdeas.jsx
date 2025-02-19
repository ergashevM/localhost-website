import Book from "../assets/Book.svg";
import Arrow from "../assets/Arrow.svg";

const Ideas = () => {
  return (
    <div className="h-[728px]">
      <h1 className="font-normal text-[42px] text-center mb-3">
        Ideas have a place here
      </h1>
      <p className="font-normal text-sm text-center mb-10">
        Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
      </p>
      <div className="flex items-center justify-center ml-21 gap-x-10">
        <div className="w-[620px] h-[420px]">
          <img src={Book} alt="Book" />
        </div>
        <div className="w-[620px] h-[420px] pt-5">
          <p className="font-normal text-[24px]">
            We Make It Easy To Find The Great Design Talent,
            <br /> Easier...
          </p> <br />
          <p className="font-normal text-[24px]">
            Road Design Handbook For The International Road...
          </p> <br />
          <p className="font-normal text-[24px]">
            The Best Kept Secrets About Creative People
          </p> <br />
          <p className="font-normal text-[24px]">
            We Make It Easy To Find The Great Design Talent, <br /> Easier...
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 ml-15">
      <span className="font-normal text-[24px">See all</span>
      <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default Ideas;
