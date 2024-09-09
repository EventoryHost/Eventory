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

    if (viewType === 'List') {
        // List view
        return (<>
            <div className="border-2 bg-white p-4 rounded-lg  flex  gap-4">
                {/* Image Div */}
                <div className=" w-[450px] ">
                    <img
                        src={imageSrc}
                        height={200}
                        alt="Venue Image"
                        className="w-full rounded-md "
                    />
                    {/* Heart button */}
                    <button
                        onClick={toggleFavorite}
                        className="absolute top-2 right-2 p-1"
                    >
                        <Heart
                            size={24}
                            className={isFavorited ? "text-red-500" : "text-white"}
                            fill={isFavorited ? "red" : "none"}
                        />
                    </button>
                </div>

                {/* Description and Price/Rating Div */}
                <div className="flex-grow  flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="font-semibold text-2xl">{venueName}</div>
                            {/* Price and Rating Div */}
                            <div className="flex items-center gap-2 ">
                                <div className="font-semibold text-sm whitespace-nowrap">{price}</div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#2e3192] px-2 py-1 rounded-md text-white text-sm">
                                        {rating}
                                    </span>
                                    <span className="whitespace-nowrap text-xs">({totalRatings} ratings)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                            <MapPin size={16} />
                            <div className="text-gray-600 text-sm">{location}</div>
                        </div>
                        <div className="mt-4">
                            <div className="text-sm">{description}</div>
                            <div className="flex mt-4 gap-2 flex-wrap">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#E5E4FE] text-gray-800 px-2 py-1 rounded-md text-xs"
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
        )
    }
    else {
        // Grid view
        return (
            <div
                className={`border-2 p-4 rounded-lg bg-white relative ${viewType === 'grid' ? 'max-w-[300px]' : ''
                    }`}
            >
                {/* Image Div */}
                <div className="relative w-full">
                    <img
                        src={imageSrc}
                        alt="Venue Image"
                        className="w-full h-64 rounded-md object-cover"
                    />
                    {/* Heart button */}
                    <button
                        onClick={toggleFavorite}
                        className="absolute top-2 right-2 p-1"
                    >
                        <Heart
                            size={24}
                            className={isFavorited ? "text-red-500" : "text-white"}
                            fill={isFavorited ? "red" : "none"}
                        />
                    </button>
                </div>

                {/* Description Div */}
                <div className="flex flex-col justify-between mt-4">
                    <div>
                        <div className="flex items-center justify-between w-full">
                            {/* Venue Name */}
                            <div className="font-semibold text-xl">{venueName}</div>

                            {/* Price and Rating Div */}
                            <div className="flex items-center gap-1">
                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#2e3192] px-2 py-1 rounded-md text-white text-xs">
                                        {rating}
                                    </span>
                                    <span className="whitespace-nowrap text-xs">
                                        ({totalRatings} ratings)
                                    </span>
                                </div>
                            </div>
                        </div>



                        <div className="flex items-center gap-1 mt-2">
                            <MapPin size={16} />
                            <div className="text-gray-600 text-sm">{location}</div>
                        </div>
                        <div className="mt-4">
                            {/* Price */}
                            <div className="font-semibold text-sm">{price}</div>
                        </div>
                    </div>



                    <div className="flex mt-4 gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-[#E5E4FE] text-gray-800 px-2 py-1 rounded-md font-semibold text-xs"
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
