import { Enquiry } from "../Model/index.js";
export class Consultancy {
    async makeEnquiry(dataRequest) {
        try {
            const response = await Enquiry(Object.assign({}, dataRequest));
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}
