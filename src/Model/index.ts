import { enquiryData } from "../interfaces/main.js";
import { enquiries } from "../utils/db/collections/index.js";

export const Enquiry = async (data: enquiryData) => {
  try {
    const response = await enquiries.insertOne(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEnquiries = async () => {
  try {
    const data = enquiries.find({}).toArray();
    return data;
  } catch (error) {
    console.log(error);
  }
};
