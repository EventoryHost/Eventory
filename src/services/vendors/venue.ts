import axios from "axios";

async function addVenue(data: any) {
  try {
    console.log(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/add-venue`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  }
}

// {
//   "id": " venue123", dont test with the same id once succesful
//   "name": " Grand Ballroom",
//   "operatingHours": {
//       "openingTime": " 09:00 AM",
//       "closingTime": " 11:00 PM"
//   },
//   "venueDescription": " A spacious and elegant ballroom perfect for weddings, conferences, and large gatherings.",
//   "seatedCapacity": " 300",
//   "standingCapacity": " 500",
//   "decorServices": " Available",
//   "audioVisualEquipment": [
//       " Projector",
//       " Sound System",
//       " Microphones",
//       " Stage Lighting"
//   ],
//   "accessibilityFeatures": [
//       " Wheelchair Accessible",
//       " Elevator Access"
//   ],
//   "facilities": [
//       " Restrooms",
//       " Parking Lot",
//       " Kitchen",
//       " WiFi"
//   ],
//   "termsConditions": "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Venues/%20Grand%20Ballroom/documents/AnkitKumarChakraborty_210906338_EEE.pdf",
//   "cancellationPolicy": " Cancellations made within 48 hours will incur a 50% fee.", (file hoga) 
//   "rates": {
//       "hourly": [
//           " $100/hr",
//           " $150/hr (peak hours)"
//       ],
//       "daily": [
//           " $800/day",
//           " $1200/day (weekends)"
//       ],
//       "seasonal": [
//           " $700/day (off-season)",
//           " $1000/day (holiday season)"
//       ]
//   },
//   "portfolio": [
//       "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Venues/%20Grand%20Ballroom/documents/AnkitKumarChakraborty_210906338_EEE.pdf"
//   ],
//   "socialLinks": {
//       "instagramURL": " https://instagram.com/grandballroom",
//       "websiteURL": " https://grandballroom.com"
//   },
//   "restrictionsPolicies": [
//       " No smoking indoors",
//       " No outside catering"
//   ],
//   "specialFeatures": [
//       " Chandeliers",
//       " Marble Flooring",
//       " Garden View"
//   ],
//   "_id": "6699960e220f2a0095bdc0fc",
//   "__v": 0
// }

export { addVenue };
