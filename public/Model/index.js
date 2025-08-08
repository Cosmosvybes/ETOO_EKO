import { enquiries } from "../utils/db/collections/index.js";
export const Enquiry = async (data) => {
    try {
        const response = await enquiries.insertOne(data);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};
