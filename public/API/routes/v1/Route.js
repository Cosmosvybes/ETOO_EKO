import express from "express";
import { Auth } from "../../../Auth/Auth.js";
import { getAllEnquiries, makeEnquiry, } from "../../services/enquiries/index.js";
import { registerAdmin, signInAdmin } from "../../services/onboarding/index.js";
export const ROUTER = express.Router();
ROUTER.post("/enquiries", makeEnquiry);
ROUTER.get("/clients-enquiry", Auth, getAllEnquiries);
ROUTER.post("/admin/registeration", registerAdmin);
ROUTER.post("/admin/sign-in", signInAdmin);
