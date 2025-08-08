import express from "express";
import { makeEnquiry } from "../endpoints/enquiries/index.js";
export const ROUTER = express.Router();
ROUTER.post("/", makeEnquiry);
