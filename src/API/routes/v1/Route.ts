import express from "express";
import { Auth } from "../../../Auth/Auth.js";
import {
  getAllEnquiries,
  makeEnquiry,
  quickContactAPI,
} from "../../services/enquiries/index.js";
import { registerAdmin, signInAdmin } from "../../services/onboarding/index.js";
import { sendFeedBacks } from "../../services/customer-feedbacks/index.js";

export const ROUTER = express.Router();
ROUTER.post("/enquiries", makeEnquiry);
ROUTER.post("/contact-us", quickContactAPI);
ROUTER.get("/clients-enquiry", Auth, getAllEnquiries);
ROUTER.post("/admin/registeration", registerAdmin);
ROUTER.post("/admin/sign-in", signInAdmin);
ROUTER.post("/students/feedback", sendFeedBacks);
