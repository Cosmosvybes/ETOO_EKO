// import { USER } from "../interfaces/main.js";
import { Enquiry } from "../Model/index.js";

export type requestData = {
  name: string;
  email: string;
  enquiryMessage: string;
  date: string;
};

export class Consultancy {
  async makeEnquiry(dataRequest: requestData) {
    try {
      const response = await Enquiry({ ...dataRequest });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
