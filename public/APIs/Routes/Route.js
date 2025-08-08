import { makeEnquiry } from "../endpoints/enquiries/index.js";
import express from "express";
export const ROUTER = express.Router();
ROUTER.post("/", makeEnquiry);
