import { ConsultancyEngine } from "../../../controller/main";
const etoEko = new ConsultancyEngine();
export async function makeEnquiry(req, res) {
    const bodyData = req.body;
    try {
        const response = await etoEko.makeEnquiry(Object.assign(Object.assign({}, bodyData), { date: new Date().toLocaleString("en-US", { hour12: true }) }));
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
