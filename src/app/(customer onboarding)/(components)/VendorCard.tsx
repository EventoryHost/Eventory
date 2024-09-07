import { MapPin , Heart } from "lucide-react";
import { useState } from "react";

interface VendorCardProps {
    imageSrc: string;
    venueName: string;
    location: string;
    description: string;
    tags: string[];
    price: string;
    rating: string;
    totalRatings: number;
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
  }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };
    return (
        <div className="border-2 p-4 rounded-lg relative ">
            <div className="flex items-start justify-between gap-4">
                {/* Image Div */}
                <div className="relative w-5/6 ">
                    <img
                        src={imageSrc}
                        height={400}
                        width={200}
                        alt="Venue Image"
                        className="w-full rounded-md object-cover"
                    />
                    {/* Heart button */}
                    <button
                        onClick={toggleFavorite}
                        className={`absolute top-2 right-2 p-1 `}
                    >
                        <Heart
                            size={24}
                            className={isFavorited ? "text-red-500" : "text-white"}
                            fill={isFavorited ? "red" : "none"} 
                        />
                    </button>
                </div>

                {/* Description Div */}
                <div className="flex-grow gap-4">
                    <div className="font-semibold text-2xl">{venueName}</div>
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <div className="text-gray-600 text-sm">{location}</div>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm">{description}</div>
                        <div className="flex mt-4 gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[#E5E4FE] text-gray-800 px-2 py-2 rounded-md text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Price and Rating Div */}
                <div className="flex flex-col px-2 mx-2 items-end justify-between">
                    <div className="flex items-center mt-2 gap-2">
                        <div className="font-semibold text-sm whitespace-nowrap">{price}</div>
                        <span className="bg-[#2e3192] px-2 py-1 rounded-md text-white text-sm">
                            {rating}
                        </span>
                        <span className="whitespace-nowrap text-xs">({totalRatings} ratings)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorCard;


// <VendorCard
//             imageSrc="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             venueName="Radisson Blue"
//             location="Vijaynagar, Indore"
//             description="We offer the best service in the city. Book us to host your event. We offer best service in the city, book us to host your event."
//             tags={["Banquet hall", "Ball room", "Pool side area"]}
//             price="₹ 2000 onwards"
//             rating="4.2"
//             totalRatings={120}
//           />
//           <VendorCard
//             imageSrc="https://content3.jdmagicbox.com/comp/gurgaon/t7/011pxx11.xx11.201104173131.b9t7/catalogue/parat-sushant-lok-gurgaon-restaurants-549cm38jys.jpg"
//             venueName="Parat caterers"
//             location="gurgaon , india"
//             description="we offer the best food in the city. Book us to host your event. We offer best service in the city, book us to host your event."
//             tags={["Catering", "Food", "Event"]}
//             price="₹ 700 onwards"
//             rating="5.0"
//             totalRatings={567}
//           />