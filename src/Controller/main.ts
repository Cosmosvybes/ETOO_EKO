// import { USER } from "../interfaces/main.js";
import { requestData } from "../interfaces/main.js";
import { Enquiry } from "../Model/index.js";
import { getEnquiries } from "../Model/index.js";

export class ConsultancyEngine {
  async makeEnquiry(dataRequest: requestData) {
    try {
      const response = await Enquiry({ ...dataRequest });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllEnquiriesRequest() {
    try {
      const response = await getEnquiries();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
