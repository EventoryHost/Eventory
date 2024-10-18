import Image from "next/image";
import React from "react";

type Props = {};

const ImageRow = (props: Props) => {
  return (
    <div className="mt-9 flex items-center gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <Image
          key={index}
          src={
            "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/about/girl.png"
          }
          width={200}
          height={200}
          quality={100}
          className={`rotate-${index * 5 - 15}`} // Adjust rotation angle for each image
          alt=""
          style={{ transform: `rotate(${index * 10 - 30}deg)` }} // Inline style to rotate images
        />
      ))}
    </div>
  );
};

export default ImageRow;
