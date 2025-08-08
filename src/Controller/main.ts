// import { USER } from "../interfaces/main.js";
import { requestData } from "../interfaces/main.js";
import { Enquiry } from "../Model/index.js";

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
