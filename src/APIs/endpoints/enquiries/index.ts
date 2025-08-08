import { Consultancy, requestData } from "../../../Controller/main.js";

const etoEko = new Consultancy();

export async function makeEnquiry(req: any, res: any) {
  const bodyData: requestData = {
    name: "alfred chris",
    email: "alfrechrirsayo@gmail.com",
    enquiryMessage: "Hello world",
    date: new Date().toLocaleDateString(),
  };
  try {
    const response = await etoEko.makeEnquiry({ ...bodyData });
    res.status(200).send({ response });
  } catch (error) {
    res.status(500).send({ response: "Error occured" });
  }
}
