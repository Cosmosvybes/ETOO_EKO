import { ConsultancyEngine } from "../../../controller/main.js";
import { makeQuickContact } from "../../../model/index.js";
const etoEko = new ConsultancyEngine();
export async function makeEnquiry(req, res) {
    const bodyData = req.body;
    try {
        const response = await etoEko.makeEnquiry({
            ...bodyData,
            date: new Date().toLocaleString("en-US", { hour12: true }),
        });
        return response
            ? res.status(200).send({
                responseMessage: "Enquiry Data successfully submitted",
                response,
            })
            : res.status(503).send({ response: "Service Unavailable" });
    }
    catch (error) {
        res.status(500).send({ response: "Operation not successful" });
    }
}
export async function getAllEnquiries(req, res) {
    try {
        const response = await etoEko.getAllEnquiriesRequest();
        return response.length != 0
            ? res.status(200).send({ response })
            : res.status(404).send({ response: "No Data entry yet" });
    }
    catch (error) {
        res.status(503).send({ response: "Service currently unavailable" });
    }
}
export async function quickContactAPI(req, res) {
    const { fullname, phone, email, message } = req.body;
    const contactData = { fullname, phone, email, message };
    try {
        const response = await makeQuickContact({ ...contactData });
        return response?.insertedId
            ? res.status(200).send({ response: "data well recieved", status: 200 })
            : res.status(503).send({ response: "Operation failed" });
    }
    catch (error) {
        res.status(503).send({ response: "Service currently unavailable" });
    }
}
