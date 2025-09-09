import { ConsultancyEngine } from "../../../controller/main.js";
import { getAdmin } from "../../../model/index.js";
import jwt from "jsonwebtoken";

const etoEko = new ConsultancyEngine(); //

export async function registerAdmin(req: any, res: any) {
  const { email, password } = req.body;
  try {
    const adminExist = await getAdmin(email);
    if (adminExist)
      return res
        .status(403)
        .send({ reponse: "This email exist, try a new one", status: 403 });
    const response = await etoEko.SignUpAdminAccount(email, password);
    return response
      ? res.status(200).send({
          response: "Onboarding sucessful",
          status: 200,
          message: `Welcome ${email}`,
        })
      : res.status(503).send({
          response: "Operation failed, service unavailbale, try again !",
        });
  } catch (error) {
    res
      .status(500)
      .send({ response: "connection error / internal server error" });
  }
}

export async function signInAdmin(req: any, res: any) {
  const { email, password } = req.body;

  try {
    const registeredAdmin = await getAdmin(email);
    if (!registeredAdmin) {
      res.status(404).send({ response: "Admin not found", status: 404 });
    } else {
      registeredAdmin.password != password
        ? res.status(403).send({ response: "Incorrect password", status: 403 })
        : (() => {
            const token = jwt.sign({ payload: email }, "secret");
            res.status(200).send({
              response: `Welcome back ${email}`,
              status: 200,
              token,
            });
          })();
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "connection error / internal server error" });
  }
}
