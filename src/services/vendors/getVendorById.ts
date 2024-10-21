import axios from "axios";

async function getVendorByIdAndCategory(vendorCategory: string, vendorId: string) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${vendorCategory}/${vendorId}`);
        
        console.log('Vendor Data:', response.data);
        return response.data; // Return the vendor data for further use
    } catch (error) {
        console.error('Error fetching vendor:', error);
        // Optionally, throw the error to handle it in the calling component
        throw error; 
    }
}

export { getVendorByIdAndCategory };
