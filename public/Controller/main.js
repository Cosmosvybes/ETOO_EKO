import { Enquiry, getEnquiries, SignUp } from "../model/index.js";
export class ConsultancyEngine {
    async makeEnquiry(dataRequest) {
        try {
            const response = await Enquiry(Object.assign({}, dataRequest));
            return response;
        }
        catch (error) {
            return "Error Occured, try again";
        }
    }
    async getAllEnquiriesRequest() {
        try {
            const response = await getEnquiries();
            return response;
        }
        catch (error) {
            return "Error Occured";
        }
    }
    async SignUpAdminAccount(email, password) {
        try {
            const response = await SignUp(email, password);
            return response === null || response === void 0 ? void 0 : response.insertedId;
        }
        catch (error) {
            return "Error occuered, opertaion failed";
        }
    }
}
