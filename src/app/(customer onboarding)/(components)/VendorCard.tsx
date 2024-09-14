import { MapPin, Heart } from "lucide-react";
import { useState } from "react";

interface VendorCardProps {
  imageSrc: any;
  venueName: string;
  location: string;
  description: string;
  tags: string[];
  price: string;
  rating: string;
  totalRatings: number;
  viewType: string;
}

const VendorCard: React.FC<VendorCardProps> = ({
  imageSrc,
  venueName,
  location,
  description,
  tags,
  price,
  rating,
  totalRatings,
  viewType,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  if (viewType === "List") {
    // List view
    return (
      <>
        <div className="flex gap-4 rounded-lg border-2 bg-white p-4">
          {/* Image Div */}
          <div className="w-[450px]">
            <img
              src={imageSrc}
              height={200}
              alt="Venue Image"
              className="w-full rounded-md"
            />
            {/* Heart button */}
            <button
              onClick={toggleFavorite}
              className="absolute right-2 top-2 p-1"
            >
              <Heart
                size={24}
                className={isFavorited ? "text-red-500" : "text-white"}
                fill={isFavorited ? "red" : "none"}
              />
            </button>
          </div>

          {/* Description and Price/Rating Div */}
          <div className="flex flex-grow flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">{venueName}</div>
                {/* Price and Rating Div */}
                <div className="flex items-center gap-2">
                  <div className="whitespace-nowrap text-sm font-semibold">
                    {price}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-[#2e3192] px-2 py-1 text-sm text-white">
                      {rating}
                    </span>
                    <span className="whitespace-nowrap text-xs">
                      ({totalRatings} ratings)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <MapPin size={16} />
                <div className="text-sm text-gray-600">{location}</div>
              </div>
              <div className="mt-4">
                <div className="text-sm">{description}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-[#E5E4FE] px-2 py-1 text-xs text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // Grid view
    return (
      <div
        className={`relative rounded-lg border-2 bg-white p-4 ${
          viewType === "grid" ? "max-w-[300px]" : ""
        }`}
      >
        {/* Image Div */}
        <div className="relative w-full">
          <img
            src={imageSrc}
            alt="Venue Image"
            className="h-64 w-full rounded-md object-cover"
          />
          {/* Heart button */}
          <button
            onClick={toggleFavorite}
            className="absolute right-2 top-2 p-1"
          >
            <Heart
              size={24}
              className={isFavorited ? "text-red-500" : "text-white"}
              fill={isFavorited ? "red" : "none"}
            />
          </button>
        </div>

        {/* Description Div */}
        <div className="mt-4 flex flex-col justify-between">
          <div>
            <div className="flex w-full items-center justify-between">
              {/* Venue Name */}
              <div className="text-xl font-semibold">{venueName}</div>

              {/* Price and Rating Div */}
              <div className="flex items-center gap-1">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#2e3192] px-2 py-1 text-xs text-white">
                    {rating}
                  </span>
                  <span className="whitespace-nowrap text-xs">
                    ({totalRatings} ratings)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1">
              <MapPin size={16} />
              <div className="text-sm text-gray-600">{location}</div>
            </div>
            <div className="mt-4">
              {/* Price */}
              <div className="text-sm font-semibold">{price}</div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-[#E5E4FE] px-2 py-1 text-xs font-semibold text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default VendorCard;
