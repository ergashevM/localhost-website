import React, { useState } from "react";
import Image1 from "../assets/Image1.svg";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.jpg";
import Gradus360 from "../assets/360.svg";

const images = [
  { id: 1, src: Image1 },
  { id: 2, src: Image2 },
  { id: 3, src: Image3 },
  { id: 4, src: Image4 },
  { id: 5, src: Image5 },
];

const ThumbnailImages = () => {
  const [mainImage, setMainImage] = useState(images[0].src);
  const [selectedId, setSelectedId] = useState(images[0].id);

  const changeImage = (imageSrc, id) => {
    setMainImage(imageSrc);
    setSelectedId(id);
  };

  return (
    <div className="flex flex-col pt-7 ml-10">
      <img
        src={mainImage}
        alt="Main"
        className="w-[782px] h-[438px] object-cover rounded-md mb-4"
      />
      <div className="relative -ml-1 flex flex-row">
        {images.map((data) => (
          <img
            key={data.id}
            src={data.src}
            alt={`Thumbnail ${data.id}`}
            className={`w-[150px] h-[86px] m-1 cursor-pointer rounded-md ${
              selectedId === data.id ? "border-3 border-teal-500" : ""
            }`}
            onClick={() => changeImage(data.src, data.id)}
          />
        ))}
        <img
          className="absolute top-12 left-[740px]"
          src={Gradus360}
          alt="gradus"
        />
      </div>
    </div>
  );
};

export default ThumbnailImages;
