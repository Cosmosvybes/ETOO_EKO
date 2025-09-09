// import { USER } from "../interfaces/main.js";
import { requestData } from "../interfaces/main.js";
import { Enquiry, getAdmin, getEnquiries, SignUp } from "../model/index.js";

export class ConsultancyEngine {
  async makeEnquiry<
    T extends { acknowledged: boolean; insertedId: number } | string
  >(dataRequest: requestData) {
    try {
      const response = await Enquiry({ ...dataRequest });
      return response;
    } catch (error) {
      return "Error Occured, try again";
    }
  }

  async getAllEnquiriesRequest<T extends requestData[] | string>() {
    try {
      const response = await getEnquiries();
      return response;
    } catch (error) {
      return "Error Occured";
    }
  }

  async SignUpAdminAccount(email: string, password: string) {
    try {
      const response = await SignUp(email, password);
      return response?.insertedId;
    } catch (error) {
      return "Error occuered, opertaion failed";
    }
  }
}
