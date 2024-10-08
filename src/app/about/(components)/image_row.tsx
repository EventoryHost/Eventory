import Image from 'next/image'
import React from 'react'

type Props = {}

const ImageRow = (props: Props) => {
  return (
    <div className='flex gap-5 items-center mt-9'>
    {Array.from({ length: 6 }).map((_, index) => (
        <Image
            key={index}
            src={"https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"}
            width={200}
            height={200}
            quality={100}
            className={`rotate-${index * 5 - 15}`} // Adjust rotation angle for each image
            alt=""
            style={{ transform: `rotate(${index * 10 - 30}deg)` }} // Inline style to rotate images
        />
    ))}
</div>

  )
}

export default ImageRow