import express from "express";
import { getAllEnquiries, makeEnquiry } from "../endpoints/enquiries/index.js";

export const ROUTER = express.Router();

ROUTER.post("/enquiries", makeEnquiry);
ROUTER.get("/clients-enquiry", getAllEnquiries);
