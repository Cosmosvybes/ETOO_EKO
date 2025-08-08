import { ConsultancyEngine } from "../../../Controller/main.js";
const etoEko = new ConsultancyEngine();
export async function makeEnquiry(req, res) {
    const bodyData = req.body;
    try {
        const response = await etoEko.makeEnquiry(Object.assign({}, bodyData));
        return (response === null || response === void 0 ? void 0 : response.insertedId)
            ? res.status(200).send({
                responseMessage: "Enquiry Data successfully submitted",
                response,
            })
            : res.status(500).send({ response: "Operation not successful" });
    }
    catch (error) {
        res.status(503).send({ response: "Service Unavailable" });
    }
}
export async function getAllEnquiries(req, res) {
    try {
        const response = await etoEko.getAllEnquiriesRequest();
        return (response === null || response === void 0 ? void 0 : response.length) == 0
            ? res.status(404).send({ response: "No Data entry yet" })
            : res.status(200).send({ response });
    }
    catch (error) {
        res.status(503).send({ response: "Service currently unavailable" });
    }
}
