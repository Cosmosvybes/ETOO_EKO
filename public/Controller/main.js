import { Enquiry } from "../Model/index.js";
import { getEnquiries } from "../Model/index.js";
export class ConsultancyEngine {
    async makeEnquiry(dataRequest) {
        try {
            const response = await Enquiry(Object.assign({}, dataRequest));
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllEnquiriesRequest() {
        try {
            const response = await getEnquiries();
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}
