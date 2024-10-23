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
    console.log("backend", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
    throw error
  }
}

// schema for reference

// {
//   "name": " Gourmet Catering",
//   "managerName": " John Doe",
//   "id": " caterer123", dont test with the same id once succesful
//   "cuisine_specialities": [
//       " Italian",
//       " French"
//   ],
//   "regional_specialities": [
//       " Mediterranean",
//       " Asian"
//   ],
//   "service_style_offered": [
//       " Buffet",
//       " Plated"
//   ],
//   "menu": " menu_link",
//   "menuType": " Vegetarian",
//   "appetizers": [
//       " Bruschetta",
//       " Spring Rolls"
//   ],
//   "main_course": [
//       " Pasta Primavera",
//       " Chicken Teriyaki"
//   ],
//   "beverages": [
//       " Wine",
//       " Juice"
//   ],
//   "special_dietary_options": [
//       " Gluten-Free",
//       " Vegan"
//   ],
//   "pre_set_menus": [
//       " Wedding Menu",
//       " Corporate Menu"
//   ],
//   "customizable": true,
//   "event_types_catered": [
//       " Weddings",
//       " Corporate Events"
//   ],
//   "additional_services": [
//       " Bartending",
//       " Cake Cutting"
//   ],
//   "staff_provided": [
//       " Waiters",
//       " Chefs"
//   ],
//   "equipment_provided": [
//       " Cutlery",
//       " Chafing Dishes"
//   ],
//   "minimum_order_requirements": " 50 plates",
//   "advance_booking_period": " 1 month",
//   "deposit_required": " 20%",
//   "per_plate_rates": {
//       "max": " $50",
//       "min": " $20"
//   },
//   "cancellation_policy": " Cancellations made within 1 week of the event will incur a 25% fee.",(file hoga)
//   "tasting_sessions": true,
//   "business_licenses": true,
//   "food_safety_certificates": true,
//   "terms_and_conditions": " All bookings must be confirmed with a deposit. Full payment is due 2 weeks before the event.", (file hoga)
//   "portfolio": [
//       "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/%20Gourmet%20Catering/documents/Resume.pdf",
//       "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/%20Gourmet%20Catering/documents/AnkitKumarChakraborty_210906338_EEE.pdf"
//   ],
// }

export { addCaterer };
