import axios from "axios";

async function addVenue(data: any) {
  try {
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

// const venueSchema = new Schema({
//     id: { type: String, required: true },
//     name: {
//       type: String,
//       required: true,
//     },
//     operatingHours: {
//       openingTime: {
//         type: String,
//         required: true,
//       },
//       closingTime: {
//         type: String,
//         required: true,
//       },
//     },
//     venueDescription: {
//       type: String,
//       required: true,
//     },
//     capacity: {
//       type: Number,
//       required: true,
//     },
//     decorServices: {
//       type: String,
//       required: true,
//     },
//     audioVisualEquipment: {
//       type: [String],
//       required: true,
//     },
//     accessibilityFeatures: {
//       type: [String],
//       required: true,
//     },
//     facilities: {
//       type: [String],
//       required: true,
//     },
//     termsConditions: {
//       type: String,
//       required: true,
//     },
//     cancellationPolicy: {
//       type: String,
//       required: true,
//     },
//     rates: {
//       hourly: String,
//       daily: String,
//       seasonal: String,
//     },

//     photosVideos: [String],
//     virtualTour: String,

//     socialLinks: {
//       instagramURL: String,
//       websiteURL: String,
//     },
//     restrictionsPolicies: [String],
//     specialFeatures: [String],
//   });

export { addVenue };
