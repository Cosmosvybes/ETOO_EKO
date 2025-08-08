import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();
const client = new MongoClient("mongodb+srv://cosmos:ayomide22689@cosmoscluster.o6ovlp8.mongodb.net");
export let db = client.db("ETOO_EKO");
