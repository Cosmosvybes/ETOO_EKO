import { enquiryData, quickContact } from "../interfaces/main.js";
import {
  enquiries,
  feedbacks,
  quickContacts,
} from "../utils/db/collections/index.js";
import { admins } from "../utils/db/collections/index.js";

export const Enquiry = async (data: enquiryData) => {
  try {
    const response = await enquiries.insertOne({
      ...data,
    });
    return response.insertedId;
  } catch (error) {
    return "Error Occured";
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

export const SignUp = async (email: string, password: string) => {
  try {
    const insertionResponse = await admins.insertOne({ email, password });
    return insertionResponse;
  } catch (error) {
    console.log(error);
  }
};

export const getAdmin = async (email: string) => {
  try {
    const user = await admins.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const makeQuickContact = async (data: quickContact) => {
  try {
    const response = await quickContacts.insertOne({ ...data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const writeFeedBacks = async (data: {
  fullname: string;
  email: string;
  message: string;
  ratings: number;
}) => {
  try {
    const result = await feedbacks.insertOne({ ...data });
    return result;
  } catch (error) {
    console.log(error);
  }
};
