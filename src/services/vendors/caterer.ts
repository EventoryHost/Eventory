import axios from "axios";

async function addCaterer(data: any) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/add-caterer`,
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

// schema for reference

// const catererSchema = new Schema({
//     name: { type: String, required: true },
//     id: { type: String, required: true },
//     cuisine_specialities: String,
//     regional_specialities: String,
//     service_style_offered: String,
//     menu: {
//       type: { type: String },
//       file: { type: String },
//     },
//     appetizers: [String],
//     main_course: [String],
//     beverages: [String],
//     special_dietary_options: [String],
//     pre_set_menus: [String],
//     customizable: { type: Boolean, default: false },
//     event_types_catered: [String],
//     additional_services: [String],
//     staff_provided: [String],
//     equipment_provided: [String],
//     minimum_order_requirements: String,
//     advance_booking_period: String,
//     deposit_required: String,
//     per_plate_rates: String,

//     package_deals: String,
//     per_plate_price_range: String,

//     cancellation_policy: {
//       file: { type: String },
//       via: { type: String },
//       _id: false,
//     },
//     tasting_sessions: { type: Boolean, default: false },
//     business_licenses: { type: Boolean, default: false },
//     food_safety_certificates: { type: Boolean, default: false },
//     terms_and_conditions: {
//       file: { type: String },
//       via: { type: String },
//       _id: false,
//     },
//     catering_service_images: [String],
//     videos_of_event_setups: [String],
//   });

export { addCaterer };
