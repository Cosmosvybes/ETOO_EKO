import { db } from "../db.js";
export let enquiries = db.collection("enquiries");
export let admins = db.collection("adminstration");
export let quickContacts = db.collection("contacts");
export let feedbacks = db.collection("feedbacks");
