import { Consultancy } from "../../../Controller/main.js";
const etoEko = new Consultancy();
export async function makeEnquiry(req, res) {
    const bodyData = {
        name: "alfred chris",
        email: "alfrechrirsayo@gmail.com",
        enquiryMessage: "Hello world",
        date: new Date().toLocaleDateString(),
    };
    try {
        const response = await etoEko.makeEnquiry(Object.assign({}, bodyData));
        res.status(200).send({ response });
    }
    catch (error) {
        res.status(500).send({ response: "Error occured" });
    }
}
